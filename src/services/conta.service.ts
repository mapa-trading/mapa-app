import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from 'rxjs';
import { IUser } from "src/models/user.model";


@Injectable({
    providedIn: 'root'
  })
  export class ContaService {
    
    private readonly API = 'https://mapa-conta.herokuapp.com/';

    private listUsers: IUser[] = [];
    
    constructor(
        private http: HttpClient
      ) { this.getUsers().subscribe(
        (usuarios: IUser[]) => {
            this.listUsers = usuarios;
          }
      ); }

    getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(this.API + 'usuario')
        .pipe(
          tap(console.log)
        );
      }

    authUser(nome:string, email:string) :boolean{
        let aux:boolean = false;
        this.listUsers.forEach((u:IUser) => {
            if(u.nome == nome && u.email == email){
                aux = true;
            }
        })
        return aux;
    }
    
    createUser(user:IUser) {
        console.log(user);
        user.receberNotificacoesDispositivo = false;
        user.receberNotificacoesEmail = false;
        user.receberNotificacoesWhatsapp = false;
        return this.http.post(this.API + 'usuario', user)
            .subscribe(resposta => {
                return true;
            }, erro => {
                return false;
        });
    }



  }