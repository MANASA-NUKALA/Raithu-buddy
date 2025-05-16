import React from "react";

const VoiceAssistant = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">🗣️ Voice Assistant</h2>
      <button className="bg-purple-600 text-white px-4 py-2 rounded">🎤 Speak</button>
      <p className="text-sm text-gray-700 mt-2">Say: "Show me the weather", "Suggest a crop", etc.</p>
    </div>
  );
};

export default VoiceAssistant;
