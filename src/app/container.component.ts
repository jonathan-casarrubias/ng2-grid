import { Component } from '@angular/core';
import { GRID_DIRECTIVES } from './grid';

@Component({
  moduleId: module.id,
  selector: 'container-app',
  templateUrl: 'container.component.html',
  styleUrls: ['container.component.css'],
  directives: [...GRID_DIRECTIVES]
})
export class ContainerAppComponent {
  title = 'container works!';
}