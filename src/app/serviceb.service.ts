import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicebService {

  constructor(private http: Http) { }


  getBeers(){
    return this.http.get('https://api.punkapi.com/v2/beers?page=1&per_page=80')
    .map((res: Response) => res.json())
}

getBeersbyid(id){
  return this.http.get('https://api.punkapi.com/v2/beers/'+id)
  .map((res: Response) => res.json())
}
getBeersbyname(name){
  return this.http.get('https://api.punkapi.com/v2/beers?beer_name='+name)
  .map((res: Response) => res.json())
}
}
