import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 7070;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello Sam'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
