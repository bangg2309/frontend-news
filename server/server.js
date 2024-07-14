require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.get('/weather', async (req, res) => {
    try {
        const apiUrl = process.env.WEATHER_API_URL;
        const response = await axios.get(apiUrl);
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(PORT, () => {
    console.log(process.env.WEATHER_API_URL)
    console.log(`Server is running on port ${PORT}`);
});
