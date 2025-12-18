import { Test, TestingModule } from '@nestjs/testing';
import { OrdeeDetailsController } from './ordee-details.controller';
import { OrdeeDetailsService } from './ordee-details.service';

describe('OrdeeDetailsController', () => {
  let ordeeDetailsController: OrdeeDetailsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrdeeDetailsController],
      providers: [OrdeeDetailsService],
    }).compile();

    ordeeDetailsController = app.get<OrdeeDetailsController>(OrdeeDetailsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ordeeDetailsController.getHello()).toBe('Hello World!');
    });
  });
});
