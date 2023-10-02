import { Component, Input, OnInit } from '@angular/core';
import { Carte } from '../../shared/carte.model';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})

export class CarteComponent implements OnInit {
  @Input() carte: Carte = new Carte;

  ngOnInit(): void {

  }
}