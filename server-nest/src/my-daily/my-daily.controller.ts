import { Body, Controller, Post } from '@nestjs/common';
import { MyDailyService } from './my-daily.service';
import { MyDaily } from 'entities/my_daily.entity';

@Controller('my-daily')
export class MyDailyController {
  constructor(private readonly myDailyService: MyDailyService) {}

  @Post('insert')
  async createDaily(@Body() dailyData: Array<Partial<MyDaily>>) {
    console.log('In: ', dailyData);
    return this.myDailyService.createDaily(dailyData);
  }
}
