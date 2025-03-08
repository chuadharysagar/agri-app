"use client";

import React, { useState } from "react";

const ChatAIPage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const aiResponse = { text: "This is a dummy AI response.", sender: "ai" };

    setMessages([...messages, userMessage, aiResponse]);
    setInput("");
    setShowPlaceholder(false); // Hide placeholder after first input
  };

  return (
    <div className="h-[85vh] flex flex-col items-center bg-gray-100">
      {/* Header */}
      {/* Chat Messages Section */}
      <div className="flex-1 w-full max-w-5xl p-6 mt-4 overflow-hidden">
        <div className="h-[65vh] overflow-y-auto p-4 bg-white shadow-lg rounded-lg border">
          {showPlaceholder && (
            <div className="text-gray-500 text-center my-4">
              Ask Anything...
            </div>
          )}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 my-2 rounded-lg ${
                msg.sender === "user"
                  ? "bg-green-200 text-right"
                  : "bg-blue-200 text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </div>

      {/* Input Section (Always Visible) */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl p-4 bg-white shadow-md border-t flex items-center"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 py-3 border-2 border-black bg-green-600 text-white rounded-r-lg hover:bg-green-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatAIPage;
