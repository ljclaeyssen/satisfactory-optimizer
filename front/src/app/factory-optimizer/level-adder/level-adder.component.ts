import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-adder',
  templateUrl: './level-adder.component.html',
  styleUrls: ['./level-adder.component.scss']
})
export class LevelAdderComponent implements OnInit {

  displayButton: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
