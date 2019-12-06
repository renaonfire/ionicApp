import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  information = null;

  constructor(private activatedRoute: ActivatedRoute, private cardService: CardService) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.cardService.getDetails(id).subscribe(result => {
      console.log('details are: ', result);
      this.information = result;

    })
  }

}
