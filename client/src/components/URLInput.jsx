import { useState } from "react";
import axios from "axios";

export default function URLInput({ onSessionStart }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLoad = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/api/chat/load", { url });
      onSessionStart({ sessionId: res.data.sessionId, pageTitle: res.data.pageTitle });
    } catch (err) {
      setError(err.response?.data?.error || "Failed to load URL.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Enter a webpage URL
      </label>

      <div className="flex gap-2">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLoad()}
          placeholder="https://example.com/some-article"
          className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
        <button
          onClick={handleLoad}
          disabled={loading}
          className="px-5 py-2 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-300 text-white text-sm font-medium rounded-lg transition-colors"
        >
          {loading ? "Loading..." : "Load Page"}
        </button>
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-500">{error}</p>
      )}

      <p className="mt-3 text-xs text-gray-400">
        Try: a Wikipedia article, a blog post, or any public docs page.
      </p>
    </div>
  );
}