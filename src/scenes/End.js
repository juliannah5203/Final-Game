class End extends Phaser.Scene {
    constructor() {
        super("playScene6");
    }
    preload() {
        this.load.image('end','./assets/end.png');
    }
    create() {
        this.end = this.add.tileSprite(0, 0, 640, 640, 'end').setOrigin(0, 0);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }
    update() {
        /*if (game.input.mousePointer.buttons == 1) {
            game.settings = {
                gameTimer: 40000,
                clickTimer: 500
            }
            this.scene.start("playScene3"); 
           
        }*/
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            game.settings = {
                gameTimer: 40000,
                clickTimer: 500
            }
            this.scene.start("menuScene"); 
        }
      
    }
}