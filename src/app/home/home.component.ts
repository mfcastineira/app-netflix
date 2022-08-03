import { Component, OnInit } from '@angular/core';
import { IFilms, IHome } from './model/ihome';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public iHome: IHome;
  public actionMovie: IFilms;
  public comedyMovie: IFilms;
  public dramaMovie: IFilms;
  public terrorMovie: IFilms;
  public cienciaFic: IFilms;

  constructor() {
    this.iHome = {
      nav: {
        logo: {
          src: '../../../assets/images/LOGO/2560px-Netflix_2015_logo.svg.png',
          alt: 'Logo Netflix',
        },

        links: ['Inicio', 'Peliculas', 'Series','Categorias'],
      },

      hero: {
        title: 'Top 10 de Netflix',
        imgGalery: [
          {
            src: '../../../assets/images/Top10/1-papel.webp',
            alt: 'La Casa de Papel',
          },
          {
            src: '../../../assets/images/Top10/2-reina.webp',
            alt: 'La Reina Del Flow',
          },
          {
            src: '../../../assets/images/Top10/3-titanes.webp',
            alt: 'Titanes',
          },
          {
            src: '../../../assets/images/Top10/4-lostinspace.webp',
            alt: 'Lost in Space',
          },
          {
            src: '../../../assets/images/Top10/5-dondecaben.webp',
            alt: 'Donde caben dos',
          },
          {
            src: '../../../assets/images/Top10/10-gooddoctor.webp',
            alt: ' The Good doctor',
          },
          {
            src: '../../../assets/images/Top10/6-aquinohay.webp',
            alt: 'Aqui no hay quien viva',
          },
          {
            src: '../../../assets/images/Top10/7-blacklist.webp',
            alt: 'Black List',
          },
          {
            src: '../../../assets/images/Top10/8-ricos.webp',
            alt: 'Ocho ricos',
          },
          {
            src: '../../../assets/images/Top10/9-poder.webp',
            alt: 'El poder',
          },
        ],
      },
      films: {
        title: 'Categotias',
        imgGalery: [
          {
            src: '../../../assets/images/LOGO/Icons/populares.PNG',
            alt: 'populares',
          },
          {
            src: '../../../assets/images/LOGO/Icons/drama.PNG',
            alt: 'drama',
          },
          {
            src: '../../../assets/images/LOGO/Icons/ciencia.jpg',
            alt: 'ciencia ficcion',
          },
          {
            src: '../../../assets/images/LOGO/Icons/terror.PNG',
            alt: 'terror',
          },
          {
            src: '../../../assets/images/LOGO/Icons/comedia.PNG',
            alt: 'El poder',
          },
          {
            src: '../../../assets/images/LOGO/Icons/accion.PNG',
            alt: 'accion',
          },
        ],
        
      }
     
      
    };
    this.actionMovie = {
      title: 'Películas de Acción',
      imgGalery: [
        {
          src: '../../../assets/images/Accion/ejercitomuertos.jpg',
          alt: 'El ejercito de los muertos',
        },
        {
          src: '../../../assets/images/Accion/elprotector.webp',
          alt: 'El protector',
        },
        {
          src: '../../../assets/images/Accion/equalizer2.webp',
          alt: 'Equalizer 2 ',
        },
        {
          src: '../../../assets/images/Accion/heat.webp',
          alt: 'Heat',
        },
        {
          src: '../../../assets/images/Accion/jackreacher.webp',
          alt: 'Jack Reacher',
        },
        {
          src: '../../../assets/images/Accion/johnwick2.webp',
          alt: 'John Wick 2 ',
        },
        {
          src: '../../../assets/images/Accion/killbill2.webp',
          alt: 'Kill Bill 2 ',
        },
        {
          src: '../../../assets/images/Accion/misionimposiblenacion.webp',
          alt: 'Mision Imposible Nacion Secreta',
        },
        {
          src: '../../../assets/images/Accion/renacido.webp',
          alt: 'Renacido',
        },
        {
          src: '../../../assets/images/Accion/terminator2.webp',
          alt: 'Terminator',
        },
        {
          src: '../../../assets/images/Accion/worldwarz.webp',
          alt: 'Gerra Mundial Z',
        },
      ],
    };
    this.comedyMovie = {
      title: 'Películas de Comedia',
      imgGalery: [
        {
          src: '../../../assets/images/Comedia/casi300.webp',
          alt: 'Casi 300',
        },
        {
          src: '../../../assets/images/Comedia/cazafantasmas.webp',
          alt: 'Caza Fantasmas',
        },
        {
          src: '../../../assets/images/Comedia/dictador.webp',
          alt: 'El Dictador',
        },
        {
          src: '../../../assets/images/Comedia/erasehollywood.webp',
          alt: 'Érase Hollywood',
        },
        {
          src: '../../../assets/images/Comedia/juerga.webp',
          alt: 'Juerga Hasta el Fin',
        },
        {
          src: '../../../assets/images/Comedia/family guy.webp',
          alt: 'padre de familia',
        },
        {
          src: '../../../assets/images/Comedia/laterminal.webp',
          alt: 'La terminal',
        },
        {
          src: '../../../assets/images/Comedia/scarymovie3.webp',
          alt: 'Scary Movie 3',
        },
        {
          src: '../../../assets/images/Comedia/ted2.webp',
          alt: 'ted 2',
        },
        {
          src: '../../../assets/images/Comedia/rickandmorty.webp',
          alt: 'Rick and Morty',
        },
        {
          src: '../../../assets/images/Comedia/padresella.webp',
          alt: 'Los padres de ella',
        },
      ],
    };

    this.dramaMovie = {
      title: 'Películas de Drama',
      imgGalery: [
        {
          src: '../../../assets/images/Drama/1917.webp',
          alt: '1917',
        },
        {
          src: '../../../assets/images/Drama/arrival.webp',
          alt: 'Arrival',
        },
        {
          src: '../../../assets/images/Drama/clublucha.webp',
          alt: 'club de la lucha',
        },
        {
          src: '../../../assets/images/Drama/corazones.webp',
          alt: 'Corazones de acero',
        },
        {
          src: '../../../assets/images/Drama/culpable.jpg',
          alt: 'culpable',
        },
        {
          src: '../../../assets/images/Drama/millaverde.webp',
          alt: 'milla verde',
        },
        {
          src: '../../../assets/images/Drama/naufrago.webp',
          alt: 'el naufrago',
        },
        {
          src: '../../../assets/images/Drama/salvaralsoldado.webp',
          alt: 'Salvar al Soldado',
        },
        {
          src: '../../../assets/images/Drama/scarface.webp',
          alt: 'Scare Face ',
        },
        {
          src: '../../../assets/images/Drama/sombradiablo.webp',
          alt: 'La Sombra del Diablo',
        },
      ],
    };
    this.cienciaFic = {
      title: 'Películas de Ciencia Ficción',
      imgGalery: [
        {
          src: '../../../assets/images/Sci-fi/6dia.webp',
          alt: 'El 6 dia',
        },
        {
          src: '../../../assets/images/Sci-fi/12monos.webp',
          alt: 'los 12 Monos',
        },
        {
          src: '../../../assets/images/Sci-fi/afterearth.webp',
          alt: 'After Earth',
        },
        {
          src: '../../../assets/images/Sci-fi/colverparadox.jpg',
          alt: 'Colverfield paradox',
        },
        {
          src: '../../../assets/images/Sci-fi/core.webp',
          alt: 'core',
        },
        {
          src: '../../../assets/images/Sci-fi/doom.webp',
          alt: 'Doom',
        },
        {
          src: '../../../assets/images/Sci-fi/jumper.webp',
          alt: 'jumper',
        },
        {
          src: '../../../assets/images/Sci-fi/passenger.webp',
          alt: 'Passenger',
        },
        {
          src: '../../../assets/images/Sci-fi/startrek.webp',
          alt: 'start treck',
        },
        {
          src: '../../../assets/images/Sci-fi/gits.webp',
          alt: 'Gits',
        },
        {
          src: '../../../assets/images/Sci-fi/watchmen.webp',
          alt: 'Watchmen',
        },
      ],
    };
    this.terrorMovie = {
      title: 'Películas de Terror',
      imgGalery: [
        {
          src: '../../../assets/images/Terror/apostol.jpg',
          alt: 'apostol',
        },
        {
          src: '../../../assets/images/Terror/calleterror.jpg',
          alt: 'La calle del terror part 2 ',
        },
        {
          src: '../../../assets/images/Terror/infiernoagua.webp',
          alt: 'infierno en el agua',
        },
        {
          src: '../../../assets/images/Terror/multiple.webp',
          alt: 'multiple',
        },
        {
          src: '../../../assets/images/Terror/insidious2.webp',
          alt: 'insidious 2 ',
        },
        {
          src: '../../../assets/images/Terror/life.webp',
          alt: 'Life',
        },
        {
          src: '../../../assets/images/Terror/reflejos.webp',
          alt: '',
        },
      ],
    };
  }


  ngOnInit(): void {}
}
