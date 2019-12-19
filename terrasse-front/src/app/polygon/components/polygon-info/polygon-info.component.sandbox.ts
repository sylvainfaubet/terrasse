import { sandboxOf } from 'angular-playground';
import { PolygonInfoComponent } from './polygon-info.component';
import { Polygon } from '../../models/polygon';
import { Point } from 'src/app/point/models/point';

export default sandboxOf(PolygonInfoComponent).add('default', {
    template: `<terrasse-polygon-info [(polygon)]="polygon"></terrasse-polygon-info>`,
    context: {
        polygon: new Polygon([
            new Point(15, 19),
            new Point(20.5, 13),
            new Point(13.5, 11.5),
            new Point(7, 16),
            new Point(5.5, 13.5),
            new Point(7.5, 10),
            new Point(13, 7),
            new Point(17.5, 6.5),
            new Point(22, 10),
            new Point(23.5, 17),
        ]),
    },
});
