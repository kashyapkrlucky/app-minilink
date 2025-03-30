/**
 * ShortLink Model
 * - Defines schema for shortened URLs
 * - Stores analytics data (IP, User-Agent, Clicks)
 * - Supports optional expiration for links
 */

const mongoose = require("mongoose");

const ShortLinkSchema = new mongoose.Schema(
  {
    longUrl: { type: String, required: true },
    shortUrl: { type: String, unique: true, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    clicks: { type: Number, default: 0 },
    analytics: [
      {
        ipAddress: String,
        userAgent: String,
        timestamp: { type: Date, default: Date.now },
      },
    ],
    createdAt: { type: Date, default: Date.now },
    expiresAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ShortLink", ShortLinkSchema);
