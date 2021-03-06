import { List, IList } from '../models';
import { ParameterizedContext } from 'koa';

export const showAll = async (ctx: ParameterizedContext) => {
  try {
    const lists = await List.find({});
    ctx.body = {
      lists
    }
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
}

export const createList = async (ctx: ParameterizedContext) => {
  const newListData: IList = ctx.request.body;
  try {
    const newList = await List.create({
      title: newListData.title,
      content: newListData.content
    });
    ctx.body = newList;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
}
