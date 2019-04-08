import { sandboxOf } from 'angular-playground';
import { DrawTypeSelectorComponent } from './draw-type-selector.component';

export default sandboxOf(DrawTypeSelectorComponent)
  .add('default', {
    template: `<terrasse-draw-type-selector></terrasse-draw-type-selector>`
  });
