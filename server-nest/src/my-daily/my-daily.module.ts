import { Module } from '@nestjs/common';
import { MyDailyService } from './my-daily.service';
import { MyDailyController } from './my-daily.controller';
import { MyDaily } from 'entities/my_daily.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MyDaily])],
  providers: [MyDailyService],
  controllers: [MyDailyController],
})
export class MyDailyModule {}
