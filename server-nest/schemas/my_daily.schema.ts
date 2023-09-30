import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type MyDailyDocument = HydratedDocument<MMyDaily>;

@Schema()
export class MMyDaily extends Document {
  @Prop()
  id: number;

  @Prop({ required: true })
  type: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  from: Date;

  @Prop({ required: true })
  to: Date;

  @Prop({ required: true })
  createdAt: Date;
}

export const MyDailySchema = SchemaFactory.createForClass(MMyDaily);
