import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { DatabaseServicesService } from '../database-services.service';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Workout } from '../workout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  workouts: Workout[];
  columnsToDisplay = ['chronoType', 'executionDate', 'timeMiliseconds'];

  constructor(private dbServices: DatabaseServicesService) { }

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
      this.workouts.forEach(w => {
        console.log(w.chronoType);
      });
    });
  }

}
