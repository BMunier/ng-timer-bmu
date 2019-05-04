import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { MyMaterialModuleModule } from './my-material-module/my-material-module.module';
import { HomeComponent } from './home/home.component';
import { AmrapComponent } from './amrap/amrap.component';
import { FormsModule } from '@angular/forms';
import { EmomComponent } from './emom/emom.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { DialogWorkoutComponent } from './dialog-workout/dialog-workout.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'stopwatch', component: StopwatchComponent },
  { path: 'amrap', component: AmrapComponent },
  { path: 'emom', component: EmomComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StopwatchComponent,
    HomeComponent,
    AmrapComponent,
    EmomComponent,
    DialogWorkoutComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModuleModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
  entryComponents: [DialogWorkoutComponent]
})
export class AppModule { }
