import { KitoModule } from './kito.module';

describe('KitoModule', () => {
  let kitoModule: KitoModule;

  beforeEach(() => {
    kitoModule = new KitoModule();
  });

  it('should create an instance', () => {
    expect(kitoModule).toBeTruthy();
  });
});
