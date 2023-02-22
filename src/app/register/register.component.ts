import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IUser, MUser } from 'src/models/user.model';
import { ContaService } from 'src/services/conta.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent {

  public user: IUser = new MUser();

  constructor(
    private router: Router,
    private contaService: ContaService,
    private messageService: MessageService,
  ){}

  toLogin(){
    this.router.navigate(['/login']);
  }

  toRegister(user: IUser){
    let ok = this.contaService.createUser(user);
    if(ok){
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Conta criada'});
    } else {
      this.messageService.add({severity:'error', summary:'Error', detail:'Algo deu errado!'});
    }
  }

}
