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
  selectedEpisode = new Episode();
  
  constructor() { }

  ngOnInit() {
  }

  setSelected(episode: Episode) {
  	this.selectedEpisode = episode;
  	console.log(this.selectedEpisode);
  }

}
