import { Column } from './Column';
import { OnInit } from '@angular/core';

export class 
Board implements OnInit {
    constructor(
        public board?: Column[]


    ) {}
    ngOnInit(): void {
        {
           
         this.board.length=7;
            for (let index = 0; index < this.board.length; index++) {
          let column:Column;
          
            this.board[index]=column;
                
            }

        }
    }
       
    }
  