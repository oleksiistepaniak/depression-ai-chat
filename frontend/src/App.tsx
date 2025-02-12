import {useState} from 'react'
import './App.css'
import {format} from "date-fns";
import {uk} from "date-fns/locale/uk";

type MessageType = "AI" | "YOU";

interface MessageStruct {
    text: string;
    created_at: Date;
    type: MessageType;
}

function App() {
    const [messages, setMessages] = useState<MessageStruct[]>([]);
    const [myCurrentMessage, setMyCurrentMessage] = useState<string>("");

    async function sendMessage() {
        setMessages(prev => {
            return [...prev, {
                created_at: new Date(),
                text: myCurrentMessage,
                type: "YOU",
            }]
        })
        setMyCurrentMessage("");
        const resp = await fetch("http://localhost:5001/chat", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: myCurrentMessage
            })
        });
        const data = await resp.json();
        setMessages(prev => {
            return [...prev, {
                created_at: new Date(),
                text: data.response,
                type: "AI"
            }]
        });
    }

    console.log("URL: ", window.location.origin);

    return (
        <div style={{display: "flex", gap: "10px", flexDirection: "column"}}>
            {/*<GoogleOAuthProvider clientId={"1037655929053-grb5amjo6odlhdh7a41r8p8ikojqi91s.apps.googleusercontent.com"}>*/}
            <h1>Depression AI Chat</h1>
            <div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
                {Boolean(messages.length) && messages.map(it => {
                    return (
                        <div style={
                            {
                                display: "flex",
                                flexDirection: "column",
                                backgroundColor: it.type === "YOU" ? "lightgray" : "ghostwhite",
                                borderRadius: "10px",
                                textAlign: "start",
                                padding: "10px",
                            }}>
                            <p>
                                {it.type}: {it.text}
                            </p>
                            <p style={{display: "flex", alignSelf: "flex-end"}}>
                                {format(it.created_at, "dd.MM.yyyy HH:mm", {locale: uk})}
                            </p>
                        </div>
                    )
                })}
            </div>
            <textarea
                style={{borderRadius: "10px", padding: "10px"}}
                placeholder="Enter your message to AI"
                rows={5}
                cols={120}
                onChange={(e) => setMyCurrentMessage(e.target.value)}
                value={myCurrentMessage}
            />
            <div className="card">
                <button onClick={sendMessage}>
                    Send Message
                </button>
            </div>
            {/*<div>*/}
            {/*    <h1>Login with Google</h1>*/}
            {/*    <GoogleLogin onSuccess={handleSuccess} onError={() => console.log('Login Failed')}/>*/}
            {/*</div>*/}
            {/*</GoogleOAuthProvider>*/}
        </div>
    )
}

export default App
