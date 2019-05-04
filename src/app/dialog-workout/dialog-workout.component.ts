import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Workout } from '../workout/workout';
import * as moment from "moment";

@Component({
  selector: 'app-dialog-workout',
  templateUrl: './dialog-workout.component.html',
  styleUrls: ['./dialog-workout.component.css']
})
export class DialogWorkoutComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogWorkoutComponent>, @Inject(MAT_DIALOG_DATA) public workout: Workout) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    console.log('Saving is not implemented yet');
  }

  displayTime(timeMiliseconds: number): string{
    const tempTime = moment.duration(timeMiliseconds);
    const seconds = tempTime.seconds().toString().length > 1 ? tempTime.seconds() : '0' + tempTime.seconds();
    const timeToDisplay = tempTime.minutes() + ':' + seconds;
    return timeToDisplay;
  }

}
