const level = {
    EASY: { width: 6,  bombAmount: 8},
    MEDIUM: { width: 10,  bombAmount: 12},
    HARD: { width: 15,  bombAmount: 20}
}
let grid = document.getElementById('grid');
function Func() {
    var x = document.getElementById("mySelect");
    let display = x.options[x.selectedIndex].text;
    class Grid {
        constructor(width, bombAmount){
            this.width = width;
            this.bombAmount = bombAmount; 
        }
        run() {
            console.log(this.width, this. bombAmount);
        }
        display() {
            grid.style.setProperty('--setWidth',this.width*40 +'px')
        }
    }
    let obj = new Grid(level[display].width, level[display].bombAmount)
    obj.run();
    obj.display();
}









    











