import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { showAll, createList } from './controllers';

const app = express();
const PORT = 8000;

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.set('view engine', 'ejs') // set up ejs for templating

mongoose.connect('mongodb://localhost:27017/usp_codelabs_express', { useNewUrlParser: true });

const router = express.Router();

router.get('/', function (req, res) {
  res.send('USP Codelabs! :)')
});
router.get('/lists', showAll);
router.post('/list', createList);

app.use(router);
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
