import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Residence } from '../models/residence/residence.model';


@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  residenceUrl ='http://localhost:3000/residences';

  constructor(private http:HttpClient) { }
  getResidences(){
     return this.http.get<Residence[]>(this.residenceUrl)
    } 
    addResidence(r:Residence){
      this.http.post(this.residenceUrl,r)
    }
    updateResidence(r:Residence){
      return this.http.put('$(this.residenceUrl,r)/($r.id)',r)
    }
    deleteResidence(id:number){
      return this.http.delete('$(this.residenceUrl,r)/($r.id)')
    }
    getResidencesById(id:number){
      return this.http.get<Residence[]>('$(this.residenceUrl,r)/($r.id)')
     } 
}
