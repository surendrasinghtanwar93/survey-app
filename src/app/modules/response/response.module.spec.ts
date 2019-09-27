import { ResponseModule } from './response.module';

describe('ResponseModule', () => {
  let responseModule: ResponseModule;

  beforeEach(() => {
    responseModule = new ResponseModule();
  });

  it('should create an instance', () => {
    expect(responseModule).toBeTruthy();
  });
});
