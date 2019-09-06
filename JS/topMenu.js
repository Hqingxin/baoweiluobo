var TowerIconChange = function (intervalTime) {
    //记录最后一次时间
    this.lastTowerIconChangeTime = 0;
    this.intervalTime = intervalTime || 300;
}
TowerIconChange.prototype.excute = function (sprite, time) {
    if (sprite.type == 'bottle') {
        if (gold >= 100) {
            sprite.painter.cellindex = 0;
        } else {
            sprite.painter.cellindex = 1;
        }
    }
    if (sprite.type == 'shit') {
        if (gold >= 120) {
            sprite.painter.cellindex = 0;
        } else {
            sprite.painter.cellindex = 1;
        }
    }
}
//顶部菜单的绘制
function TopMenuSprite(url, type) {
    if (type == 'bg') {
        //背景裁切坐标
        var cells = [{
            xx: 1,
            yy: 0,
            ww: 928,
            hh: 74
        }];
        //背景初始化信息
        var info = {
            x: 25,
            y: 0,
            w: 750,
            h: 60,
        }
    }
    if (type == 'bottle') {
        //绿瓶子图标裁切坐标
        var cells = [{
                xx: 0,
                yy: 125,
                ww: 80,
                hh: 80
            },
            {
                xx: 78,
                yy: 125,
                ww: 80,
                hh: 80
            }
        ];
        //绿瓶子图标初始化信息
        var info = {
            x: 300,
            y: 5,
            w: 50,
            h: 50,
            type: 'bottle',
        }
        var aniArr = [new TowerIconChange(1)];
    }

    if (type == 'shit') {
        //便便图标裁切坐标
        var cells = [{
                xx: 25,
                yy: 0,
                ww: 80,
                hh: 80
            },
            {
                xx: 103,
                yy: 0,
                ww: 80,
                hh: 80
            }
        ];
        //便便图标初始化信息
        var info = {
            x: 360,
            y: 5,
            w: 50,
            h: 50,
            type: 'shit'
        }
        var aniArr = [new TowerIconChange(1)];
    }
    if (type == 'remove') {
        //移除裁切坐标
        var cells = [{
            xx: 1079,
            yy: 649,
            ww: 82,
            hh: 78
        }];
        //移除初始化信息
        var info = {
            x: 420,
            y: 5,
            w: 50,
            h: 50,
        }
    }


    //创建精灵的绘制器
    var TopMenuPainter = new SpritesPainter(url, cells);
    //实例化一个精灵
    var TopMenuSprite = new Sprites('顶部菜单', TopMenuPainter, aniArr);
    TopMenuSprite.x = info.x;
    TopMenuSprite.y = info.y;
    TopMenuSprite.w = info.w;
    TopMenuSprite.h = info.h;
    TopMenuSprite.type = info.type;
    return TopMenuSprite;
}