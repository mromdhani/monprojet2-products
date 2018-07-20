import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../domain/produit';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  produits: Produit[];

  constructor(private _service: ProduitService ) { }  // Dependency Injection

  ngOnInit() {
    this.produits = this._service.getAllProducts();
  }

}
