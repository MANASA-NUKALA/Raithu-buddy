import React, { useEffect, useState, useRef } from "react";


const VoiceAssistant = ({ handleCommand }) => {
  const [listening, setListening] = useState(false);
  const [userSpeech, setUserSpeech] = useState('');
  const [assistantReply, setAssistantReply] = useState('నాకు వినిపించడం లేదు');
  const recognitionRef = useRef(null);

  // Function to speak the response in Telugu
  const speak = (text, callback = null) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'te-IN';
    window.speechSynthesis.cancel();
    utterance.onend = () => {
      if (callback) callback(); // restart recognition after speaking
    };
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      const msg = 'మీ బ్రౌజర్ వాయిస్ అసిస్టెంట్‌కు మద్దతు ఇవ్వదు.';
      setAssistantReply(msg);
      speak(msg);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'te-IN';
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      setListening(true);
      const msg = 'నేను వింటున్నాను, చెప్పండి';
      setAssistantReply(msg);
      speak(msg);
    };

    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript.trim();
      setUserSpeech(transcript);
      let reply = 'సమాధానం పొందుతున్నాను...';
      setAssistantReply(reply);
      speak(reply);

      try {
      const response = await fetch('http://localhost:5000/api/openai', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt: transcript,
  }),
});

        const data = await response.json();
        reply = data.choices?.[0]?.message?.content || 'సమాధానం అందుబాటులో లేదు.';
      } catch (error) {
        reply = 'క్షమించండి, సర్వర్ నుండి సమాధానం రాలేదు.';
        console.error('OpenAI error:', error);
      }

      setAssistantReply(reply);
      speak(reply, () => {
        if (listening) recognition.start();
      });

      if (handleCommand) {
        handleCommand(transcript);
      }
    };

    recognition.onerror = (event) => {
      const msg = 'క్షమించండి, వినలేకపోయాను.';
      setAssistantReply(msg);
      speak(msg, () => {
        if (listening) recognition.start();
      });
    };

    recognition.onend = () => {
      if (listening) recognition.start();
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, [listening]);

  const toggleListening = () => {
    const recognition = recognitionRef.current;
    if (!recognition) return;

    if (listening) {
      recognition.stop();
      setListening(false);
      const msg = 'వినడం ఆపేశాను';
      setAssistantReply(msg);
      speak(msg);
    } else {
      setUserSpeech('');
      recognition.start();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center space-y-2 w-72 p-3 rounded-lg bg-white shadow-xl">
      <button
        onClick={toggleListening}
        className={`w-14 h-14 rounded-full text-white text-xl shadow-md ${
          listening ? 'bg-red-600 animate-pulse-slow' : 'bg-green-600'
        }`}
        title="మైక్ టోగిల్ చేయండి"
      >
        🎤
      </button>
      <div className="text-sm font-medium text-gray-800">Assistant: {assistantReply}</div>
      <div className="text-xs text-gray-500">మీరు చెప్పారు: {userSpeech}</div>
    </div>
  );
};

export default VoiceAssistant;