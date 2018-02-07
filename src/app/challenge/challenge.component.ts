import { Component, OnInit } from '@angular/core';
import {ChallengeService} from "../challenge.service";
import {Challenge} from "../challenge";

import { Router } from '@angular/router';
@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})	
export class ChallengeComponent implements OnInit {
  value:string='';
  result:boolean=false;
  p: number = 1;
  title = "Cookbook Recipes";
  challengeList:any;
  showArrow=false;
  constructor(private challengeService:ChallengeService, private router : Router) {
   }

  ngOnInit() {

  }

  getUsers(value:string){

    if(value==""){
     console.log("inside if");
      this.result = true;
    }
    else{

      this.result=false;
      this.value=value;
	  this.challengeService.getChallenges().subscribe(res => this.challengeList=res);
   }
  }


arrow(){
  console.log("inside Arrow value"+ this.showArrow);
  this.showArrow=!this.showArrow;
}
}
