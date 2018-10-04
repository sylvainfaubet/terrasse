import { Project } from './project';
import { Point } from './point';

describe('ProjectsModule', () => {
    it('should create a project', () => {
        const project = new Project(0);
        expect(project).toBeDefined();
    });

    it('should create a point and verify ', () => {
        const point = new Point(18.69, 16.23);
        Point.roundPosition(point);
        expect(point).toBeDefined();
    });
});
