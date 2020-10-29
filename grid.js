import { cells } from './cell.js';

const grids = document.querySelector('.grid')
// const flagsLeft = document.querySelector('#flags-left')
// const result = document.querySelector('#result')

class Grid {
    squares = [];
   
    constructor(width, bombAmount) {
        this.width = width
        this.bombAmount = bombAmount
        this.createBoard()

    }
    createBoard=()=> {

        // flagsLeft.innerHTML = this.bombAmount
        const bombsArray = Array(this.bombAmount).fill('bomb')
        const emptyArray = Array(this.width * this.width - this.bombAmount).fill('valid')
        const gameArray = emptyArray.concat(bombsArray)
        const shuffledArray = gameArray.sort(() => Math.random() - 0.5)
        // grid.style.setProperty('--setWidth',this.width*40 +'px')
     
        for (let i = 0; i < this.width * this.width; i++) {
            this.cell=new cells(i,shuffledArray[i])
   
            this.cell.element.classList.add(shuffledArray[i])
            grids.appendChild(this.cell.element)
            this.squares.push(this.cell.element)
        }
        this.addNumbers();
    }
    addNumbers=()=>{
        for (let i = 0; i < this.squares.length; i++) {
            let total = 0
            const isLeftEdge = (i % this.width === 0)
            const isRightEdge = (i % this.width === this.width - 1)
      
            if (this.squares[i].classList.contains('valid')) {
              if (!isLeftEdge && this.squares[i - 1].classList.contains('bomb')) total++
              if ((i > this.width - 1) && !isRightEdge && this.squares[i + 1 - this.width].classList.contains('bomb')) total++
              if ((i > this.width - 1) && this.squares[i - this.width].classList.contains('bomb')) total++
              if ((i > this.width) && !isLeftEdge && this.squares[i - 1 - this.width].classList.contains('bomb')) total++
              if (!isRightEdge && this.squares[i + 1].classList.contains('bomb')) total++
              if ((i < this.width * this.width - this.width) && !isLeftEdge && this.squares[i - 1 + this.width].classList.contains('bomb')) total++
              if ((i < (this.width * this.width) - this.width - 1) && !isRightEdge && this.squares[i + 1 + this.width].classList.contains('bomb')) total++
              if ((i < this.width * this.width - this.width) && this.squares[i + this.width].classList.contains('bomb')) total++
              this.squares[i].setAttribute('data', total)
              this.cell.element.innerHTML=total
            }
        }
debugger
        return grids;
    }

}

let dd=new Grid(9,20)