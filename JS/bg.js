/**
 * 背景精灵的绘制
 */

//萝卜的动画
function EndChange(intervalTime) {
    //记录最后一次时间
    this.lastChangeTime = 0;
    this.intervalTime = intervalTime || 300;
}
EndChange.prototype.excute = function (sprite, time) {
    if (sprite.hp == 10) {
        if (time - this.lastChangeTime >= this.intervalTime) {
            switch (sprite.painter.cellindex) {
                case 0:
                    sprite.painter.cellindex = 6
                    break;
                case 6:
                    sprite.painter.cellindex = 5
                    break;
                case 5:
                    sprite.painter.cellindex = 7
                    break;
                case 7:
                    sprite.painter.cellindex = 0
                    break;
            }
            this.lastChangeTime = time;
        }
    }
    if (sprite.hp <= 9 && sprite.hp > 7) {
        sprite.painter.cellindex = 1;
    }
    if (sprite.hp <= 7 && sprite.hp > 5) {
        sprite.painter.cellindex = 2;
    }
    if (sprite.hp <= 5 && sprite.hp > 3) {
        sprite.painter.cellindex = 3;
    }
    if (sprite.hp <= 3 && sprite.hp > 0) {
        sprite.painter.cellindex = 4;
    }
}

function HpChange(intervalTime) {
    //记录最后一次时间
    this.lastChangeTime = 0;
    this.intervalTime = intervalTime || 300;
}
HpChange.prototype.excute = function (sprite, time) {
    sprite.painter.cellindex = end.hp - 1;
    if (end.hp == 8) {
        sprite.w = 25;
        sprite.h = 45;
        sprite.deg = -90;
        sprite.translateX = 0;
        sprite.translateY = 0;
    } else {
        sprite.w = 45;
        sprite.h = 25;
        sprite.deg = 0;
    }
}

function BgSprite(url, type) {
    if (type == 'bg') {
        //背景裁切坐标
        var cells = [{
            xx: 1,
            yy: 0,
            ww: 900,
            hh: 640
        }];
        //背景初始化信息
        var info = {
            x: 0,
            y: 0,
            w: 800,
            h: 500,
        }
    }
    if (type == 'path') {
        //路线裁切坐标
        var cells = [{
            xx: 2,
            yy: 0,
            ww: 950,
            hh: 480
        }];
        //路线初始化信息
        var info = {
            x: 0,
            y: 100,
            w: 800,
            h: 400,
        }
    }
    if (type == 'start') {
        //出生位置图片裁切坐标
        var cells = [{
            xx: 320,
            yy: 0,
            ww: 100,
            hh: 78
        }];
        //出生位置初始化信息
        var info = {
            x: 60,
            y: 80,
            w: 80,
            h: 60,
        }
    }
    if (type == 'end') {
        //终点萝卜图片裁切坐标
        var cells = [{
                //满血-------index=0
                xx: 1374,
                yy: 20,
                ww: 77,
                hh: 100
            },
            {
                //6-8HP-------index=1
                xx: 905,
                yy: 20,
                ww: 77,
                hh: 100
            },
            {
                //4-6HP-------index=2
                xx: 982,
                yy: 20,
                ww: 77,
                hh: 100
            },
            {
                //2-4HP-------index=3
                xx: 1066,
                yy: 20,
                ww: 77,
                hh: 100
            },
            {
                //0-2HP-------index=4
                xx: 1143,
                yy: 20,
                ww: 77,
                hh: 100
            },
            {
                //眨眼第一张-------index=5
                xx: 1220,
                yy: 20,
                ww: 77,
                hh: 100
            }, {
                //眨眼第二张-------index=6
                xx: 1297,
                yy: 20,
                ww: 77,
                hh: 100
            }, {
                //眨眼第三张-------index=7
                xx: 1297,
                yy: 20,
                ww: 77,
                hh: 100
            }
        ];
        //终点萝卜初始化信息
        var info = {
            x: 685,
            y: 80,
            w: 60,
            h: 80,
            hp: 10
        }
        //给萝卜添加动画
        var aniArr = [new EndChange(10)];
    }
    if (type == 'luoboHp') {
        //萝卜血量图片裁切坐标
        var cells = [{
                //HP=1-------index=0
                xx: 1418,
                yy: 528,
                ww: 70,
                hh: 35
            },
            {
                //HP=2-------index=1
                xx: 1382,
                yy: 969,
                ww: 70,
                hh: 35
            },
            {
                //HP=3-------index=2
                xx: 1306,
                yy: 967,
                ww: 70,
                hh: 35
            },
            {
                //HP=4-------index=3
                xx: 1240,
                yy: 647,
                ww: 70,
                hh: 35
            },
            {
                //HP=5-------index=4
                xx: 1154,
                yy: 580,
                ww: 70,
                hh: 35
            },
            {
                //HP=6-------index=5
                xx: 1040,
                yy: 966,
                ww: 70,
                hh: 35
            },
            {
                //HP=7-------index=6
                xx: 790,
                yy: 962,
                ww: 70,
                hh: 35
            },
            {
                //HP=8-------index=7
                xx: 867,
                yy: 882,
                ww: 35,
                hh: 70
            },
            {
                //HP=9-------index=8
                xx: 1460,
                yy: 4,
                ww: 70,
                hh: 35
            },
            {
                //HP=10-------index=9
                xx: 932,
                yy: 44,
                ww: 70,
                hh: 35
            },
        ];
        //萝卜血量位置初始化信息
        var info = {
            x: 747,
            y: 100,
            w: 45,
            h: 25
        }
        //给萝卜血量添加动画
        aniArr = [new HpChange(1)]
    }
    if (type == 'cloud') {
        //云的图片裁切坐标
        var cells = [{
            xx: 164,
            yy: 171,
            ww: 155,
            hh: 110
        }];
        //云的位置初始化信息
        var info = {
            x: 215,
            y: 65,
            w: 120,
            h: 80,
        }
    }
    if (type == 'smallCloud') {
        //云的图片裁切坐标
        var cells = [{
            xx: 245,
            yy: 284,
            ww: 52,
            hh: 77
        }];
        //云的位置初始化信息
        var info = {
            x: 140,
            y: 250,
            w: 60,
            h: 30,
        }
    }
    if (type == 'balloon') {
        //气球的图片裁切坐标
        var cells = [{
            xx: 7,
            yy: 164,
            ww: 150,
            hh: 160
        }];
        //气球的位置初始化信息
        var info = {
            x: 350,
            y: 70,
            w: 110,
            h: 150,
        }
    }
    if (type == 'tree') {
        //树的图片裁切坐标
        var cells = [{
            xx: 2,
            yy: 1,
            ww: 160,
            hh: 150
        }];
        //树的位置初始化信息
        var info = {
            x: 340,
            y: 370,
            w: 130,
            h: 120,
        }
    }
    //创建精灵的绘制器
    var bgPainter = new SpritesPainter(url, cells);
    //实例化一个精灵
    var bgsprite = new Sprites('背景', bgPainter, aniArr);
    bgsprite.x = info.x;
    bgsprite.y = info.y;
    bgsprite.w = info.w;
    bgsprite.h = info.h;
    bgsprite.hp = info.hp || 0;
    bgsprite.deg = info.deg || 0;
    return bgsprite;
}