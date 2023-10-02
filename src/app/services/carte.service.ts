import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Carte } from '../shared/carte.model';

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  private backendUrl = "http://localhost:8080/api/carte";

  constructor(private http: HttpClient) {

  }

  getMainNonTriee(): Observable<Carte[]> {

    return this.http.get<Carte[]>(this.backendUrl).pipe(
      tap((listesCartes) => this.log(listesCartes)),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    )
  }

  getMainTriee(): Observable<Carte[]> {

    return this.http.get<Carte[]>(this.backendUrl+"?trier=true").pipe(
      tap((listesCartes) => this.log(listesCartes)),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    )
  }

  private log(response: Carte[]) {
    console.table(response);
  }

  trierCartes(listeCartes: Carte[]): Carte[] {

    return listeCartes.sort((a, b) => {
      if (a.couleur > b.couleur) return 1;
      if (a.couleur < b.couleur) return -1;

      if (a.valeur > b.valeur) return 1;
      if (a.valeur < b.valeur) return -1;
      return 0;
    });
  }
}
