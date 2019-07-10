import { List } from '../models';
import { Request, Response } from 'express';
import { IList, IListModel } from '../models';

export const showAll = (_: Request, res: Response) => {
  List.find({}, (err, lists) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ lists });
    }
  });
}

export const createList = (req: Request, res: Response) => {
  const { title, content } = req.body
  const newListData: IList = {
    title,
    content
  }
  List.create(newListData, (err: any, newList: IListModel) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ newList });
    };
  })
}
