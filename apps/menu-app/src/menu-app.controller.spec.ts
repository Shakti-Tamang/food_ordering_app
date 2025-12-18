import { Test, TestingModule } from '@nestjs/testing';
import { MenuAppController } from './menu-app.controller';
import { MenuAppService } from './menu-app.service';

describe('MenuAppController', () => {
  let menuAppController: MenuAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MenuAppController],
      providers: [MenuAppService],
    }).compile();

    menuAppController = app.get<MenuAppController>(MenuAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(menuAppController.getHello()).toBe('Hello World!');
    });
  });
});
