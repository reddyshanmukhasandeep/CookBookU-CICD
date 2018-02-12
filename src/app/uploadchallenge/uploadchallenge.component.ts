import { Component, OnInit } from '@angular/core';
import {ChallengeService} from "../challenge.service";
import { FormGroup, FormControl, FormBuilder, Validators, FormArrayName} from '@angular/forms';
import * as $ from 'jquery';
import {Challenge} from "../challenge";
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadchallenge',
  templateUrl: './uploadchallenge.component.html',
  styleUrls: ['./uploadchallenge.component.css']
})
export class UploadchallengeComponent implements OnInit {
 solutionflag:boolean=false;
 platformList:any;
 myForm: FormGroup;
languageList:any;
tags:string="";
challengeList:any;
challenge:Challenge;
title:string;
links:string="";

   clickNext:boolean=false;
 private challengesData:string[]=[];

  constructor(private challengeService:ChallengeService,private formBuilder: FormBuilder, private router : Router) { }

  ngOnInit() {
      this.challengeService.getPlatforms().subscribe(res => this.platformList=res);
      this.challengeService.getLanguages().subscribe(res=>this.languageList=res);
      this.myForm = new FormGroup ({
               title: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
               platform_id: new FormControl('', [<any>Validators.required]),
               language_id:new  FormControl('',[<any>Validators.required]),
               description:new  FormControl('',[<any>Validators.required]),
               tags:new FormControl('',[<any>Validators.required]),
               solutions:new FormGroup({
                 description:new FormControl('', [<any>Validators.required]),
                 reference_link:new FormControl('', [<any>Validators.required])
               })

       });

      this.getChallenges();

  }

  addTags(){

  }

  openSolution(){
    // console.log("inside solution");
    // this.challenge=this.myForm.value;
    //  for(let i of this.challenge.tags){ this.tags = this.i.value+','+this.tags}
    //  this.challenge.tags= this.tags.slice(0,this.tags.length-1);
    // console.log(this.challenge)
// $('#challenges').hide();
    // $('#solutions').show();
      // console.log("challenges"+ JSON.stringify(this.challenge));
  }


  postChallenge() {
     this.challenge = this.myForm.value;
     console.log("links are" + JSON.stringify(this.challenge));
      for(var i=0; i<this.challenge.tags.length;i++){  this.tags= this.challenge.tags[i].value+','+this.tags}
         this.challenge.tags= this.tags.slice(0,this.tags.length-1);

      for(var j=0 ; j<this.challenge.solutions.reference_link.length;j++)
       {this.links = this.challenge.solutions.reference_link[j].value+','+this.links}
      this.challenge.solutions.reference_link=this.links.slice(0,this.links.length-1);

//this.challenge.solution[]=this.challenge.solutions;
let challenges={};
let solution=[];
challenges["tags"]=this.challenge.tags;
solution.push(this.challenge.solutions);
challenges["solutions"]=solution;
challenges["description"]=this.challenge.description;
challenges["title"]=this.challenge.title;
challenges["platform_id"]=this.challenge.platform_id;
challenges["language_id"]=this.challenge.language_id;
 console.log("links are   challenges " + JSON.stringify(challenges));
       this.challengeService.addChallenge(challenges).subscribe(challenge =>this.challengeList.push(this.challenge));
       this.router.navigate(['challenge']);
 }

 getChallenges(){
   this.challengeService.getChallenges().subscribe(res => this.challengeList=res);
  }

 }
