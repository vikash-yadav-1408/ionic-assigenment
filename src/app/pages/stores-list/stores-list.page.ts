import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Stores } from "src/app/classes/StoreClasses/Stores";
import { FetchStoresService } from "src/app/services/fetch-stores.service";

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.page.html',
  styleUrls: ['./stores-list.page.scss'],
})

export class StoresListPage implements OnInit {
    
  stores: Stores;
  constructor(
    private fetchStores: FetchStoresService,
     private http: HttpClient,
  ) { }

  ngOnInit() {
    console.log('Inside ngOnInit')
    this.fetchStores.getStores().subscribe(
      data=>{console.log(data);
      this.stores = data;
      console.log("stores : ");
      console.log(this.stores);
      }
    );
  }
}
