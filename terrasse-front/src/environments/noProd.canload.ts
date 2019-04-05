import { CanLoad } from '@angular/router';
import { environment } from 'src/environments/environment';

export class NoProdCanLoad implements CanLoad {

    public canLoad(): boolean {
       return !environment.production;
    }

}
