import { Component, OnInit, ElementRef } from '@angular/core';
import { Column } from 'src/app/models/Column';

import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public player1: boolean = true;
  public win = false;
  public full: boolean = false;
  public turn = 0;

  private playBoard: Column[];
  public color: String;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.createPlayBoard();
    this.playBoard = this.data.playBoard;





  }
  onMove(i: number) {

    let token: string = "";
    this.full=false;
    let count = this.playBoard[i].counter;
    if (count < 0) {
      this.full = true;
      return;
    }
    if (this.player1) {
      token = "+";

    }
    else {
      token = "-";

    }

    this.playBoard[i].arr[count] = token;
    if (this.turn > 5)
      this.win = this.data.checkWin(i, count, token);
    this.playBoard[i].counter--;
    this.turn++;
    if (!this.win)
      this.player1 = !this.player1;
    else
      this.ngOnInit();

  }

}

