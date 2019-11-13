import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoProdGuard implements CanLoad {
  canLoad(): boolean {
    return !environment.production;
  }
}
