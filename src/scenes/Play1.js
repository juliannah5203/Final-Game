class Play1 extends Phaser.Scene {
    constructor() {
        super("playScene1");
    }

    create() {
        let play1Config = {
            fontFamily : 'Courier',
            fontSize: '28px',
            backgroundColor: '#000066',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0x99ffcc).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0x99ffcc).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Are you a Prince or Cinderella?', play1Config).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Prince, to start, [->]', play1Config).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2+50, 'Cinderella, to start, [<-]', play1Config).setOrigin(0.5);

        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);




    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
            game.settings = {
                players: 1,
                gameTimer: 20000
            }
            this.scene.start('playScene2'); 
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            game.settings = {
                players: 2,
                gameTimer: 20000
            }
            // easy mode
            this.scene.start('playScene2'); 
           
             
        }
      
      }
}