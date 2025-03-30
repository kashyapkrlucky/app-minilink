// In src/pages/LinkStats.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";

function LinkStats() {
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(null);

  // Fetch all links on component mount
  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/links");
        setLinks(data);
      } catch (err) {
        setError("Failed to load link stats. Please try again.");
      }
    };

    fetchLinks();
  }, []);

  return (
    <Layout>
      <main className="bg-white min-h-screen p-8">
        <div className="mx-auto max-w-7xl flex">
          <div className="w-full flex flex-col lg:flex-col gap-4 ">
            <h1 className="text-3xl font-semibold text-center text-gray-900">
              Link Statistics
            </h1>
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

            <div className="mt-8 overflow-x-auto">
              <div className="grid grid-cols-4 gap-6 border-b border-gray-200 p-4 font-semibold text-gray-700">
                <div className="px-2 py-2">Short URL</div>
                <div className="px-2 py-2">Long URL</div>
                <div className="px-2 py-2">Clicks</div>
                <div className="px-2 py-2">Date Created</div>
              </div>

              {links.length > 0 ? (
                links.map((link) => (
                  <div
                    key={link._id}
                    className="grid grid-cols-4 gap-6 border-b border-gray-100 p-1 text-gray-800 hover:bg-gray-50"
                  >
                    <div className="px-2 py-2 text-blue-600">
                      <a
                        href={`http://localhost:3000/${link.shortUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {`http://localhost:3000/${link.shortUrl}`}
                      </a>
                    </div>
                    <div className="px-2 py-2 text-gray-600 truncate">
                      {link.longUrl}
                    </div>
                    <div className="px-2 py-2">{link.clicks}</div>
                    <div className="px-2 py-2">
                      {new Date(link.createdAt).toLocaleString()}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-4 text-center text-gray-500 py-4">
                  No data available
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default LinkStats;
