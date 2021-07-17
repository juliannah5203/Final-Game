class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {
        this.load.image('background','./assets/background1.png');
        this.load.audio('bgm','./assets/maze_bgm.wav');
        //this.load.image('cinderella','./assets/front.png');
        //this.load.image('choco','./assets/choco.png');
        //this.load.image('straw','./assets/straw.png');
    }
  
    create() {
        this.grass = this.add.tileSprite(0, 0, 640, 640, 'background').setOrigin(0, 0);
        /*this.music = this.sound.add('bgm', {
            volume: 0.5,
            loop: true
        });
        this.music.play();*/
        /*let menuConfig = {
            fontFamily : 'Courier',
            fontSize: '28px',
            backgroundColor: '#ffffff',
            color: '#000066',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }*/
        //this.cinderella = new Cinderella(this, game.config.width/2, game.config.height/2,'cinderella').setOrigin(0.5,0)
        //this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Prince and Cinderella', menuConfig).setOrigin(0.5);
        //this.add.text(game.config.width/2, game.config.height/2, 'USE [SPACEBAR] to start the game', menuConfig).setOrigin(0.5);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


    }
    update() {
        /*if (game.input.mousePointer.buttons == 1) {
            game.settings = {
                gameTimer: 40000,
                clickTimer: 500
            }
            this.scene.start("playScene3"); 
           
        }*/
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            game.settings = {
                gameTimer: 40000,
                clickTimer: 100
            }
            this.scene.start("playScene3"); 
        }
      
    }
      

}