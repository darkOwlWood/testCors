const express = require('express');
const cors = require('cors');
const app = express();
const { config } = require('./config');

const { testRoute } = require('./routes/TestRoute');

app.use(cors({
    origin: `${config.protocol}://${config.frontend}`,
    credentials: true,
}));
app.use(express.json());

app.get('/',(req, res, next) => {
    res.send(`${config.protocol}://${config.frontend}`);
});

testRoute(app);

app.listen(config.port, () => console.log(`http://localhost${config.port}`));