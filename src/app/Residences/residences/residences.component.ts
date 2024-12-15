import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/residence/residence.model';
import { ResidenceService } from 'src/app/core/services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences= [
  { id: 1, name: 'Residence 1', address: '123 Main St', 
    image: 'image1.jpg', status: 'Disponible' }, 
    { id: 2, name: 'Residence 2', address: 'Inconnu', image: 'image2.jpg', status: 'En Construction' },
     { id: 3, name: 'Residence 3', address: '456 Elm St', image: 'image3.jpg', status: 'Vendu' },
  ]
  
}
