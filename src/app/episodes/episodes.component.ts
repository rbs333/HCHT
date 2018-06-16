import { Component, OnInit } from '@angular/core';
import { Episode } from './episode';
import { EPISODES }	from '../mock-episodes';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['../app.component.css']
})
export class EpisodesComponent implements OnInit {

  episodeMp3 = 0;
  episodes = EPISODES; 
  selectedEpisode: Episode;

  onSelect(episode: Episode): void {
  	this.selectedEpisode = episode;
  }

  
  constructor() { }

  ngOnInit() { }

}
