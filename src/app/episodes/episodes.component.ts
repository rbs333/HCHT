import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../services/episodes.service';
import { Episode } from './episode';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  
  selected = false;
  selectedEpisode = new Episode(); 
  episodes = new Array<Episode>();
  
  constructor(private episodesService: EpisodesService) { }

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes(): void {
    this.episodesService.getEpisodes()
    .subscribe(episodes => this.episodes = episodes);
  }

  close() {
    this.selected = false;
    document.getElementById('audioPanel').style.transform = "translateY(0)";
  }

  setSelected(episode: Episode) {
    this.selected = true;
  	this.selectedEpisode = episode;
    document.getElementById('audioPanel').style.transform = "translateY(-100%)";
    var width = document.getElementById('rootContainer').clientWidth;
    console.log(width);
    document.getElementById('audioPanel').style.width = width + "px";
  }
}
