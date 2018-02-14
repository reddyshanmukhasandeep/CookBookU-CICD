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
  showArrow:boolean=false;
  display:boolean=false;
  constructor(private challengeService:ChallengeService, private router : Router) {
   }

  ngOnInit() {

    
    $("#collapse [data-toggle=collapse]:last").click()

  }

  getChallenges(value:string){

    if(value==""){
        this.result = true;
    }
    else{

      this.result=false;
      this.value=value;
	  
	  var searchText = value.replace(/ /g, "++");

	   this.challengeService.getChallengeByText(searchText).subscribe(res =>
       {
         this.challengeList=res;

      
      if (typeof this.challengeList !== "undefined" && this.challengeList.length>0 ) {
         
           this.display = false
      }
      else {   this.display=true;
      }

    });






   }
  }


arrow(){
  console.log("inside Arrow value"+ this.showArrow);
  this.showArrow=!this.showArrow;
}
}
