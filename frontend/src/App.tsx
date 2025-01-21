import {useState} from 'react'
import './App.css'

function App() {
    const [myMessage, setMyMessage] = useState("");
    const [aiMessage, setAIMessage] = useState("");

    async function sendMessage() {
        const resp = await fetch("http://localhost:5001/chat", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: myMessage
            })
        });
        const data = await resp.json();
        setAIMessage(data.response);
        console.log(data);
    }

    return (
        <>
            <h1>Depression AI Chat</h1>
            <div>
                <p>
                    Message your: {myMessage}
                </p>
                <input onChange={(e) => setMyMessage(e.target.value)} value={myMessage} />
                <p>
                    Message AI: {aiMessage}
                </p>
            </div>
            <div className="card">
                <button onClick={sendMessage}>
                    Send Message
                </button>
            </div>
        </>
    )
}

export default App
