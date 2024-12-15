import { Component } from '@angular/core';
import { Residence } from './residence.model';
import { ResidenceService } from '../../services/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {

  listResidences: Residence[] = [
  ];    
    constructor(private residenceService:ResidenceService){}
    ngOnInit(){
      this.residenceService.getResidences().subscribe(
        (data)=>{
          this.listResidences=data;
        }
      )
    }

  showLocation(residence: Residence) {
    if (residence.address === 'Inconnu') {
      alert('Adresse de cette résidence est inconnue');
    } else {
      alert('Adresse: ' + residence.address);
    }
  }

  getStatusMessage(status: string): string {
    switch(status) {
      case 'Disponible':
        return 'Disponible pour vente';
      case 'En Construction':
        return 'En cours de construction';
      case 'Vendu':
        return 'Cette résidence est vendue';
      default:
        return 'Statut inconnu';
    }
  }

  favoriteResidences: number[] = [];

  toggleFavorite(residence: Residence) {
    const index = this.favoriteResidences.indexOf(residence.id);
    if (index === -1) {
      this.favoriteResidences.push(residence.id);
    } else {
      this.favoriteResidences.splice(index, 1);
    }
  }

  isFavorite(residence: Residence): boolean {
    return this.favoriteResidences.includes(residence.id);
  }


  searchTerm: string = '';
  filteredResidences() {
    return this.listResidences.filter(residence => {
      return residence.address.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}
