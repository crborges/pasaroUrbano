import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertasService } from '../../ofertas.service';
import { Oferta } from '../../shared/oferta.model';


@Component({
  selector: 'pas-ofetas-edit',
  templateUrl: './ofetas-edit.component.html',
  styleUrls: ['./ofetas-edit.component.css']
})
export class OfetasEditComponent implements OnInit {
  public oferta = {} as Oferta

  constructor(
    private ofertaService: OfertasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get("id");
    this.ofertaService.getOfertaById(''+id).subscribe((oferta) => {
      this.oferta = oferta;
    });
  }


  public atualizaOferta(): void {
      this.router.navigate(["/como-usar-list"]);
  }


      // Chama o serviço para obtém todos os carros
      getOferta() {
        const id = this.route.snapshot.paramMap.get("id");
        this.ofertaService.getOfertaById(''+id).subscribe((oferta: Oferta) => {
          this.oferta = oferta;
        });
      }

}
