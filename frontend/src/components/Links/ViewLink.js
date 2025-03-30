/* eslint-disable react/prop-types */
import React from "react";
// import { copyToClipboard } from "../../services/copyToClipboard";
import CopyToClipboard from "../Common/CopyToClipboard";
// import { BASE_URL } from "../../config";

/**
 * ViewLink Component
 *
 * Displays the shortened URL and provides a copy button for easy sharing.
 * Includes styling and validation to ensure a smooth user experience.
 */
function ViewLink({ shortUrl }) {
  if (!shortUrl) return null; // Prevent rendering if no short URL is provided

  const fullShortUrl = `${"http://localhost:3000"}/${shortUrl}`;

  return (
    <div className="flex flex-col items-center mt-4 p-4 bg-white shadow-lg rounded-lg w-full max-w-md">
      <p className="text-lg font-medium text-gray-700">Shortened URL:</p>
      <div className="flex items-center justify-between w-full bg-gray-100 p-2 rounded-lg">
        <a
          href={fullShortUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline truncate"
        >
          {fullShortUrl}
        </a>
        {/* <button
          className="ml-3 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => copyToClipboard(fullShortUrl)}
        >
          Copy
        </button> */}
        <CopyToClipboard text={fullShortUrl} />
      </div>
    </div>
  );
}

export default ViewLink;
