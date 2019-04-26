import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Workout } from './workout';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServicesService {

  constructor(private firestore: AngularFirestore) { }

  addWorkout(workout: any) {
    this.firestore.collection('workouts').add(workout).then(_ => console.log('addWorkout success'));
  }

  listWorkouts() {
    console.log('Dans list workouts');
    return this.firestore.collection<Workout>('workouts').valueChanges();
  }
}
