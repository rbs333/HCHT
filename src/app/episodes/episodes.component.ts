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
    document.getElementById("audioPanel").style.width = "0";
    document.getElementById("episodeViewContainer").style.gridTemplateColumns = "0 1fr";
    // document.getElementById("main").style.marginLeft = "0";
  }

  setSelected(episode: Episode) {
    this.selected = true;
  	this.selectedEpisode = episode;
    document.getElementById("episodeViewContainer").style.gridTemplateColumns = "auto 1fr";
    document.getElementById("audioPanel").style.width = "300px";
    // document.getElementById("episodeViewContainer").style.marginLeft = "300px";
    // document.getElementById("audioPanel").style.right = "0px";
  }
}
