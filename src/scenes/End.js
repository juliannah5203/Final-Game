class End extends Phaser.Scene {
    constructor() {
        super("playScene6");
    }
    preload() {
        this.load.image('end1','./assets/end1.png');
        this.load.image('end2','./assets/end2.png');
        this.load.image('end3','./assets/end3.png');
        this.load.image('end4','./assets/end4.png');
        this.load.image('end','./assets/happyend.png');
    }
    create() {
        if(game.settings.car == 0) {
            this.end = this.add.tileSprite(0, 0, 640, 640, 'end1').setOrigin(0, 0);
        } 
        else {
            if (game.settings.hair == 0) {
                if (game.settings.wear == 0) {
                    this.end = this.add.tileSprite(0, 0, 640, 640, 'end2').setOrigin(0, 0);
                }
                else {
                    this.end = this.add.tileSprite(0, 0, 640, 640, 'end4').setOrigin(0, 0);
                }
            }
            else {
                if (game.settings.wear == 0) {
                    this.end = this.add.tileSprite(0, 0, 640, 640, 'end3').setOrigin(0, 0);
                }
                else {
                    this.end = this.add.tileSprite(0, 0, 640, 640, 'end').setOrigin(0, 0);
                }
            }
        }
        
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
            this.endsound = this.sound.add('endbgm', {
                volume: 0.2,
                loop: false
            });
            this.endsound.play();
            this.scene.start("menuScene"); 
        }
      
    }
}