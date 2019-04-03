import { Injectable } from '@angular/core';
import { Structure } from './structure';

@Injectable({
    providedIn: 'root'
})
export class StructureService {

    constructor() { }

    countBottomSpaces(structure: Structure) {
        return structure.topSpace;
    }
}
