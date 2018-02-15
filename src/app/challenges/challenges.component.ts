import { Component, OnInit } from '@angular/core';
import {Platforms} from "../platforms";
import {ChallengeService} from "../challenge.service";

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css'],
  inputs:['challengesData']
})
export class ChallengesComponent implements OnInit {
 platformList:any;
 langList:any;
   click:boolean=false;
 private challengesData:string[]=[];

constructor(private challengeService:ChallengeService) { }
tags = ['springboot', 'pcf', 'migration'];
  ngOnInit() {
    this.challengeService.getPlatforms().subscribe(res => this.platformList=res);
  }
showTags()
{
 this.click=true;
}
}
