import { KitoRoutingModule } from './kito-routing.module';

describe('KitoRoutingModule', () => {
    let kitoRoutingModule: KitoRoutingModule;

    beforeEach(() => {
        kitoRoutingModule = new KitoRoutingModule();
    });

    it('should create an instance', () => {
        expect(kitoRoutingModule).toBeTruthy();
    });
});
