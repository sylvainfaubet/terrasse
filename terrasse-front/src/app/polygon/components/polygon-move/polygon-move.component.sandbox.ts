import { sandboxOf } from 'angular-playground';
import { PolygonMoveComponent } from '../polygon-move.component';

export default sandboxOf(PolygonMoveComponent)
  .add('default', {
    template: `<terrasse-polygon-move></terrasse-polygon-move>`
  });
