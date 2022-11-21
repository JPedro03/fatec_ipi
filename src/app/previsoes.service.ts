import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Padrão de Projeto (Design Pattern): Observer
export class PrevisoesService {

  private previsoesSubject = new Subject();

  private appid: string = "ef0b0973b783e0614ac87612ec04344b";
  private url: string =
    `https://api.openweathermap.org/data/2.5/forecast?units=metric&`;

  constructor (
    private httpClient: HttpClient
  ){

  }

  obterPrevisoes (cidade: string, data : string) : void {
    this.url =
      `${this.url}&q=${cidade}&appid=${this.appid}`
    this.httpClient.get(this.url).subscribe((resposta: any) => {
      const icon = resposta.list[0].weather[0].icon
      const icon_url = `http://openweathermap.org/img/wn/${icon}.png`
      this.armazenarNoHistorico(cidade, data, icon_url)
      this.previsoesSubject.next(resposta)
    })
  }
  armazenarNoHistorico(cidade: string, data: string, link: string){
    const linkOracle = "https://g3e99fc358a3389-jp1k665t7zehy4vs.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/paoo_previsoes/"
    this.httpClient.post(linkOracle, {cidade: cidade, data_previsao : data, link_previsao: link}).subscribe(res => {
    })
  }
  consultarHistorico(){
    const linkOracle = "https://g3e99fc358a3389-jp1k665t7zehy4vs.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/paoo_previsoes/"
    this.httpClient.get(linkOracle).subscribe(res => {
      this.previsoesSubject.next(res)
    })
  }
  registrarComponenteComoInteressado() {
    return this.previsoesSubject.asObservable()
  }
}
