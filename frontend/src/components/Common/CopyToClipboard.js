/* eslint-disable react/prop-types */
import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
/**
 * CopyButton Component
 *
 * Displays a copy icon, and upon copying the text, it changes to a check icon.
 * A tooltip message appears to inform users that the text has been copied.
 */
function CopyToClipboard({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };
  return (
    <button
      className="relative group p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-300"
      onClick={handleCopy}
    >
      {copied ? (
        <CheckIcon className="w-5 h-5 text-green-800" />
      ) : (
        <ClipboardDocumentIcon className="w-5 h-5 text-gray-800" />
      )}
      <span className="absolute bottom-full mb-2 max-w-32 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
        {copied ? "Copied!" : "Copy to clipboard"}
      </span>
    </button>
  );
}

export default CopyToClipboard;
