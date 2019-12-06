import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})


export class ListPage implements OnInit {

  results: Observable<any>;


  constructor(private cardService: CardService) { }

 
 

  ngOnInit() {

    this.results = this.cardService.searchData()
  
  }



}
