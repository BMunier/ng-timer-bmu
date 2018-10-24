import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-emom',
  templateUrl: './emom.component.html',
  styleUrls: ['./emom.component.css']
})
export class EmomComponent implements OnInit {
  time: string;
  timeAtBegining: string;
  minutesChosen: number;
  interval: number;
  secondsToGo: number;
  started: boolean;
  secondsCounter = interval(1000);
  isActiveBoolean: boolean;
  progress: number;
  initialSecondsToGo: number;

  constructor() { }

  ngOnInit() {
    this.isActiveBoolean = true;
    this.timeAtBegining = '00:00';
    this.time = '00:00';
    this.secondsToGo = 0;
    this.started = false;
    this.progress = 0;

    this.secondsCounter.subscribe(n => {
      if (!this.started) {
        return;
      }
      this.secondsToGo--;
      if (this.secondsToGo % 60 === 0) {
        this.playAudio();
      }
      this.time = this.computeTimeToDisplay();

      this.computeProgress();

      if (this.secondsToGo === 0) {
        this.playAudio();
        this.started = false;
      }
    });
  }

  computeTimeToDisplay(): string {
    let minutes = Math.floor(this.secondsToGo / 60).toString();
      if (minutes.length < 2) {
        minutes = '0' + minutes.toString();
      }

      let seconds = Math.floor((this.secondsToGo) % 60).toString();
      if (seconds.length < 2) {
        seconds = '0' + seconds.toString();
      }

      return minutes + ':' + seconds;
  }

  onStart() {
    this.started = true;
  }

  onStop() {
    this.started = false;
  }

  onReset() {
    this.started = false;
    this.isActiveBoolean = true;
  }

  saveTime() {
    this.computeSecondsToGo();
    this.time = this.computeTimeToDisplay();
    this.timeAtBegining = this.computeTimeToDisplay();
    this.isActiveBoolean = false;
  }

  computeSecondsToGo() {
    this.secondsToGo = ((this.minutesChosen * 60));
    this.initialSecondsToGo = this.secondsToGo;
  }

  closeModal() {
    this.isActiveBoolean = false;
  }

  openModal() {
    this.isActiveBoolean = true;
  }

  playAudio() {
    const audio = new Audio();
    audio.src = '/assets/sounds/end_bell.mp3';
    audio.load();
    audio.play();
  }

  computeProgress() {
    this.progress = (100 * (this.initialSecondsToGo - this.secondsToGo)) / this.initialSecondsToGo;
  }

}
