var aniArr = [];
//怪物行为的抽象
var MonstersMove = function (intervalTime) {
    //记录最后一次时间
    this.lastMonstersMoveTime = 0;
    this.intervalTime = intervalTime || 300;
}
MonstersMove.prototype.excute = function (sprite, time) {
    if (sprite.x == 66 && sprite.y == 280) {
        sprite.sx = 1 * sprite.speed;
        sprite.sy = 0;
    }
    if (sprite.x == 266 && sprite.y == 280) {
        sprite.sx = 0;
        sprite.sy = -1 * sprite.speed;
    }
    if (sprite.x == 266 && sprite.y == 220) {
        sprite.sx = 1 * sprite.speed;
        sprite.sy = 0;
    }
    if (sprite.x == 470 && sprite.y == 220) {
        sprite.sx = 0;
        sprite.sy = 1 * sprite.speed;
    }
    if (sprite.x == 470 && sprite.y == 280) {
        sprite.sx = 1 * sprite.speed;
        sprite.sy = 0;
    }
    if (sprite.x == 670 && sprite.y == 280) {
        sprite.sx = 0;
        sprite.sy = -1 * sprite.speed;
    }
    if (sprite.x == 670 && sprite.y <= 86) {
        sprite.visible = false;
        end.hp--;
    }
    if (time - this.lastMonstersMoveTime >= this.intervalTime) {
        this.lastMonstersMoveTime = time;
        sprite.x += sprite.sx;
        sprite.y += sprite.sy;
    }
    if (sprite.hp <= 0) {
        gold += 14;
        sprite.visible = false;
    }

}
var MonstersChange = function (intervalTime) {
    //记录最后一次时间
    this.lastMonstersChangeTime = 0;
    this.intervalTime = intervalTime || 300;
}
MonstersChange.prototype.excute = function (sprite, time) {
    if (time - this.lastMonstersChangeTime >= this.intervalTime) {
        if (sprite.painter.cellindex == sprite.painter.cells.length - 1) {
            sprite.painter.cellindex = 0;
        } else {
            sprite.painter.cellindex++;
        }
        this.lastMonstersChangeTime = time;
    }
    //章鱼的旋转图片
    if (sprite.type == 'zhangyu') {
        if (sprite.painter.cellindex == 0) {
            sprite.deg = -90;
            sprite.w = 50;
            sprite.h = 50;
            sprite.translateX = 10;
            sprite.translateY = 10
        } else {
            sprite.deg = 0;
            sprite.w = 70;
            sprite.h = 60;
        }
    }
    //海星的旋转图片
    if (sprite.type == 'haixing') {
        if (sprite.painter.cellindex == 0) {
            sprite.deg = -90;
            sprite.w = 50;
            sprite.h = 50;
            sprite.translateX = 20;
            sprite.translateY = 10
        } else {
            sprite.deg = -90;
            sprite.w = 70;
            sprite.h = 60;
            sprite.translateX = 0;
            sprite.translateY = 0
        }
    }
}
//怪物精灵的绘制
function MonstersSprite(url, type, time) {
    if (time % 500 == 0) {
        //血量倍率
        hpMultiple += 100;
    }
    //章鱼
    if (type == 'zhangyu') {
        //怪物裁切坐标
        var cells = [{
                xx: 462,
                yy: 71,
                ww: 58,
                hh: 57
            },
            {
                xx: 381,
                yy: 386,
                ww: 77,
                hh: 75

            }
        ];
        //怪物初始化信息
        var info = {
            x: 66,
            y: 86,
            w: 70,
            h: 60,
            sx: 0,
            sy: 1,
            speed: 1,
            hp: 100,
            maxhp: 100,
            type: 'zhangyu'
        }
    }
    //海星
    if (type == 'haixing') {
        //怪物裁切坐标
        var cells = [{
                xx: 456,
                yy: 384,
                ww: 60,
                hh: 57
            },
            {
                xx: 277,
                yy: 457,
                ww: 77,
                hh: 69

            }
        ];
        //怪物初始化信息
        var info = {
            x: 66,
            y: 86,
            w: 70,
            h: 60,
            sx: 0,
            sy: 1,
            speed: 1,
            hp: 100,
            maxhp: 100,
            type: 'haixing'
        }
    }
    //水母
    if (type == 'shuimu') {
        //怪物裁切坐标
        var cells = [{
                xx: 3,
                yy: 484,
                ww: 80,
                hh: 76
            },
            {
                xx: 98,
                yy: 470,
                ww: 67,
                hh: 90

            }
        ];
        //怪物初始化信息
        var info = {
            x: 66,
            y: 86,
            w: 70,
            h: 60,
            sx: 0,
            sy: 1,
            speed: 1,
            hp: 100,
            maxhp: 100,
            type: 'shuimu'
        }
    }

    //蝙蝠
    if (type == 'bianfu') {
        //怪物裁切坐标
        var cells = [{
                xx: 291,
                yy: 373,
                ww: 93,
                hh: 88
            },
            {
                xx: 178,
                yy: 430,
                ww: 97,
                hh: 75

            }
        ];
        //怪物初始化信息
        var info = {
            x: 66,
            y: 86,
            w: 70,
            h: 60,
            sx: 0,
            sy: 2,
            speed: 2,
            hp: 100,
            maxhp: 100,
            type: 'bianfu'
        }
    }


    aniArr = [new MonstersMove(1), new MonstersChange(10)]
    //创建精灵的绘制器
    var MonstersPainter = new SpritesPainter(url, cells);
    //实例化一个精灵
    var MonstersSprite = new Sprites('Monsters', MonstersPainter, aniArr);
    MonstersSprite.x = info.x;
    MonstersSprite.y = info.y;
    MonstersSprite.w = info.w;
    MonstersSprite.h = info.h;
    MonstersSprite.sx = info.sx;
    MonstersSprite.sy = info.sy;
    MonstersSprite.speed = info.speed;
    MonstersSprite.hp = info.hp + hpMultiple;
    MonstersSprite.maxhp = info.maxhp + hpMultiple;
    MonstersSprite.type = info.type;
    return MonstersSprite;
}