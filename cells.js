class cells {

    element;
    constructor(id, property) {
        this.id = id;
        this.property = property; //bomb or valid
        this.createEle();
    }

    createEle = () => {
        this.element = document.createElement('div');
        this.element.setAttribute('id', this.id);
        this.element.classList.add(this.property);
        this.element.addEventListener('click', () => {
            this.mining(this.element);
        });
        this.element.oncontexmenu = (e) => {
            e.preventDefault();
            this.addFlag(this.element);
        }
        return this.element;
    }

    mining = (ele) => {

    };

    addFlag = (ele) => {

    }

    
}

class grid {
    mit = document.querySelector('#mit');
    difficulty = {
        'easy': [5, 10],
        'medium': [10, 25],
        'hard': [15, 45]}
   
    constructor(level) {
        [this.width, this.bombCount] = this.difficulty[level];
        this.start();
    }

    start = () => {
        let shufellArray = ['valid', 'bomb', 'valid'];
        this.square = new cells(this.width, shufellArray[0]);
        this.mit.appendChild(this.square);
    }
}

let mith = new grid('easy');
