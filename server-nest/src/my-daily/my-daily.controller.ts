import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Get('get-by-bulk-filter')
  async getDailyByBulkFilter(
    @Body()
    params: {
      filter: {
        from: Date;
        to: Date;
      };
    },
  ) {
    console.log('In: ', params);
    return this.myDailyService.getDailyByBulkFilter(params);
  }
}
