import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
title = "myTitle !"
subTitle = "i am sub title  from home component !"
brand = { name: '', status: '', ram: '' };

brands = [
  { name: 'BrandA', status: 'Available', ram: '8GB' },
  { name: 'BrandB', status: 'Out of Stock', ram: '16GB' },
  { name: 'BrandC', status: 'Available', ram: '4GB' }
];

selectedBrand = { name: '', status: '', ram: '' };
btnClick() {
  const foundBrand = this.brands.find(b => b.name === this.brand.name);
  if (foundBrand) {
    this.selectedBrand = foundBrand;
  } else {
    this.selectedBrand = { name: 'Not Found', status: '', ram: '' };
  }
}
}

