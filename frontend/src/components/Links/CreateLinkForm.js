/* eslint-disable react/prop-types */
import React, { useState } from "react";

/**
 * CreateLinkForm Component
 *
 * This component provides an input form where users can enter a long URL
 * to be shortened. Upon submission, it clears the input field and calls
 * the onShorten function passed as a prop.
 */
function CreateLinkForm({ onShorten }) {
  const [longUrl, setLongUrl] = useState("");

  /**
   * Handles form submission for shortening a URL
   */
  const handleSubmit = () => {
    if (!longUrl.trim()) return; // Prevent empty submissions
    onShorten(longUrl);
    setLongUrl(""); // Clear input field after submission
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white shadow-lg rounded-lg w-full max-w-md">
      <h2 className="text-xl font-semibold text-gray-700">Shorten Your URL</h2>
      <div className="flex w-full gap-2">
        <input
          type="text"
          placeholder="Enter long URL"
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={handleSubmit}
        >
          Shorten
        </button>
      </div>
    </div>
  );
}

export default CreateLinkForm;
