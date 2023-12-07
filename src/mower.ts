
// you will write your mower program here
//{ x:1, y:2, o:"N"}, "RRR"
const orientationActions = {
    R: {
        N: 'E',
        E: 'S',
        S: 'W',
        W: 'N'
    },
    L: {
        N: 'W',
        E: 'N',
        S: 'E',
        W: 'S'
    }
}

const moveForward = ({ x, y }, currentO) => {
    let newPosX = x, newPosY = y;
    switch (currentO) {
        case 'N':
          newPosY = y + 1;
          break;
        case 'E':
          newPosX = x + 1;
          break;
        case 'W':
          if(x > 0) {
            newPosX = x - 1;
          }
          break;
        case 'S':
          if(y > 0) {
            newPosY = y - 1;
          }
          break;
    }
    return [newPosX, newPosY];
}

const mower = ({ x, y, o }, actions) => {
    let currentX = x, currentY = y, currentO = o;
    actions.split("").forEach(action => {
        switch (action) {
            case 'L':
            case 'R':
              currentO = orientationActions[action][currentO];
              break;
            case 'M':
              [currentX, currentY] = moveForward({ x: currentX, y: currentY }, currentO);
              break;
        }
          
    });
    return `${currentX}${currentY}${currentO}`;
}

export default mower