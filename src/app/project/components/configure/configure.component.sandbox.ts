import { sandboxOf } from 'angular-playground';
import { ConfigureComponent } from './configure.component';

export default sandboxOf(ConfigureComponent)
  .add('default', {
    template: `<terrasse-configure></terrasse-configure>`
  });
