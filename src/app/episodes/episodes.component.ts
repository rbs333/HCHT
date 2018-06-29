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
  selected = false;
  selectedEpisode = new Episode();
  
  constructor() { }

  ngOnInit() {
  }

  close() {
    this.selected = false;
  }
  
  setSelected(episode: Episode) {
    this.selected = true;
  	this.selectedEpisode = episode;
  }

}
