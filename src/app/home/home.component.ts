import { Component, OnInit } from '@angular/core';
import {HomeService} from "../home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public lists;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getLists().then((lists: any) => {
      this.lists = lists.results;
    }).catch((err) => {
      console.error(err);
    })
  }

}
