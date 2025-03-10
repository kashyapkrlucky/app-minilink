/* eslint-disable react/prop-types */
import { ClipboardDocumentCheckIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'

const AppClipboard = ({ text }) => {
    const [copied, setCopied] = useState(false);
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
  
    return (
      <div className="flex items-center space-x-2 border p-2 rounded-md bg-gray-100">
        <span className="text-gray-700 truncate max-w-xs">{text}</span>
        <button onClick={copyToClipboard} className="text-blue-600 hover:text-blue-800">
          {copied ? <ClipboardDocumentCheckIcon className="w-5 h-5" /> : <ClipboardIcon className="w-5 h-5" />}
        </button>
      </div>
    );
  };

export default AppClipboard