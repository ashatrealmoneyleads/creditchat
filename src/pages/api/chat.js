import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Extract the message from the request body
        const { message } = req.body;

        // Send the message to your Flask server
        const response = await axios.post('https://your-flask-server-url/chatbot', { message });

        // Send the response from your Flask server back to the client
        res.status(200).json({ message: response.data.response });
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
