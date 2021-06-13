import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../app/login/login.component'



import {OfertasCliComponent} from './ofertas/ofertas-cli/ofertas-cli.component'
import {OfetasNewComponent} from './ofertas/ofetas-new/ofetas-new.component'
import {OfertasListComponent} from './ofertas/ofertas-list/ofertas-list.component'
import{OfetasEditComponent} from './ofertas/ofetas-edit/ofetas-edit.component'
import{OfertaDeleteComponent} from './ofertas/ofertas-delete/oferta-delete.component'

import{RestaurantesComponent} from './restaurantes/restaurantes.component'
import{DiversaoComponent} from './diversao/diversao.component'
import {OfertaVerComponent} from './ofertas/oferta-ver/oferta-ver.component'
import { OfertaComoUsarComponent } from './ofertas/oferta-como-usar/oferta-como-usar.component'
import { OfertaOndeFicaComponent } from './ofertas/oferta-onde-fica/oferta-onde-fica.component'
import {PainelComponent} from './painel/painel.component'
import {OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
/*Como usar componentes*/
import {ComoUsarListComponent} from './comoUsar/como-usar-list/como-usar-list.component'
import {ComoUsarNewComponent} from './comoUsar/como-usar-new/como-usar-new.component'
import {ComoUsarEditComponent} from './comoUsar/como-usar-edit/como-usar-edit.component'
import {ComoUsarDeleteComponent} from './comoUsar/como-usar-delete/como-usar-delete.component'
import { TermosUsoComponent } from './termos-uso/termos-uso.component';
import { PrivacidadeComponent } from './privacidade/privacidade.component';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component';


const routes: Routes = [

{path: '', component: OfertasCliComponent},
{path: 'login', component: LoginComponent},
{path: 'oferta-list', component: OfertasListComponent},
{path: 'oferta-new', component: OfetasNewComponent},
{path: 'oferta-edit/:id', component: OfetasEditComponent},
{path: 'oferta-delete/:id', component:OfertaDeleteComponent },
{path: 'restaurantes', component:RestaurantesComponent },
{path: 'diversao', component:DiversaoComponent },
{path: 'painel', component:PainelComponent},
/*Fluxo como usar */
{path: 'como-usar-novo', component:ComoUsarNewComponent},
{path: 'como-usar-list', component:ComoUsarListComponent},
{path: 'onde-fica-list', component:OfertaOndeFicaComponent},
{path: 'como-usar-edit/:id', component:ComoUsarEditComponent},
{path: 'como-usar-delete/:id', component:ComoUsarDeleteComponent},


{path: 'oferta/:id', component:OfertaVerComponent, children:  /* children são as rotas filha dessa rota */
  [
    {  path: '', component: OfertaComoUsarComponent  },//esse é o componete a ser exibido por padrão
    {  path: 'como-usar', component: OfertaComoUsarComponent  },
    {  path: 'onde-fica', component: OfertaOndeFicaComponent }
  ]
},
{path:'ordem-compra', component:OrdemCompraComponent},
{path:'termos-uso', component:TermosUsoComponent},
{path:'privacidade', component:PrivacidadeComponent},
{path: 'ordem-sucess/:id', component: OrdemCompraSucessoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
