import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable()
export class ChallengeService {

  getChallengeAPI:string="http://localhost:8080/challenges";
  getPlatformsAPI:string="http://localhost:3000/platforms"
  constructor(private http:HttpClient) {   }


  getChallenges(){
    return this.http.get(this.getChallengeAPI);
  }

  getPlatforms(){
    return this.http.get(this.getPlatformsAPI)
  }

}
