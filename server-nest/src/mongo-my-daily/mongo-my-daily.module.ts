import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MMyDaily, MyDailySchema } from 'schemas/my_daily.schema';
import { MongoMyDailyService } from './mongo-my-daily.service';
import { MongoMyDailyController } from './mongo-my-daily.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MMyDaily.name, schema: MyDailySchema }]),
  ],
  providers: [MongoMyDailyService],
  controllers: [MongoMyDailyController],
})
export class MongoMyDailyModule {}
