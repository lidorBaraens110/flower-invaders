function Flower(x, y) {
    this.x = x;
    this.y = y;
    this.r = 15;
    this.xdir = 1;
    this.toDelete = false;
    this.show = function () {
        fill(255, 0, 200);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
    this.move = () => {
        this.x = this.x + this.xdir;
    }
    this.shiftDown = () => {
        this.xdir = this.xdir * -1;
        this.y = this.y + this.r * 2;
    }
    this.remove = () => {
        this.toDelete = true;
    }
    this.grow = () => {
        this.r = this.r + 2;
    }
}


