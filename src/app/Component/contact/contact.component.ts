import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
input: any= 'hard coded ';
users = [
  {name: "shoya",
    isSingle: true,
    salary : 18000
  },
  {name: "soham",
    isSingle: false,
    salary : 9000
  }
]

  // onChange(e:Event){
  //   const val = (e.target as HTMLInputElement).value
  //    this.input = val;
    
  }