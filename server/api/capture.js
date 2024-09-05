const { capturePayment } = require('./paypalService');  // Import paypalService.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { orderID } = req.query;  // Get orderID from request parameters
            const capture = await capturePayment(orderID);
            res.json(capture);
        } catch (error) {
            console.error('Error capturing payment:', error.message);
            res.status(500).send('Error capturing payment');
        }
    } else {
        res.status(405).send({ message: 'Only POST requests are allowed' });
    }
}
