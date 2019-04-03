import { CanLoad} from '@angular/router';
import { environment } from 'src/environments/environment';

export class NoProdCanLoad implements CanLoad {

    canLoad(): boolean {
       return !environment.production;
    }

}
