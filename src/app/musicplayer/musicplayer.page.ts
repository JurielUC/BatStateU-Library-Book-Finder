import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import { Howl } from 'howler';

export interface Track {
	name: string;
	path: string;
}

@Component({
  selector: 'app-musicplayer',
  templateUrl: './musicplayer.page.html',
  styleUrls: ['./musicplayer.page.scss'],
})
export class MusicplayerPage implements OnInit {
  //////////////////////////////////////////////////////////////////////////////////
  playlist: Track[] = [
    {
      name: 'Lofi Music 1',
      path: './assets/music/CHILL RAIN LOFI MUSIC _ 4 Minute Loop.mp3'
    },
    {
      name: 'Lofi Music 2',
      path: './assets/music/4 minutes relax _ chill lofi hip hop beat.mp3'
    },
    {
      name: 'Lofi Music 3',
      path: './assets/music/lofi hip hop 4 minute to relax your study.mp3'
    },
    {
      name: 'Lofi Music 4',
      path: './assets/music/4  Min Slow And Lofi Music For Study _ Best Music For Concentration 2020.mp3'
    },
    {
      name: 'Lofi Music 5',
      path: './assets/music/4 Minute Timer Relaxing Music Lofi Fish Background.mp3'
    },
    {
      name: 'Lofi Music 6',
      path: './assets/music/Lo-Fi Chill _4 Minute.mp3'
    },
    {
      name: 'Lofi Music 7',
      path: './assets/music/lofi7.mp3'
    },
    {
      name: 'Lofi Music 8',
      path: './assets/music/lofi8.mp3'
    },
    {
      name: 'Lofi Music 9',
      path: './assets/music/4 Minute Timer Relaxing Music Lofi Waves Background.mp3'
    },
    {
      name: 'Lofi Music 10',
      path: './assets/music/lofi songs for slow days.mp3'
    }

  ];
  /////////////////////////////////////////////////////////////////////////////////
  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  progress = 0;
  @ViewChild('range', { static: false }) range: IonRange;

  constructor() { }

  /////////////////////////////////////////////////////////////////////////////////
  start(track: Track) {
    if (this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      html5: true,
      onplay: () => {
        console.log('onplay');
        this.isPlaying = true;
        this.activeTrack = track;
        this.updateProgress();
      },
      onend: () => {
        console.log('onend');

      }
    });
    this.player.play();
  }
  
  togglePlayer(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }
  
  next() {
    let index = this.playlist.indexOf(this.activeTrack);
    if (index != this.playlist.length - 1) {
      this.start(this.playlist[index + 1]);
    } else {
      this.start(this.playlist[0]);
    }
  }
  
  prev() {
    let index = this.playlist.indexOf(this.activeTrack);
    if (index > 0) {
      this.start(this.playlist[index - 1]);
    } else {
      this.start(this.playlist[this.playlist.length - 1]);
    }
  }
  
  seek() {
    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));
  }
  
  updateProgress() {
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgress();
    }, 1000)
  }


  ngOnInit() {
  }

}
