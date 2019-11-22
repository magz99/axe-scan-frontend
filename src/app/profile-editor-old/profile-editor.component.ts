import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.less'],
})
export class ProfileEditorComponent implements OnInit {
  // FormGroup tracks status and changes for each of its controls
  // You can nest FormGroups within another FormGroup to create a
  // more organized model
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      streetNumber: new FormControl(''),
      streetName: new FormControl(''),
      unitNumber: new FormControl(''),
      postalCode: new FormControl(''),
      city: new FormControl(''),
      province: new FormControl(''),
    }),
  });

  constructor() {}

  ngOnInit() {}

  // Will capture the current value of the profileForm (source of truth)
  onSubmit() {
    console.warn(this.profileForm.value);
  }

  // 2 ways to update the values for a FormGroup: patchValue() and setValue()
  // setValue() strictly adheres to the structure of the form group
  // patchValue() will update any property of the object that have changed in the form model
  // patchValue() may fail silently, but setValue() has strict checks that help find nesting errors
  // patchValue() only updates properties that the form model has defined.

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Bobby',
      address: {
        streetName: 'Perkins Ave.',
        province: 'AB',
      },
    });
  }
}
