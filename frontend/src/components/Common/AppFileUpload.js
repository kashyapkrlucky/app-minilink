/* eslint-disable react/prop-types */
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'

const AppFileUpload = ({ onUpload }) => {
    const [file, setFile] = useState(null);
  
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      if (onUpload) onUpload(selectedFile);
    };
  
    return (
      <div className="border-dashed border-2 border-gray-300 p-6 rounded-md text-center flex flex-col items-center">
        <ArrowUpTrayIcon className="w-12 h-12 text-gray-400 mb-2" />
        <p className="text-gray-500 mb-2">Drag & drop a file or click to upload</p>
        <input
          type="file"
          className="hidden"
          id="file-upload"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
          Choose File
        </label>
        {file && <p className="text-gray-600 mt-2">Selected: {file.name}</p>}
      </div>
    );
  };

export default AppFileUpload