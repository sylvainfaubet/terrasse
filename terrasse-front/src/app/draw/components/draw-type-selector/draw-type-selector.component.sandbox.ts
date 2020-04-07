import { sandboxOf } from 'angular-playground';
import { DrawTypeSelectorComponent } from './draw-type-selector.component';
import { DrawType } from '../../models/draw.type';

export default sandboxOf(DrawTypeSelectorComponent)
  .add('default', {
    template: `<terrasse-draw-type-selector></terrasse-draw-type-selector>`
  }).add('type piscine', {
    template: `<terrasse-draw-type-selector [(type)]="type"></terrasse-draw-type-selector>`,
    context: {
      type: DrawType.Piscine
    }
  });
