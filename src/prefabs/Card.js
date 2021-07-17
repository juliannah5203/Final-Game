class Card extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, appear) {
        super(scene, x, y, texture, frame);
        scene. add.existing(this);
        this.points = pointValue;
        //this.moveSpeed = game.settings.spaceshipSpeed;
    }
    update() {
        this.alpha = 0;
        this.appear = 0;
    }
    destroy() {
        this.x = 1000;
        this.y = 1000;
    }
    reset() {
        this.alpha = 1;
        this.appear = 1;
    }
}