import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import { showAll, createList } from './controllers';

const app = new Koa();
const router = new Router();
const PORT: number = 8000;

mongoose.connect('mongodb://localhost:27017/usp_codelabs', { useNewUrlParser: true });

app.use(BodyParser());

router.get('/', async ctx => {
  ctx.body = 'USP Codelabs! :)';
});
router.get('/list', showAll);
router.post('/list', createList);

app.use(router.routes());
app.listen(PORT);

console.log(`Server running on port ${PORT}`);
