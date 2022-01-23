const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const userRoutes = require('./routes/userRoute');

app.use('/users', userRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage!'));

app.listen(PORT, () => console.log(`Server running on port : http://localhost:${PORT}`));
