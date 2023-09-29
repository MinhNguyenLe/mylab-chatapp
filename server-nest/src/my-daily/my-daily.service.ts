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
  createDaily(dailyData: Array<Partial<MyDaily>>) {
    return this.myDailyRepo.save(
      dailyData.map((i) => ({ ...i, createdAt: new Date() })),
    );
  }

  getDailyByBulkFilter(filter: { from: Date; to: Date }) {
    const { from, to } = filter;

    return this.myDailyRepo
      .createQueryBuilder('my_daily')
      .andWhere('my_daily.createdAt >= :from', { from })
      .andWhere('my_daily.createdAt < :to', { to })
      .select(['my_daily.type AS type'])
      .select([
        'type',
        "JSON_AGG(json_build_object('from', my_daily.from, 'to', my_daily.to)) as data",
      ])
      .groupBy('type')
      .where('type IS NOT NULL')
      .getRawMany();
  }
}
