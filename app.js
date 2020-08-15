var queen = {
    position: {
        x: 0,
        y: 5
    }
};

function changeDirection(number, direction) {
    var temp;
    var temp1;
    switch (direction) {
        case "E":
            temp = queen.position.y + number;
            if (temp > 7 || temp < 0) {
                console.log("Out of Boundary E");
            } else {
                queen.position.y = temp;
            }
            break;
        case "N":
            temp = queen.position.x - number;
            if (temp > 7 || temp < 0) {
                console.log("Out of Boundary N");
            } else {
                queen.position.x = temp;
            }
            break;
        case "S":
            temp = queen.position.x + number;
            if (temp > 7 || temp < 0) {
                console.log("Out of Boundary S");
            } else {
                queen.position.x = temp;
            }
            break;
        case "W":
            temp = queen.position.y - number;
            if (temp > 7 || temp < 0) {
                console.log("Out of Boundary W");
            } else {
                queen.position.y = temp;
            }
            break;
        case "NE":
            temp = queen.position.x - number;
            temp1 = queen.position.y + number;
            if (temp > 7 || temp < 0 || temp1 > 7 || temp1 < 0) {
                console.log("Out of Boundary NE");
            } else {
                queen.position.y = temp1;
                queen.position.x = temp;
            }
            break;
        case "NW":
            temp = queen.position.x - number;
            temp1 = queen.position.y - number;
            if (temp > 7 || temp < 0 || temp1 > 7 || temp1 < 0) {
                console.log("Out of Boundary NW");
            } else {
                queen.position.y = temp1;
                queen.position.x = temp;
            }
            break;
        case "SW":
            temp = queen.position.x + number;
            temp1 = queen.position.y - number;
            if (temp > 7 || temp < 0 || temp1 > 7 || temp1 < 0) {
                console.log("Out of Boundary SW");
            } else {
                queen.position.y = temp1;
                queen.position.x = temp;
            }
            break;
        case "SW":
            temp = queen.position.x + number;
            temp1 = queen.position.y - number;
            if (temp > 7 || temp < 0 || temp1 > 7 || temp1 < 0) {
                console.log("Out of Boundary SW");
            } else {
                queen.position.y = temp1;
                queen.position.x = temp;
            }
    }
}

function play(input) {
    var value = input.split(" ");
    value.forEach(element => {
        let number = Number(element.slice(element.length - 1));
        let direction = element.slice(0, element.length - 1);
        //console.log("Number =" + number);
        //console.log("Direction =" + diection);
        changeDirection(number, direction)
    });
    console.log(value);
    changeDirection();
    console.log("Your position " + board[queen.position.x][queen.position.y]);
}
board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"], //x=0,y=0 =>a8
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
];