import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent {
  
  constructor(
    private router: Router
  ){}

  toLogin(){
    this.router.navigate(['/login']);
  }
}
