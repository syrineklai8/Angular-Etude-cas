import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  residenceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.residenceForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]],
      status: ['Disponible'],
      apartments: this.fb.array([]),
    });
  }

  get apartments() {
    return this.residenceForm.get('apartments') as FormArray;
  }

  addApartment() {
    const apartmentGroup = this.fb.group({
      apartmentNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      floorNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      surface: ['', Validators.required],
    });
    this.apartments.push(apartmentGroup);
  }

  onSubmit() {
    if (this.residenceForm.valid) {
      console.log('Résidence :', this.residenceForm.value);
    }
  }
  
}
