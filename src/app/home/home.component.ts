import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { DatabaseServicesService } from '../database/database-services.service';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Workout } from '../workout/workout';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DialogWorkoutComponent } from '../dialog-workout/dialog-workout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  workouts: Workout[];
  columnsToDisplay = ['chronoType', 'executionDate', 'timeMiliseconds'];

  constructor(private dbServices: DatabaseServicesService,
              private dialog: MatDialog) { }

  ngOnInit() {
    const workout = {
      chronoType: 'For time',
      executionDate: new Date(),
      description: 'La desc',
      comment: 'Mon commentaire 2',
      timeMiliseconds: 700000
    };

    /* this.dbServices.addWorkout(workout); */
    this.dbServices.listWorkouts().subscribe(data => {
      this.workouts = data;
    });
  }

  openDialog(workout: Workout): void {
    const dialogRef = this.dialog.open(DialogWorkoutComponent, {
      width: '500px',
      data: workout
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  
}
