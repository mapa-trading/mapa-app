import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ContaService } from 'src/services/conta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  nome: string = '';
  email: string = '';

  constructor(
    private contaService: ContaService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toLogin(nome:string , email:string){
    let aux:boolean = this.contaService.authUser(nome, email);
    if(aux == true){
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Login efetuado'});
      this.router.navigate(['/home']);
    } else {
      this.messageService.add({severity:'error', summary:'Error', detail:'Nome ou e-mail errado!'});
    }
    
  }

  toRegister(){
    this.router.navigate(['/register']);
  }

  toRecover(){
    this.router.navigate(['/recover']);
  }


}
