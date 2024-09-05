const { createOrder } = require('./paypalService');  // Import paypalService.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { amount } = req.body;  // Get amount from request body
            const order = await createOrder(amount);
            res.json(order);
        } catch (error) {
            console.error('Error creating order:', error.message);
            res.status(500).send('Error creating order');
        }
    } else {
        res.status(405).send({ message: 'Only POST requests are allowed' });
    }
}
