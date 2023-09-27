import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MyDaily } from 'entities/my_daily.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MyDailyService {
  constructor(
    @InjectRepository(MyDaily)
    private readonly myDailyRepo: Repository<MyDaily>,
  ) {}
  async createDaily(dailyData: Array<Partial<MyDaily>>) {
    return await this.myDailyRepo.save(dailyData);
  }
}
