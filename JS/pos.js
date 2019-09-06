//可放置炮台的位置的数组
var TowerPosArr = [];
//整个地图的位置的二维数组
var allPosArr = [];

var start_pos_init = [10, 40];
var boxWH = 50;
var row = 7;
var col = 12;
var ter_wid = 17;
var start_pos = start_pos_init.concat();
for (var i = 0; i < row; i++) {
    var arr1 = [];
    start_pos[0] = start_pos_init[0];
    for (var j = 0; j < col; j++) {
        arr1.push({
            x: start_pos[0],
            y: start_pos[1],
            able: true
        });
        start_pos[0] = boxWH + ter_wid + start_pos[0];

    }
    allPosArr.push(arr1);
    start_pos[1] = boxWH + ter_wid + start_pos[1];
}

TowerPosArr.push(allPosArr[0][0], allPosArr[0][1], allPosArr[0][2], allPosArr[0][9], allPosArr[0][10], allPosArr[0][11], allPosArr[1][0], allPosArr[1][2], allPosArr[1][9], allPosArr[1][11], allPosArr[2][0], allPosArr[2][2], allPosArr[2][3], allPosArr[2][4], allPosArr[2][7], allPosArr[2][8], allPosArr[2][9], allPosArr[2][11], allPosArr[3][0], allPosArr[3][3], allPosArr[3][8], allPosArr[3][11], allPosArr[4][0], allPosArr[4][0], allPosArr[4][5], allPosArr[4][6], allPosArr[4][11], allPosArr[5][0], allPosArr[5][1], allPosArr[5][2], allPosArr[5][3], allPosArr[5][4], allPosArr[5][7], allPosArr[5][8], allPosArr[5][9], allPosArr[5][10], allPosArr[5][11], allPosArr[6][0], allPosArr[6][1], allPosArr[6][2], allPosArr[6][3], allPosArr[6][4], allPosArr[6][7], allPosArr[6][8], allPosArr[6][9], allPosArr[6][10], allPosArr[6][11]);