import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HoomeComponent } from './Component/hoome/hoome.component';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HoomeComponent,  RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor (private toHome:Router){
    
  }
 
  onHome(){
    this.toHome.navigate(['/home'])
  }
  onAbout(){
    this.toHome.navigate(['/about'])
  }
  onContact(){
    this.toHome.navigate(['/contact'])
  }
}
