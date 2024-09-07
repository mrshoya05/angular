import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
users = [
  {
    name: "shoyab",
    salary: 10000,
    status: true
  },
  {
    name: "Arman",
    salary: 1200,
    status: false 
  }
]
}
