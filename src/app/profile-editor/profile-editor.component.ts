import { FormBuilder, Validators, FormArray } from '@angular/forms';
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
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      streetNumber: [''],
      streetName: [''],
      unitNumber: [''],
      postalCode: [''],
      city: [''],
      province: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  // FormArray is similar to a FormGroup, but you can dynamically add or remove
  // FormControls to it. The dynamic controls don't have to be named, whereas in
  // the FormGroup they do.

  get aliases() {
    // this.profileForm.get('aliases') actually reuturns an AbstractFormControl
    // which is why we need to cast it to FormArray to access all the methods
    // we need.
    return this.profileForm.get('aliases') as FormArray;
  }

  // FormBuilder has 3 methods control(), group() and array()
  // Each builds an instance of FormControl, FormGroup and FormArray
  constructor(private fb: FormBuilder) {}

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

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
