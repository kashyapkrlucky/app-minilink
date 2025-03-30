import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout";
import axios from "axios";
import CreateLinkForm from "../components/Links/CreateLinkForm";
import ViewLink from "../components/Links/ViewLink";

/**
 * Home Component
 *
 * This is the main page where users can input a long URL to shorten and view the result.
 * The page also displays any errors and the shortened URL.
 */
function Home() {
  const { t } = useTranslation();
  const [shortUrl, setShortUrl] = useState(null);
  const [error, setError] = useState(null);
  /**
   * Clears the short URL state on load
   */
  useEffect(() => {
    setShortUrl(null);
  }, []);

  /**
   * Handles the shortening of the long URL
   */
  const handleShorten = async (longUrl) => {
    setError(null);
    try {
      const { data } = await axios.post("http://localhost:3000/shorten", {
        longUrl,
      });
      setShortUrl(data);
    } catch (err) {
      setShortUrl("");
      setError("Failed to shorten URL. Try again.");
    }
  };
  return (
    <Layout>
      <main className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
        <div className="relative isolate px-6 pt-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-18 lg:py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {t("welcome")}
              </h1>
              <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
                <CreateLinkForm onShorten={handleShorten} />
                {error && <p className="text-red-500 mt-2">{error}</p>}
                {shortUrl && <ViewLink shortUrl={shortUrl} />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
