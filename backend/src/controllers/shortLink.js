/**
 * ShortLink Controller
 * - Handles incoming API requests
 * - Calls ShortLinkService for business logic
 */

const shortLinkService = require("../services/shortLink");

/**
 * Controller: Shortens a URL
 */
exports.shortenUrl = async (req, res) => {
  const { longUrl, userId, expiresAt } = req.body;

  if (!longUrl) return res.status(400).json({ error: "Long URL is required" });

  try {
    const newShortLink = await shortLinkService.createShortLink(
      longUrl,
      userId,
      expiresAt
    );
    res.status(201).json(newShortLink.shortUrl);
  } catch (err) {
    console.log(err);

    res.status(500).json({ error: "Server error" + err.error });
  }
};

/**
 * Controller: Redirects to original URL
 */
exports.redirectUrl = async (req, res) => {
  try {
    const { shortUrl } = req.params;
    const result = await shortLinkService.getShortLink(shortUrl, req);

    if (result.error)
      return res.status(result.status).json({ error: result.error });

    res.redirect(result.longUrl);
  } catch (err) {
    res.status(500).json({ error: "Server error" + err.error });
  }
};

exports.linkStats = async (req, res) => {
  try {
    const links = await shortLinkService.getLinkStats();
    res.json(links);
  } catch (err) {
    res.status(500).json({ error: "Server error" + err.error });
  }
};
