import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Aprendendo JavaScript e Angular',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'www.google.com'
  };

  livros: string[] = ['Angular2', 'Java' ];
  filtro: string;

  addCurso(curso: string) {
    this.livros.push(curso);

    console.log(this.livros);
  }

  obterCursos() {
    if ( this.livros.length === 0 || this.filtro === undefined
      ||  this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter(v => {
      if ( v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0 ) {
        return true;
      }
      return false;
    });
  }

  // tslint:disable-next-line:member-ordering
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000 );
  });

  // tslint:disable-next-line:member-ordering
  valorAsync2 = interval(2000).pipe(
    map(valor => 'Valor assíncrono 2 ')
  );

  // Depreciado
  // valorAsync3 = Observable.interval(2000).map( valor => 'Valor assíncrono 3' );

  constructor() { }

  ngOnInit() {
  }

}
