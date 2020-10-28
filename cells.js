class cells {

    constructor(row, column, opened, flagged, mined, neighborMineCount) {
        this.id = row + "" + column;
        this.row = row;
        this.column = column;
        this.opened = opened;
        this.flagged = flagged;
        this.mined = mined;
        this.neighborMineCount = neighborMineCount;
    }

    
}