import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../models/goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  
  @Input() goal:Goal;

  constructor() { }

  ngOnInit(): void {
  }

}
