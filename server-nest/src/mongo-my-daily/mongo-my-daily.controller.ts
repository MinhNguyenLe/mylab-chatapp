import { Body, Controller, Post } from '@nestjs/common';
import { MongoMyDailyService } from './mongo-my-daily.service';

@Controller('mongo-my-daily')
export class MongoMyDailyController {
  constructor(private readonly mMyDailyService: MongoMyDailyService) {}

  @Post('insert')
  async createDailyMongo(@Body() createCatDto: any) {
    console.log('In: ', createCatDto);
    return this.mMyDailyService.createDaily(createCatDto);
  }
}
