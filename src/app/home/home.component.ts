import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IAtivo, MAtivo } from 'src/models/ativo.model';
import { ICotacao, MCotacao } from 'src/models/cotacao.model';
import { ITipo } from 'src/models/tipo.model';
import { CotacoesService } from 'src/services/cotacoes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  preserveWhitespaces: true
})
export class HomeComponent implements OnInit {
  

  public tipos: ITipo[] = [];
  public ativos: IAtivo[] = [];
  public selectedAtivos: IAtivo[] = [];
  public activateDD: boolean = false;
  public activateCard: boolean = false;
  public selectedAtivo: IAtivo = new MAtivo();

  public today: Date | undefined;
  public cotacao: ICotacao = new MCotacao();
  public cotacoes: ICotacao[] = [];
  public date1: Date | undefined;
  public date2: Date | undefined;
  public activateChart: boolean = false;

  public formatoData = new Intl.DateTimeFormat('pt-BR', {year: 'numeric', month: '2-digit', day: '2-digit'});

  constructor(
    private cotacoesService: CotacoesService
  ){}
  

  ngOnInit(): void {

    this.activateDD = false;
    this.activateCard = false;
    this.activateChart = false;

    this.today = new Date();

    this.tipos = this.cotacoesService.getTipos();

    this.cotacoesService.getAtivos().subscribe(
      (ativos: IAtivo[]) => {
        this.ativos = ativos;
      }
    );

  }

  onSelectedTipo(selectedTipo: string){
    this.selectedAtivos = [];
    this.ativos.forEach(a => {
      if(a.tipoAtivo == selectedTipo){
        this.selectedAtivos.push(a);
        this.activateDD = true;
      }
    });
    
  }

  onSelectedAtivo(selectedAtivo: string){
    this.selectedAtivos.forEach(a => {
      if(a.sigla == selectedAtivo){
        this.selectedAtivo = a;
      }
    });
    let hoje:string = this.formatoData.format(this.today).split('/').reverse().join('-');
    this.cotacoesService.getCotacao(selectedAtivo, hoje, hoje).subscribe(
      (cotacao: ICotacao) => {
        this.cotacao = cotacao;
        console.log("COTACAO:"+ this.cotacao);
        this.activateCard = true;
      }
    );
  }

  toLink(){
    window.open(this.selectedAtivo.website, '_blank');
  }

  getCotacoes(){
    let data1 = this.formatoData.format(this.date1).split('/').reverse().join('-');
    let data2 = this.formatoData.format(this.date2).split('/').reverse().join('-');

    this.cotacoesService.getCotacoes(this.selectedAtivo.sigla, data1, data2).subscribe(
      (cotacoes: ICotacao[]) => {
        this.cotacoes = cotacoes;
      }
    );
    
  }

}
