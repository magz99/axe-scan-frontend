import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { FormControl } from '@angular/forms';

// Adding a service to the providers array here (within the Component),
// Will create one instance of the service each time a new instance of
// this component is created. Kind of like a factory?
@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.less'],
  providers: [],
})
export class NameEditorComponent implements OnInit, OnChanges {
  name = new FormControl('');
  @Input() someName: string;
  constructor() {}

  ngOnInit() {
    // setInterval(() => {
    //   this.someName = this.someName + 1;
    // }, 1000);
  }

  updateName() {
    this.name.setValue('Sangie');
    this.someName = 'Maggie';
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes: ', changes);
  }
}
