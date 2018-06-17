import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Team} from '../_models';

@Injectable()
export class TeamServices {
  constructor(private http: HttpClient) {
  }

  create(team: Team) {
    return this.http.post('/api/addTeamManager', team);
  }

  update(team: Team) {
    return this.http.put('/api/updateTeamManager' + team.teamName, team);
  }

  delete(teamName: string) {
    return this.http.delete('/api/deleteTeamManager' + teamName);
  }
}
