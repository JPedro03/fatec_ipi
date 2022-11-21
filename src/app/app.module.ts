import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { PrevisoesComponent } from './previsoes/previsoes.component';

@NgModule({
  declarations: [
    AppComponent,
    PrevisoesComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    TabViewModule,
    FormsModule,
    TableModule,
    InputTextModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
