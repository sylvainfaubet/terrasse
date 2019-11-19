import { PolygonModule } from "./polygon.module";

describe("PolygonModule", () => {
  let polygonModule: PolygonModule;

  beforeEach(() => {
    polygonModule = new PolygonModule();
  });

  it("should create an instance", () => {
    expect(polygonModule).toBeTruthy();
  });
});
