import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MMyDaily } from 'schemas/my_daily.schema';

@Injectable()
export class MongoMyDailyService {
  constructor(
    @InjectModel(MMyDaily.name) private myDailyModal: Model<MMyDaily>,
  ) {}

  async createDaily(createCatDto: any) {
    const createdCat = new this.myDailyModal(createCatDto);
    return createdCat.save();
  }
}
