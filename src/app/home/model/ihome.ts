export interface IHome{
    nav: INav;
    hero: IHero;
    films: IFilms
}
 export interface INav {
     logo: IImg;
     links: string[];
         
 }

 export interface IHero{
     title: string;
     imgGalery: IImg[];
 }

 export interface IFilms{
    title: string;
    imgGalery: IImg[];
    
 }

 export interface IImg{
     src: string;
     alt: string;
 }
 
 export interface IFooter{
     title: 'string',
     cr: 'string',
     imgFooter: IImg,
 }