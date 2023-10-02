import { Component, OnInit } from '@angular/core';
import { CarteService } from 'src/app/services/carte.service';
import { Carte } from 'src/app/shared/carte.model';

@Component({
  selector: 'app-list-carte',
  templateUrl: './list-carte.component.html',
  styleUrls: ['./list-carte.component.css']
})
export class ListCarteComponent implements OnInit {

  cartes: Carte[] = [];

  constructor(private carteService: CarteService) { }

  ngOnInit(): void {
    this.MainNonTriee();
  }

  private MainNonTriee() {
    this.carteService.getMainNonTriee().subscribe((listeCartes) => this.cartes = listeCartes);
  }

  getMainTriee(): Carte[] {
    return this.carteService.trierCartes([...this.cartes]);
  }

  lancerMain() {
    this.MainNonTriee();
  }
}
