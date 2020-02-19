import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, Observer, Subject, range } from 'rxjs';
import { map } from 'rxjs/operators'



/*range(1,5).pipe(
  map<number,number>( val => {
    return val * 10;
  })
).subscribe( console.log); */

/*const observer: Observer<any> = {
  next: value => console.log('next: ',value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('completado')

}

const obs$ = new Observable<string>( subs => {

  subs.next('hola');
  subs.next('Mundo');

  subs.next('hola');
  subs.next('Mundo');

  // forzar un error

  /*const a = undefined;
  a.nombre = 'Adri';

  subs.complete();

});*/

/////////////////////////////////////////////


/*const intervalo$ = new Observable<number>( subs => {

 let contador=0;

 const interval = setInterval( () =>{
    contador++;

    subs.next( contador );

  }, 1000);

  setTimeout( () =>{
    subs.complete()
  }, 2500);


  return () =>{
    clearInterval(interval);
    console.log("intervalo destruido");
  }


});


////////////////////////////////////////////



const intervaloSubject$ = new Observable<number>( subs => {

  const intervalID = setInterval( 
     () => subs.next(Math.random()), 3000
    );

  return () => clearInterval( intervalID );

});

/**
 * 
 * 1- casteo multiple
 * 2- tambien es un observer
 * 3- next, error , complete
 */

/*const subject$ = new Subject();

intervaloSubject$.subscribe( subject$ );*/



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() { 

  }

  ngOnInit() {
    //this.crearObservable();
    //this.observableInternal();
    //this.observableSubject31();
  }


  crearObservable(){
 
    //obs$.subscribe( observer );

    /*obs$.subscribe(
      valor => console.log('next: ',valor),
      error => console.warn('error: ', error),
      () => console.info('Completado')
    );*/

  }


  observableInternal(){

    //const subs1 = intervalo$.subscribe( observer);
    //const subs2 = intervalo$.subscribe( observer);
    //const subs3 = intervalo$.subscribe( observer);

   // subs1.add( subs2)
    //     .add( subs3);

    setTimeout(() => {
     // subs1.unsubscribe()
     // subs2.unsubscribe()
     // subs3.unsubscribe()

      console.log('Completado timeout');

    }, 6000);

  }

  observableSubject3(){
   // const subs1 = intervaloSubject$.subscribe( rnd => console.log('subs1', rnd ) );
   // const subs2 = intervaloSubject$.subscribe( rnd => console.log('subs2', rnd ) );
  }

  observableSubject31(){

    //const subs1 = subject$.subscribe( rnd => console.log('subs1', rnd ) );
    //const subs2 = subject$.subscribe( rnd => console.log('subs2', rnd ) );

  }




}
