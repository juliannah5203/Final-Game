class Play1 extends Phaser.Scene {
    constructor() {
        super("playScene1");
    }
    preload() {
        this.load.image('backstory','./assets/story.png');
        this.load.audio('bgm1','./assets/backstoryBGM.mp3');
    }
    create() {
        this.back = this.add.tileSprite(0, 0, 640, 640, 'backstory').setOrigin(0, 0);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.music = this.sound.add('bgm1', {
            volume: 0.3,
            loop: true
        });
        this.music.play();


    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.music.stop();
            this.scene.start("playScene3"); 
        }
      
    }
}