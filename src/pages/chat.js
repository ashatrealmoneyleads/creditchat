import { useState } from 'react';

export default function Chat() {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    async function sendChat(e) {
        e.preventDefault();

        // driving me crazy
        console.log('Sending chat:', message);

        const response = await fetch('/api/chatbot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        const data = await response.json();

        // checking output
        console.log('Received response:', data);

        setChat([...chat, { message: data.reply, type: 'bot' }]);
        setMessage('');
    }

    return (
        <div>
            <form onSubmit={sendChat}>
                <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Oh come on..."
                />
                <button type="submit">Send</button>
            </form>

            <div>
                {chat.map((msg, index) => (
                    <p key={index}>
                        <strong>{msg.type === 'bot' ? 'Bot: ' : 'You: '}</strong>
                        {msg.message}
                    </p>
                ))}
            </div>
        </div>
    );
}
