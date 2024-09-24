const jwt = require('jsonwebtoken');

const createToken = async (req, res) => {
    try {
        const { userId } = req.body; 

        const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token });
    } catch (error) {
        
        res.status(400).json({ error: error.message });
    }
};

module.exports = createToken;
