import { Component, OnInit } from '@angular/core';
import {ChallengeService} from "../challenge.service";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';
import {Challenge} from "../challenge";

@Component({
  selector: 'app-uploadchallenge',
  templateUrl: './uploadchallenge.component.html',
  styleUrls: ['./uploadchallenge.component.css']
})
export class UploadchallengeComponent implements OnInit {
 solutionflag:boolean=false;
 platformList:any;
 myForm: FormGroup;
 langs: string[] = [
  'SpringBoot',
  'nodejs',
  'DotNet'
];
challenge:Challenge;
   click:boolean=false;
 private challengesData:string[]=[];
  constructor(private challengeService:ChallengeService) { }

  ngOnInit() {
      this.challengeService.getPlatforms().subscribe(res => this.platformList=res);
      this.uploadform();
  }
  openSolution(){
    console.log("inside solution");
    $('#challenges').hide();
    $('#solutions').show();
    this.challenge=this.myForm.value;
     console.log("challenges"+ this.challenge.title);
  }

uploadform(){
  this.myForm = new FormGroup ({
           title: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
           platForm: new FormControl('', [<any>Validators.required]),
           language:new  FormControl('',[<any>Validators.required]),
           details:new  FormControl('',[<any>Validators.required]),
           tags:new FormControl('',[<any>Validators.required])
   });
 }

 onSubmit(){


 }
}
