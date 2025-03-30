/**
 * ShortLink Service
 * - Handles core business logic for URL shortening
 * - Implements expiration logic
 * - Stores analytics (IP, User-Agent)
 */

const ShortLink = require("../models/ShortLink");
const { nanoid } = require("nanoid");

/**
 * Creates a new shortened URL.
 * @param {String} longUrl - Original long URL.
 * @param {String} userId - User ID who created the link.
 * @param {Date} expiresAt - Optional expiration date.
 * @returns {Object} - ShortLink object.
 */
exports.createShortLink = async (longUrl, userId, expiresAt) => {
  const shortUrl = nanoid(8);
  return await ShortLink.create({ longUrl, shortUrl, userId, expiresAt });
};

/**
 * Retrieves and processes a shortened URL.
 * - Increments click count
 * - Captures user analytics
 * - Handles expiration logic
 * @param {String} shortUrl - Shortened URL identifier.
 * @param {Object} req - Express request object (for IP and User-Agent).
 * @returns {Object} - Original URL or error response.
 */
exports.getShortLink = async (shortUrl, req) => {
  const link = await ShortLink.findOne({ shortUrl });

  if (!link) return { error: "Short link not found", status: 404 };

  if (link.expiresAt && new Date() > new Date(link.expiresAt)) {
    return { error: "Short link has expired", status: 410 };
  }

  // Capture analytics data
  const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const userAgent = req.headers["user-agent"];

  link.analytics.push({ ipAddress, userAgent });
  link.clicks += 1;
  await link.save();

  return { longUrl: link.longUrl };
};

exports.getLinkStats = async () => {
  const links = await ShortLink.find().select(
    "shortUrl longUrl clicks createdAt"
  );
  return links;
};
