const express = require('express');
const qr = require('qr-image');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/generate-qr', (req, res) => {
    const { text } = req.query; 
    if (!text) {
        return res.status(400).send('URL query parameter is required');
    }
    const qrCode = qr.image(text, { type: 'png' });
    res.type('png');
    qrCode.pipe(res);
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});
