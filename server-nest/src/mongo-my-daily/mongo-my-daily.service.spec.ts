import { Test, TestingModule } from '@nestjs/testing';
import { MongoMyDailyService } from './mongo-my-daily.service';

describe('MongoMyDailyService', () => {
  let service: MongoMyDailyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoMyDailyService],
    }).compile();

    service = module.get<MongoMyDailyService>(MongoMyDailyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
