import { Document } from 'mongoose';

export interface ProjectInterface extends Document {
  readonly color: string;
  readonly title: string;
  readonly subtitle: string;
  readonly image: string;
  readonly client: string;
  readonly work: string;
}
