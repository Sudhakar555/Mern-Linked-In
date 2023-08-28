import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
import routes from './routes/cricketRoutes';
// Create Express app instance
const app = express();

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Body Parser Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

routes(app);

const PORT = 4000;

app.get('/', (req, res) => 
    res.send(`Our App is running in ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Running on ${PORT}`)
);
