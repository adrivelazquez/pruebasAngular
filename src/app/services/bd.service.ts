import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin,combineLatest, of } from 'rxjs';
import { map, zip, switchMap, flatMap,mergeMap, shareReplay, pluck } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';


const URL = 'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  usuarios: Observable<Usuario>;
  albums: any;
  albumId$: Observable<any>;
  all: any;

  constructor(private http: HttpClient) { 

  }

  getUsuarios(){
    //console.log(this.posts);
    return this.http.get<Usuario[]>(URL + 'users');
  }


  getAlbum(id:any){
   return  this.http.get(URL + 'albums/'+id);
  }

  getAlbums(){
    return this.http.get(URL + 'albums');
  }



  getAlbumsUser(id: any){
    return this.http.get(URL + `users/${id}/albums`);
  }


  getAll(){
    return this.http.get(URL + 'albums').pipe(
      pluck('userId'),
      map( resp => console.log(resp))
      )
}


/*
public getCombinedData(): Observable<any> {
  return this.getMultipleRelationData()
    .pipe(
      mergeMap((result: any) => 

        // `from` emits each contact separately 
        from(result.contact).pipe(
          // load each contact
          mergeMap(
            contact => this.getSignleData(contact._id),
            // in result selector, connect fetched detail data
            (original, detail) => ({...original, relationship: detail})
          ),
          // collect all contacts into an array
          toArray(),
          // add the newly fetched data to original result
          map(contact => ({ ...result, contact})),
        )
      ),
  );*/
}
