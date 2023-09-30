import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserModule } from 'src/user/user.module';
import { Users } from 'entities/users.entity';
import { MyDaily } from 'entities/my_daily.entity';
import { MyDailyModule } from 'src/my-daily/my-daily.module';
// import { MongooseModule } from '@nestjs/mongoose';
// import { MongoMyDailyModule } from './mongo-my-daily/mongo-my-daily.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'postgres',
      entities: [Users, MyDaily],
      synchronize: true,
    }),
    // MongooseModule.forRoot('mongodb://localhost/ttl'),
    // MongoMyDailyModule,
    UserModule,
    MyDailyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
