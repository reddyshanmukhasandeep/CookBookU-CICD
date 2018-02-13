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
  display:boolean=false;
  constructor(private challengeService:ChallengeService, private router : Router) {
   }

  ngOnInit() {

    //  this.challengeService.getChallenges().subscribe(res => this.challengeList=res);
  
  }

  getChallenges(value:string){

    if(value==""){
        this.result = true;
    }
    else{

      this.result=false;
      this.value=value;

	   this.challengeService.getChallengeByText(value).subscribe(res =>
       {
         this.challengeList=res;

      console.log("challengeList" +this.challengeList )
      if (typeof this.challengeList !== "undefined" && this.challengeList.length>0 ) {
         console.log("display if block "+this.display)
           this.display = false
      }
      else {   this.display=true;
      console.log("display else block "+ this.display);}

    });






   }
  }


arrow(){
  console.log("inside Arrow value"+ this.showArrow);
  this.showArrow=!this.showArrow;
}
}
