import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  residences = [
    { id: 1, name: 'Residence A' },
    { id: 2, name: 'Residence B' },
    { id: 3, name: 'Residence C' }
  ];

  apartForm: FormGroup;

  constructor() {
    this.apartForm = new FormGroup({
      apartmentNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      floorNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      surface: new FormControl('', Validators.required),
      terrace: new FormControl(false),
      surfaceTerrace: new FormControl({ value: '', disabled: true }),
      residence: new FormControl('', Validators.required),
    });
    // Activer/désactiver le champ "Surface Terrace"
    this.apartForm.get('terrace')?.valueChanges.subscribe((checked) => {
      if (checked) {
        this.apartForm.get('surfaceTerrace')?.enable();
      } else {
        this.apartForm.get('surfaceTerrace')?.disable();
        this.apartForm.get('surfaceTerrace')?.reset();
      }
    });
  }

  onSubmit() {
    if (this.apartForm.valid) {
      const newApart = this.apartForm.value;
      console.log('Données saisies :', newApart);
    }
  }
}
