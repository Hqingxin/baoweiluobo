//子弹运动
function BulletMove() {

}
BulletMove.prototype.excute = function (Sprite, time) {
    Sprite.x += Sprite.sx;
    Sprite.y += Sprite.sy;
    if (duang(Sprite, Sprite.target)) {
        Sprite.target.hp -= Sprite.atk;
        if (Sprite.type == 'shit') {
            clearAll();
            Sprite.target.aniArr[0].intervalTime = 4;
            var a = setTimeout(function () {
                Sprite.target.aniArr[0].intervalTime = 2;
            }, 2000)

        }
        Sprite.visible = false;
    }
    if (Sprite.x < 0 || Sprite.y < 0 || Sprite.x > can.width || Sprite.y > can.height) {
        Sprite.visible = false;
    }
}


var BulletChange = function (intervalTime) {
    //记录最后一次时间
    this.lastBulletChangeTime = 0;
    this.intervalTime = intervalTime || 300;
}
BulletChange.prototype.excute = function (sprite, time) {
    if (time - this.lastBulletChangeTime >= this.intervalTime) {
        if (sprite.painter.cellindex == sprite.painter.cells.length - 1) {
            sprite.painter.cellindex = 0;
        } else {
            sprite.painter.cellindex++;
        }
        this.lastBulletChangeTime = time;
    }
}
//创建子弹
function Bullet(url, type, x1, y1, Monster, degg, atk) {
    if (type == 'bottle') {
        //绿瓶子子弹裁切坐标
        var cells = [{
            xx: 0,
            yy: 205,
            ww: 25,
            hh: 42
        }, {
            xx: 30,
            yy: 205,
            ww: 25,
            hh: 42
        }];
        var info = {
            w: 25,
            h: 42,
            sx: 10 * Math.sin(degg),
            sy: -(10 * Math.cos(degg)),
            atk: atk,
            type: 'bottle',
        }
    }
    if (type == 'shit') {
        //绿瓶子子弹裁切坐标
        var cells = [{
            xx: 531,
            yy: 0,
            ww: 25,
            hh: 50
        }, {
            xx: 531,
            yy: 55,
            ww: 25,
            hh: 50
        }];
        var info = {
            w: 25,
            h: 42,
            sx: 10 * Math.sin(degg),
            sy: -(10 * Math.cos(degg)),
            atk: atk,
            type: 'shit',
        }
    }
    aniArr = [new BulletMove(), new BulletChange(3)]
    //创建精灵的绘制器
    var BulletPainter = new SpritesPainter(url, cells);
    //实例化一个精灵
    var BulletSprite = new Sprites('Bullet', BulletPainter, aniArr);
    BulletSprite.x = x1;
    BulletSprite.y = y1;
    BulletSprite.target = Monster;
    BulletSprite.w = info.w;
    BulletSprite.h = info.h;
    BulletSprite.speed = 1;
    BulletSprite.sx = info.sx * BulletSprite.speed;
    BulletSprite.sy = info.sy * BulletSprite.speed;
    BulletSprite.degg = degg;
    BulletSprite.type = info.type;
    BulletSprite.atk = info.atk;
    return BulletSprite;
}


//清除所有计时器
function clearAll() {
    var end = setTimeout(function () {}, 100)
    for (var i = 0; i <= end; i++) {
        clearTimeout(i);
    }
}