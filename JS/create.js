// 精灵对象的构造
// name:当前对象的名称
// painter:用于绘制当前对象的绘制器
function Sprites(name, painter, aniArr) {
    this.name = name || '默认';
    this.painter = painter;
    this.x = 0;
    this.y = 0;
    this.w = 10;
    this.h = 10;
    this.sx = 0;
    this.sy = 0;
    this.hp = 0;
    this.visible = true; //当前对象的可见状态
    this.aniArr = aniArr || [];
    this.animatingState = false; //当前对象正在处于哪个动画状态

}
Sprites.prototype = {
    //对象的绘制方法
    paint: function (ctx) {
        this.painter.paint(this, ctx);
    },
    update: function (time) {
        for (var i in this.aniArr) {
            this.aniArr[i].excute(this, time);
        }
    },
    advance: function () {
        this.painter.advance();
    }
}
/**
 *精灵绘制器（描边，填充，图像的绘制）
 */
function SpritesPainter(url, cells) {
    this.img = new Image(); //图片对象
    this.img.src = url; //图片资源的路径
    this.cells = cells || [];
    this.cellindex = 0; //当前绘图对象所要绘制的图片的信息
}
//更新图片的方法
SpritesPainter.prototype.advance = function () {
    if (this.cellindex == this.cells.length - 1) {
        this.cellindex = 0;
    } else {
        this.cellindex++;
    }
}
//绘制图像的方法
SpritesPainter.prototype.paint = function (sprite, ctx) {
    if (this.img.complete) {
        ctx.save();
        if (sprite.degg != undefined) {
            var cell = this.cells[this.cellindex];
            ctx.translate(sprite.x + sprite.w / 2, sprite.y + sprite.h / 2)
            ctx.rotate(sprite.degg);
            ctx.drawImage(this.img, cell.xx, cell.yy, cell.ww, cell.hh, -sprite.w / 2, -sprite.h / 2, sprite.w, sprite.h);
        } else {
            if (sprite.deg == -90) {
                ctx.rotate(-(Math.PI / 2));
                ctx.translate(-(sprite.x + sprite.y + sprite.w + sprite.translateX), sprite.x - sprite.y + sprite.translateY);
            }
            var cell = this.cells[this.cellindex];
            ctx.drawImage(this.img, cell.xx, cell.yy, cell.ww, cell.hh, sprite.x, sprite.y, sprite.w, sprite.h);
        }

        ctx.restore();
    }
}