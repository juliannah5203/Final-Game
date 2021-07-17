class Cinderella extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        // add object to exiting scene
        scene. add.existing(this);
        //this.isFiring = false;
        //this.moveSpeed = 2;
        //this.sfxRocket = scene.sound.add('sfx_rocket');
    }
}