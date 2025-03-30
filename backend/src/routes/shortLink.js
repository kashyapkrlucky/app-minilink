/**
 * ShortLink Routes
 * - Defines API endpoints for URL shortening and redirection
 */

const express = require("express");
const router = express.Router();
const {
  shortenUrl,
  redirectUrl,
  linkStats,
} = require("../controllers/shortLink");

router.post("/shorten", shortenUrl);
/**
 * GET /links
 * Fetch all shortened links and their stats (shortUrl, longUrl, clickCount, createdAt)
 */
router.get("/links", linkStats);
router.get("/:shortUrl", redirectUrl);

module.exports = router;
