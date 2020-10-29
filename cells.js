class cells {

    element;
    constructor(id, property) {
        this.id = id;
        this.property = property; //bomb or valid
    }

    createEle = () => {
        this.element = document.createElement('div');
        this.element.setAttribute('id', this.id);
        this.element.classList.add(this.property);
        this.element.addEventListener('click', () => {
            this.mining();
        });
        this.element.oncontextmenu = (e) => {
            e.preventDefault()
            this.addFlag()
        }
        return this.element;   
    }

    mining = () => {
        console.log('left click');
        // if (isGameOver) return
        if (this.element.classList.contains('checked') || this.element.classList.contains('flag')) return
        if (this.element.classList.contains('bomb')) 
		{
			gameOver(this.element)
		}
        else 
		{
			let total = this.element.getAttribute('data')
			if (total !=0) 
			{
				this.element.classList.add('checked')
				if (total == 1) this.element.classList.add('one')
				if (total == 2) this.element.classList.add('two')
				if (total == 3) this.element.classList.add('three')
				if (total == 4) this.element.classList.add('four')
                this.element.innerHTML = total
    			return
            }
        	checkSquare(this.element, this.id)
		}
		this.element.classList.add('checked')

    };

    addFlag = () => {
        console.log('right click');
        // if (isGameOver) return
		if (!this.element.classList.contains('checked') && (flags < bombAmount)) 
		{
            if (!square.classList.contains('flag')) 
            {
				square.classList.add('flag')
                square.innerHTML = ' 🚩'
                flags ++
				flagsLeft.innerHTML = bombAmount- flags
				checkForWin()
			} 
			else 
			{
				square.classList.remove('flag')
					square.innerHTML = ''
					flags --
					flagsLeft.innerHTML = bombAmount- flags
			}
		}

    }

}

class grid {
    isGameOver = false;
    mit = document.querySelector('#mit');
    difficulty = {
        'easy': [2, 10], //gridWidth, bombAmount
        'medium': [10, 25],
        'hard': [15, 45]}
   
    constructor(level) {
        [this.width, this.bombAmount] = this.difficulty[level];
        this.start();
    }

    start = () => {
        let shufellArray = ['valid', 'bomb', 'valid', 'valid'];

        for (let i=0; i < (this.width*this.width); i++){
            this.cellObj = new cells(i, shufellArray[i]);
            var newCell = this.cellObj.createEle();
            // newCell.addEventListener('click', () => {
            //     this.cellObj.mining();
            // })
            this.mit.appendChild(newCell);
        }
    }
}

let mith = new grid('easy');
