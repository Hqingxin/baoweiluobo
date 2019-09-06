//炮台转向的方法
function TowerDegChange(intervalTime) {
    //记录最后一次时间
    this.lastTowerDegChangeTime = 0;
    this.intervalTime = intervalTime || 300;
}
TowerDegChange.prototype.excute = function (sprite, time) {
    if (time - this.lastTowerDegChangeTime >= this.intervalTime) {
        this.lastTowerDegChangeTime = time;
        if (sprite.type == 'bottle') {
            for (var i in MonstersArr) {
                if (duang(sprite, MonstersArr[i])) {
                    var degg = calculateDeg(sprite.x, sprite.y, MonstersArr[i].x, MonstersArr[i].y);
                    sprite.degg = degg;
                    var bullet = Bullet('imgs/TBottle.png', 'bottle', sprite.x, sprite.y, MonstersArr[i], degg, sprite.atk)
                    bulletArr.push(bullet);
                    return;
                }
            }
        }
        if (sprite.type == 'shit') {
            for (var i in MonstersArr) {
                if (duang(sprite, MonstersArr[i])) {
                    var degg = calculateDeg(sprite.x, sprite.y, MonstersArr[i].x, MonstersArr[i].y);
                    var bullet = Bullet('imgs/TShit.png', 'shit', sprite.x, sprite.y, MonstersArr[i], degg, sprite.atk)
                    bulletArr.push(bullet);
                    return;
                }
            }
        }
    }
}
//创建一个炮台
function Tower(url, type) {
    //绿瓶子底座
    if (type == 'bottleDizuo') {
        //绿瓶子底座裁切坐标
        var cells = [{
            xx: 261,
            yy: 192,
            ww: 65,
            hh: 63
        }];
        var info = {
            w: 50,
            h: 50
        }
    }
    //绿瓶子
    if (type == 'bottle') {
        //绿瓶子裁切图标
        var cells = [{
            xx: 464,
            yy: 184,
            ww: 30,
            hh: 60
        }]
        //初始化绿瓶子信息
        var info = {
            w: 30,
            h: 45,
            atk: 100,
            r: 150,
            type: 'bottle',
            upgradeAble: false,
            upgradeGold: 100,
            grade: 1,
        }
    }
    //便便底座
    if (type == 'shitDizuo') {
        //便便底座裁切坐标
        var cells = [{
            xx: 178,
            yy: 82,
            ww: 78,
            hh: 35
        }];
        var info = {
            w: 50,
            h: 20
        }
    }
    //便便
    if (type == 'shit') {
        //便便裁切图标
        var cells = [{
            xx: 0,
            yy: 85,
            ww: 50,
            hh: 50
        }]
        //初始化便便信息
        var info = {
            w: 40,
            h: 40,
            atk: 50,
            r: 150,
            type: 'shit',
            upgradeAble: false,
            upgradeGold: 120,
            grade: 1,
        }
    }
    //升级
    if (type == 'upgrade') {
        //升级裁切图标
        var cells = [{
            xx: 1226,
            yy: 577,
            ww: 30,
            hh: 40
        }]
        //初始化升级信息
        var info = {
            w: 30,
            h: 40,
            type: 'upgrade',
            upgradeAble: false
        }
    }



    aniArr = [new TowerDegChange(50)]
    //创建精灵的绘制器
    var TowerPainter = new SpritesPainter(url, cells);
    //实例化一个精灵
    var TowerSprite = new Sprites('Tower', TowerPainter, aniArr);
    TowerSprite.x = info.x;
    TowerSprite.y = info.y;
    TowerSprite.w = info.w;
    TowerSprite.h = info.h;
    TowerSprite.atk = info.atk;
    TowerSprite.r = info.r;
    TowerSprite.upgradeAble = info.upgradeAble;
    TowerSprite.upgradeGold = info.upgradeGold;
    TowerSprite.type = info.type;
    TowerSprite.grade = info.grade;
    return TowerSprite;
}