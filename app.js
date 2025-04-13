// Import dependencies and setup Express
const express = require('express');
const QRcode = require('qrcode');
const app = express();
const PORT = 3000; // or any other unused port


// Define QR Generation route
app.get('/qrcode', (req, res) => {
    // Define the URL that we would like to convert into QR code
    const url = 'https://www.example.com';

    // Convert URL -> dataURL (QR image representation)
    QRcode.toDataURL(url, (err, qrCodeUrl) => {
        // Handle QR code generation errors
        if (err) {
            // If there is an error, respond with '500 Internal Server Error'
            res.status(500).send('Internal Server Error');
        } else {
            // If no error, send a response that includes an HTML page
            res.send(`
                <!DOCTYPE HTML>
                <html>
                    <head>
                        <title>QR Code Generator</title>
                    </head>
                    <body>
                        <h1>QR Code Generator</h1>
                        <img src="${qrCodeUrl}" alt="QR code">
                        <p>Scan the QR code to visit the website</p>
                    </body>
                </html>
            `);
        }
    });
});

// Start the server and listen to requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
