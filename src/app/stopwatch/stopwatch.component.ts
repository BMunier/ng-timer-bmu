import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  private time: string;
  private tenth: 0;
  private started: boolean;
  private secondsCounter = interval(100);

  constructor() { }

  ngOnInit() {
    this.time = '00:00:00';
    this.tenth = 0;
    this.started = false;
    
    this.secondsCounter.subscribe(n => {
      if(!this.started) return;
      this.tenth++;
      this.time = Math.floor(this.tenth / 600).toString() + ':' + Math.floor((this.tenth / 10) % 60).toString() + ":" + (this.tenth % 10).toString() + "0";
    });
  }


  onStart(){
    this.started = true;     
  }

  onStop(){
    console.log('stop')
    this.started = false;
  }

  onReset(){
    this.time = '00:00:00';
    this.tenth = 0;
  }

}
