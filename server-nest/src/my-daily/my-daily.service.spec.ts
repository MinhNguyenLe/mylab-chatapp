import { Test, TestingModule } from '@nestjs/testing';
import { MyDailyService } from './my-daily.service';

describe('MyDailyService', () => {
  let service: MyDailyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyDailyService],
    }).compile();

    service = module.get<MyDailyService>(MyDailyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
