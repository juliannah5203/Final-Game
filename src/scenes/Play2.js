class Play2 extends Phaser.Scene {
    constructor() {
        super("playScene2");
    }

    create() {
        let play2Config = {
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
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        if (game.settings.players == 1) {
            this.add.text(game.config.width/2, game.config.height/2, 'Welcome to Cinderella\'s Adventure!').setOrigin(0.5);
        }
        if (game.settings.players == 2) {
            this.add.text(game.config.width/2, game.config.height/2, 'Welcome to Prince\'s Adventure!').setOrigin(0.5);
        }
        this.add.text(game.config.width/2, game.config.height/2+50, '[Spacebar to start]', play2Config).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2+100, '[Click those square and find the same one]', play2Config).setOrigin(0.5);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
          
            this.scene.start("playScene3"); 
             
        }
    }
}