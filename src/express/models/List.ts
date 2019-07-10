import { Document, Schema, Model, model } from 'mongoose';

export interface IList {
  title: string;
  content: string;
}

export interface IListModel extends IList, Document {
  id: String,
  createdAt: Date
}

export const ListSchema = new Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const List: Model<IListModel> = model<IListModel>('List', ListSchema);
