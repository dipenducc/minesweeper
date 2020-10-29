class cells {

    constructor(id, property) {
        this.id = id;
        this.property = property; //bomb or valid
        this.createEle();
    }

    createEle = () => {
        this.element = document.createAttribute('div');
        this.element.setAttribute('id', this.id);
        this.element.classList.add(this.property);
        this.element.addEventListener('click', (e) => {
            this.mining(this.element);
        });
        this.element.oncontexmenu = (e) => {
            e.preventDefault();
            addFlag(this.element);
        }
        return this.element;
    }

    
}

// class grid {
//     i;
//     difficulty = {
//         'easy': [5, 10],
//         'medium': [10, 25],
//         'hard': [15, 45]
//     }

//     constructor(level) {
//         [this.width, this.bombCount] = this.difficulty[level];
//     };

//     for (let i = 0; i < array.length; i++) {

//     }

//     ele = new cells()
// }

// let mit = new grid('easy');
