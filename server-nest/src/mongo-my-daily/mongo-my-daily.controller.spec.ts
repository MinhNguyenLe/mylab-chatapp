import { Test, TestingModule } from '@nestjs/testing';
import { MongoMyDailyController } from './mongo-my-daily.controller';

describe('MongoMyDailyController', () => {
  let controller: MongoMyDailyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MongoMyDailyController],
    }).compile();

    controller = module.get<MongoMyDailyController>(MongoMyDailyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
