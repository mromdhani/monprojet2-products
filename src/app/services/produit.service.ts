import { Injectable } from '@angular/core';
import { Produit } from '../domain/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  data: Produit[];

  constructor() {
    this.data = [
      {'code': 'P1000', 'libelle': 'Cafe', 'prixUnitaire': 1500},
      {'code': 'P2000', 'libelle': 'The', 'prixUnitaire': 1100},
      {'code': 'P3000', 'libelle': 'Jus d Orange', 'prixUnitaire': 4500},
    ];
  }
  public getAllProducts() {
    return this.data;
  }

}
