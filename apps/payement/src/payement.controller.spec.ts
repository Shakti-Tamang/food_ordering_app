import { Test, TestingModule } from '@nestjs/testing';
import { PayementController } from './payement.controller';
import { PayementService } from './payement.service';

describe('PayementController', () => {
  let payementController: PayementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PayementController],
      providers: [PayementService],
    }).compile();

    payementController = app.get<PayementController>(PayementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(payementController.getHello()).toBe('Hello World!');
    });
  });
});
