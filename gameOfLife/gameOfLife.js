var cols = 500;
var rows = 400;
var playing = false;

var grid = new Array(rows);
var nextGrid = new Array(rows);

var timer;
var reproductionTime = 80;

function initializeGrids() {
    for (i = 0; i < rows; i++) {
        grid[i] = new Array(cols);
        nextGrid[i] = new Array(cols);
    }
}

function resetGrids() {
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            grid[i][j] = 0;
            nextGrid[i][j] = 0;
        }
    }
}

function copyAndResetGrid() {
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            grid[i][j] = nextGrid[i][j];
            nextGrid[i][j] = 0;
        }
    }
}

// Initialize
function initialize() {
    createTable();
    initializeGrids();
    resetGrids();
    setupControlButtons();
}

// board
function createTable() {
    var gridContainer = document.getElementById('gridContainer');
    var table = document.createElement("table");
    
    for (i = 0; i < rows; i++) {
        var tr = document.createElement("tr");
        for (j = 0; j < cols; j++) {
            var cell = document.createElement("td");
            cell.setAttribute("id", i + "_" + j);
            cell.setAttribute("class", "dead");
            cell.onclick = cellClickHandler;
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    gridContainer.appendChild(table);
}

function cellClickHandler() {
    var rowcol = this.id.split("_");
    var row = rowcol[0];
    var col = rowcol[1];
    
    var classes = this.getAttribute("class");
    if(classes.indexOf("live") > -1) {
        this.setAttribute("class", "dead");
        grid[row][col] = 0;
    } else {
        this.setAttribute("class", "live");
        grid[row][col] = 1;
    }
    
}

function updateView() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var cell = document.getElementById(i + "_" + j);
            if (grid[i][j] == 0) {
                cell.setAttribute("class", "dead");
            } else {
                cell.setAttribute("class", "live");
            }
        }
    }
}

function setupControlButtons() {
    var startButton = document.getElementById('start');
    startButton.onclick = startButtonHandler;

    var clearButton = document.getElementById('clear');
    clearButton.onclick = clearButtonHandler;
}

// clear the grid
function clearButtonHandler() {
    console.log("Clear the game: stop playing, clear the grid");
    
    playing = false;
    var startButton = document.getElementById('start');
    startButton.innerHTML = "Start";    
    clearTimeout(timer);
    
    var cellsList = document.getElementsByClassName("live");
    var cells = [];
    for (i = 0; i < cellsList.length; i++) {
        cells.push(cellsList[i]);
    }
    
    for (i = 0; i < cells.length; i++) {
        cells[i].setAttribute("class", "dead");
    }
    resetGrids;
}

// start/pause/continue the game
function startButtonHandler() {
    if (playing) {
        console.log("Pause the game");
        playing = false;
        this.innerHTML = "Continue";
        clearTimeout(timer);
    } else {
        console.log("Continue the game");
        playing = true;
        this.innerHTML = "Pause";
        play();
    }
}

// run the life game
function play() {
    computeNextGen();
    
    if (playing) {
        timer = setTimeout(play, reproductionTime);
    }
}

function computeNextGen() {
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            applyRules(i, j);
        }
    }
    copyAndResetGrid();
    updateView();
}

function countNeighbors(row, col) {
    var count = 0;
    if (row-1 >= 0) {
        if (grid[row-1][col] == 1) count++;
    }
    if (row-1 >= 0 && col-1 >= 0) {
        if (grid[row-1][col-1] == 1) count++;
    }
    if (row-1 >= 0 && col+1 < cols) {
        if (grid[row-1][col+1] == 1) count++;
    }
    if (col-1 >= 0) {
        if (grid[row][col-1] == 1) count++;
    }
    if (col+1 < cols) {
        if (grid[row][col+1] == 1) count++;
    }
    if (row+1 < rows) {
        if (grid[row+1][col] == 1) count++;
    }
    if (row+1 < rows && col-1 >= 0) {
        if (grid[row+1][col-1] == 1) count++;
    }
    if (row+1 < rows && col+1 < cols) {
        if (grid[row+1][col+1] == 1) count++;
    }
    return count;
}

function applyRules(row, col) {
    var numNeighbors = countNeighbors(row, col);
    if (grid[row][col] == 1) {
        if (numNeighbors < 2) {
            nextGrid[row][col] = 0;
        } else if (numNeighbors == 2 || numNeighbors == 3) {
            nextGrid[row][col] = 1;
        } else if (numNeighbors > 3) {
            nextGrid[row][col] = 0;
        }
    } else if (grid[row][col] == 0) {
        if (numNeighbors == 3) {
            nextGrid[row][col] = 1;
        }
    }
}

// Start everything
window.onload = initialize;