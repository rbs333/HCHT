import { Component, OnInit } from '@angular/core';
import { EPISODES } from './mock-episodes';
import { Episode } from './episode';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  
  episodes = EPISODES; 
  selectedEpisode: Episode;
  
  constructor() { }

  ngOnInit() {
  }

  setSelected(event) {
  	this.selectedEpisode = event;
  	console.log(event);
  }

}
