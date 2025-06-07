import React, { useState, useEffect, useRef } from 'react';

const VoiceAssistant = ({ handleCommand }) => {
  const [listening, setListening] = useState(false);
  const [userSpeech, setUserSpeech] = useState('');
  const [assistantReply, setAssistantReply] = useState('నాకు వినిపించడం లేదు');
  const recognitionRef = useRef(null);

  // Speak text in Telugu
  const speak = (text, callback = null) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'te-IN';
    window.speechSynthesis.cancel();
    utterance.onend = () => {
      if (callback) callback(); // Callback to restart recognition
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
    recognition.continuous = false; // We'll control restarting manually

    recognition.onstart = () => {
      setListening(true);
      const msg = 'నేను వింటున్నాను, చెప్పండి';
      setAssistantReply(msg);
      speak(msg);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim();
      setUserSpeech(transcript);

      const reply = getHardcodedReply(transcript);
      setAssistantReply(reply);

      // Speak and then restart recognition (conversation loop)
      speak(reply, () => {
        if (listening) {
          recognition.start(); // Continue listening
        }
      });

      if (handleCommand) {
        handleCommand(transcript);
      }
    };

    recognition.onerror = (event) => {
      const msg = 'క్షమించండి, నాకు వినిపించలేదు. దయచేసి మరలా ప్రయత్నించండి.';
      setAssistantReply(msg);
      speak(msg, () => {
        if (listening) recognition.start();
      });
    };

    recognition.onend = () => {
      if (listening) {
        recognition.start(); // Keep restarting unless manually stopped
      }
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

  const getHardcodedReply = (input) => {
    const cmd = input.toLowerCase();

    if (cmd.includes('వాతావరణ') || cmd.includes('వాతావరణం')) {
      return 'ఈ రోజు వాతావరణం తక్కువ గాలితో కూడి ఉంటుంది. మీరు వర్షం కోసం సిద్ధంగా ఉండండి.';
    } else if (cmd.includes('పంట రేటు') || cmd.includes('క్రాప్ ప్రైస్')) {
      return 'ఇప్పటి పంట రేటులు: బియ్యం ₹45, గోధుమలు ₹35.';
    } else if (cmd.includes('హోమ్') || cmd.includes('ఇంటికి')) {
      return 'మీరు ప్రధాన పేజీకి వెళ్తున్నారు.';
    } else {
      return 'క్షమించండి, నేను అర్థం చేసుకోలేకపోయాను.';
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center space-y-2 w-64 p-3 rounded-lg bg-white shadow-xl">
      <button
        onClick={toggleListening}
        className={`w-14 h-14 rounded-full text-white text-xl shadow-md 
          ${listening ? 'bg-red-600' : 'bg-green-600'}`}
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
