import { Component, OnInit } from '@angular/core';
import { FakeStoreService } from '../../servicios/fake-store.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  products: any[] = [];
  constructor(private fakeStoreService: FakeStoreService){}

  obtenerProductos():void{
    this.fakeStoreService.getProducts().subscribe(
      data => this.products = data,
      error => console.log(error),
      () => console.log('FIN')
    )
  }

  eliminarProducto(id:number):void{
    this.fakeStoreService.deleteProduct(id).subscribe(
      {
        next: (response) => {
          console.log('Product deleted successfully:', response);
          alert('Product deleted successfully!');
        },
        error: (err) => {
          console.error('Error deleting product:', err);
          alert('Failed to delete product.');
        }
      }
    )
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }
}
