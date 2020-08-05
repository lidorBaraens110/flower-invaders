function Level(level) {
    this.drop = () => {
        textSize(22);
        text(level * 30, 50, 30);
        fill(0, 102, 153);
    }
    this.show = () => {
        textSize(32);
        text('press shift to start', 200, 150);
        fill(0, 102, 153);

    }
    this.start = () => {
        textSize(22);
        text('level ' + level, 520, 30);
        fill(0, 102, 153);
    }
}
