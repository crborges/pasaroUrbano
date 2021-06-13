import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms/';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { OfertasListComponent } from './ofertas/ofertas-list/ofertas-list.component';
import { OfertasCliComponent } from './ofertas/ofertas-cli/ofertas-cli.component';
import { OfetasNewComponent } from './ofertas/ofetas-new/ofetas-new.component';
import { OfetasEditComponent } from './ofertas/ofetas-edit/ofetas-edit.component';
import { OfertaDeleteComponent } from './ofertas/ofertas-delete/oferta-delete.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaVerComponent } from './ofertas/oferta-ver/oferta-ver.component';
import { OfertaComoUsarComponent } from './ofertas/oferta-como-usar/oferta-como-usar.component';
import { OfertaOndeFicaComponent } from './ofertas/oferta-onde-fica/oferta-onde-fica.component';
import { PainelComponent } from './painel/painel.component';
import { ComoUsarListComponent } from './comoUsar/como-usar-list/como-usar-list.component';
import { ComoUsarNewComponent } from './comoUsar/como-usar-new/como-usar-new.component';
import { ComoUsarEditComponent } from './comoUsar/como-usar-edit/como-usar-edit.component';
import { ComoUsarDeleteComponent } from './comoUsar/como-usar-delete/como-usar-delete.component';
import { ComoUsarVerComponent } from './comoUsar/como-usar-ver/como-usar-ver.component';
import { CarrinhoService } from './carrinho.service'
import { TranslocoRootModule } from './transloco/transloco-root.module';

// pipe
import {DescricaoReduzida} from './util/descricao-reduzida.pipe';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { TermosUsoComponent } from './termos-uso/termos-uso.component';
import { PrivacidadeComponent } from './privacidade/privacidade.component';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    HomeComponent,
    LoginComponent,
    OfertasListComponent,
    OfertasCliComponent,
    OfetasNewComponent,
    OfetasEditComponent,
    OfertaDeleteComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaVerComponent,
    OfertaComoUsarComponent,
    OfertaOndeFicaComponent,
    PainelComponent,
    ComoUsarListComponent,
    ComoUsarNewComponent,
    ComoUsarEditComponent,
    ComoUsarDeleteComponent,
    ComoUsarVerComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    TermosUsoComponent,
    PrivacidadeComponent,
    OrdemCompraSucessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoRootModule
  ],
  providers: [
    CarrinhoService/* para incluri a classe do carrinho service para o escopo do modulo ou seja qualquer classe vai ter acesso a mesma instancia */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
