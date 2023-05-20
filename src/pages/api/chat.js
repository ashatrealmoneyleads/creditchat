export default function handler(req, res) {
    const message = req.body.message;

    // This is a very basic "chatbot" that just echoes back the user's message.
    // You could replace this with a call to a more sophisticated chatbot service.
    const reply = `You said: ${message}`;

    res.status(200).json({ reply });
}
