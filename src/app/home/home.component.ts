import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {User} from '../_models';
import {UserService} from '../_services';
import * as CanvasJs from '../_canvas/CanvasJS';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    const dataPoints = [
      {y: 71, label: 'Shankar'},
      {y: 55, label: 'Mukund'},
      {y: 50, label: 'Nik'},
      {y: 65, label: 'KP'},
      {y: 95, label: 'Deepak'},
      {y: 68, label: 'Krishna'},
      {y: 28, label: 'Shaik'},
      {y: 34, label: 'Jaggu'}
    ];
    /*let y = 0;
    for ( let i = 0; i < 10000; i++ ) {
      y += Math.round(5 + Math.random() * (-5 - 5));
      dataPoints.push({ y: y});
    }*/
   /* const chart = new CanvasJs.Chart('chartContainer', {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: ''
      },
      subtitles: [{
        text: 'Team Performance'
      }],
      data: [
        {
          type: 'column',
          dataPoints: dataPoints
        }]
    });

    chart.render();*/
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers();
    });
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }
}
