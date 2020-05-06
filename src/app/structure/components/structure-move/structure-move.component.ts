import { Component, Input } from '@angular/core';
import { EditPointModalService } from 'src/app/point/components/edit-point-modal/edit-point-modal.service';
import { Structure } from '../../models/structure';

@Component({
  selector: 'terrasse-structure-move',
  templateUrl: './structure-move.component.html',
  styleUrls: ['./structure-move.component.scss']
})
export class StructureMoveComponent {
  @Input() structure: Structure;

  constructor(private editPointModalService: EditPointModalService) { }

  moveStructure(): void {
    this.editPointModalService.modifyPoint(this.structure.offset, 'Déplacer la structure');
  }

}
