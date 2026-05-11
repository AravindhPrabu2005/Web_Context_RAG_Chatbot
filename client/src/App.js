import { useState } from "react";
import URLInput from "./components/URLInput";
import ChatWindow from "./components/ChatWindow";

export default function App() {
  const [session, setSession] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">🌐 WebPage Buddy</h1>
          <p className="text-gray-500 mt-1">Paste any article or docs URL and chat with it!</p>
        </div>

        {!session ? (
          <URLInput onSessionStart={setSession} />
        ) : (
          <>
            {/* Active session banner */}
            <div className="flex items-center justify-between bg-teal-50 border border-teal-200 rounded-lg px-4 py-2 mb-4">
              <span className="text-sm text-teal-800 font-medium truncate">
                📄 {session.pageTitle}
              </span>
              <button
                onClick={() => setSession(null)}
                className="ml-4 text-xs text-red-500 hover:text-red-700 font-semibold shrink-0"
              >
                ✕ Load new URL
              </button>
            </div>
            <ChatWindow sessionId={session.sessionId} />
          </>
        )}
      </div>
    </div>
  );
}