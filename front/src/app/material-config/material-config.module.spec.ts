import { MaterialConfigModule } from './material-config.module';

describe('MaterialConfigModule', () => {
  let materialConfigModule: MaterialConfigModule;

  beforeEach(() => {
    materialConfigModule = new MaterialConfigModule();
  });

  it('should create an instance', () => {
    expect(materialConfigModule).toBeTruthy();
  });
});
