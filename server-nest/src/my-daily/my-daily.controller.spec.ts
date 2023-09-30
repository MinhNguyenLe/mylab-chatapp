import { Test, TestingModule } from '@nestjs/testing';
import { MyDailyController } from './my-daily.controller';

describe('MyDailyController', () => {
  let controller: MyDailyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyDailyController],
    }).compile();

    controller = module.get<MyDailyController>(MyDailyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
