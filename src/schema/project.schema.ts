import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop()
  color!: string;

  @Prop()
  title!: string;

  @Prop()
  subtitle!: string;

  @Prop()
  image!: string;

  @Prop()
  client!: string;

  @Prop()
  work!: string;

  // constructor() {
  //   super();
  //   this.color = '';
  //   this.title = '';
  //   this.subtitle = '';
  //   this.image = '';
  //   this.client = '';
  //   this.work = '';
  // }
}
export type ProjectType = Project & Document;
export const ProjectSchema = SchemaFactory.createForClass(Project);
