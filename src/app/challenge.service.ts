import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from "@angular/common/http";
import {Challenge} from "./challenge";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ChallengeService {

  getChallengeAPI:string=" http://cookbookapi.app.dev.digifabricpcf.com/challenge";
  getPlatformsAPI:string="http://cookbookapi.app.dev.digifabricpcf.com/platform";
  getLanguagesAPI:string="http://cookbookapi.app.dev.digifabricpcf.com/language";
  getSolutionsAPI:string="http://cookbookapi.app.dev.digifabricpcf.com/solution";
  getTagsAPI:string="http://cookbookapi.app.dev.digifabricpcf.com/tag"
  addChallengeAPI:string="http://cookbookapi.app.dev.digifabricpcf.com/challenge";
  getChallengeBySearchText:string="http://cookbookapi.app.dev.digifabricpcf.com/challenge/title/"

  constructor(private http:HttpClient) {   }

  getChallengeByText(searchText){
    return this.http.get(this.getChallengeBySearchText+searchText) ;
  }
  getChallenges(){
    return this.http.get(this.getChallengeAPI);
  }

  getPlatforms(){
    return this.http.get(this.getPlatformsAPI);
  }

  getLanguages(){
    return this.http.get(this.getLanguagesAPI);
  }

  getSolutions(){
    return this.http.get(this.getSolutionsAPI)
  }

  getTags(){
    return this.http.get(this.getTagsAPI);
  }

  addChallenge(challenge){

   return this.http.post(this.addChallengeAPI,challenge,httpOptions);
  }

}
