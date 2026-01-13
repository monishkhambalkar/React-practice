import React, {useState, useRef} from "react";

const VoiceSearch =({onSearch}) => {
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const recognitionRef = useRef(null);
    const startListening = () =>{
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Speech recognition not supported in this browser!");
            return;
        }
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = "en-IN";
        recognitionRef.current.onstart = () => setListening(true);
        recognitionRef.current.onresult = (event) =>{
            const transcript = event.results[0][0].transcript;
            setText(transcript);
            setListening(false);
            onSearch(transcript);
        }
        recognitionRef.current.onerror = () => setListening(false);
        recognitionRef.current.onend = () => setListening(false);
        recognitionRef.current.start();
    }
    const stopListening = () => {
        recognitionRef.current && recognitionRef.current.stop();
        setListening(false);
    };
     return (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <input
            type="text"
            value={text}
            placeholder="Search products..."
            onChange={(e) => setText(e.target.value)}
            style={{ padding: 10, width: "300px" }}
        />

        {!listening ? (
            <button onClick={startListening}>🎤 Speak</button>
        ) : (
            <button onClick={stopListening}>⛔ Stop</button>
        )}

        <button onClick={() => onSearch(text)} style={{ background: "orange" }}>
            Search
        </button>
        </div>
    );
}

export default VoiceSearch;