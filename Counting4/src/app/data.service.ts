import { Injectable } from '@angular/core';
import { Column } from './models/Column';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  public playBoard: Column[] = new Array(7);
  public maxRow: number = 6;
  public maxColumn: number = 7;
  constructor() { }

  crateCoulomn(id: number) {
    let column: Column = {};

    column.id - id;
    column.arr = [];
    column.arr.length = this.maxColumn-1;

    column.counter = this.maxRow-1;
    return column;

  }
  createPlayBoard() {
    for (let i = 0; i < this.playBoard.length; i++) {
      this.playBoard[i] = this.crateCoulomn(i);

    }
  }

  checkWin(column: number, row: number, token: string) {

    if (this.checkColumn(column, row, token))
      return true;
    if (this.checkRow(column, row, token))
      return true;
    if (this.checkLTRDiagonal(column, row, token))
      return true;
    if (this.checkRTLDiagonal(column, row, token))
      return true;
    else
      return false;




  }
  checkColumn(column: number, row: number, token: string): boolean {

    let counter: number = 0;
    if (row > 3)
      return false;

    for (let i = row; i < this.maxRow; i++) {
      if (this.playBoard[column].arr[i] == token) {
        counter++;
        if (counter == 4)
          return true;

      }
      else
        counter = 0;

    }

    return false;
  }

  checkRow(column: number, row: number, token: string) {
    let win: boolean = false;
    let counter: number = 0;

    for (let i = 0; i < 7; i++) {
      if (this.playBoard[i].arr[row] == token) {
        counter++;
        if (counter == 4)
          return true;

      }
      else
        counter = 0;


    }

    return win;
  }

  checkLTRDiagonal(column: number, row: number, token: string) {


    return this.initStartPoint(column, row, token);


  }
  initStartPoint(column: number, row: number, token: string) {
    let gap: number;

    if (row > column) {

      gap = row - column;
      column = column - 3;
      if (column < 0) {
        column = 0;
        row = gap;
      }
      else
        row = row - 3;


    }
    else {
      gap = column - row;
      row = row - 3;
      if (row < 0) {
        row = 0;
        column = gap;
      }
      else
        column = column - 3;


    }
    return this.checkPathLTR(row, column, token);

  }

  checkPathLTR(row: number, column: number, token: string) {
    let counter: number = 0;
    let j = column;
    for (let i = row; (i < 6) && (j < 7) && (i >= 0) && (j >= 0); i++) {
      if (this.playBoard[j].arr[i] == token) {
        counter++;
        if (counter == 4)
          return true;

      }
      else
        counter = 0;

      j++;
    }
    return false;
  }
 

  checkRTLDiagonal(column: number, row: number, token: string) {
    column += 3
    row -= 3;
    if (row < 0) {
      column -= row * (-1);
      row = 0;
    }
    if (column > 6) {
      row += column - 6;
      column = 6;
    }

    return this.checkPathRTL(column, row, token);
  }

  checkPathRTL(column: number, row: number, token: string) {
    let j = row;
    let counter = 0;
    for (let i = column; (j < 6) && (i > -1); i--) {
      if (this.playBoard[i].arr[j] == token) {
        counter++;
        if (counter == 4) return true;


      }
      else counter = 0;
      j++;

    }
    return false;
  }

}
