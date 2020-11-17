import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FetchStoresService } from "src/app/services/fetch-stores.service";
import { Data } from "src/app/classes/StoreClasses/Data";

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.page.html',
  styleUrls: ['./store-details.page.scss'],
})
export class StoreDetailsPage implements OnInit {
  
  store:Data;
  constructor(private activatedRoute: ActivatedRoute,
    private fetchStoreDetails: FetchStoresService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
      console.log(id);
      this.fetchStoreDetails.getStoreDetails(id).subscribe(
        resultantStore=>{
          console.log(resultantStore);
          this.store = resultantStore;
           console.log(this.store);
        }
      );
  }

}
