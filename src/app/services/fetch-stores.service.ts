import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchStoresService {
   url = 'http://localhost:3030/stores';

  constructor(private http: HttpClient) { }

  getStores():Observable<any>{
    return  this.http.get(this.url);
  }

  getStoreDetails(id):Observable<any> {
    console.log("in getStoreDetails");
    console.log(id);
    console.log(this.http.get(this.url + "/" + id));
    return this.http.get(this.url + "/" + id);
    
  }

}
