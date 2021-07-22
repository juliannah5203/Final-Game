
class Level1 extends Phaser.Scene {
    constructor() {
        super("playScene1");
        // this.timeLimit = 40; // timeLimit for countdown in seconds
        // this.timeOver = false; // set to false at start
        // this.timeText; // display time remaining
    }
    preload() {
        this.load.audio('bgm','./assets/maze_bgm.wav');
        this.load.image('card','./assets/card back.png');
        this.load.image('card2','./assets/card back2.png');
        this.load.image('pumpkin','./assets/pumpkin carriage.png');
        this.load.image('mouse','./assets/mouse.png');
        this.load.image('rabbit','./assets/rabbit.png');
        this.load.image('horse','./assets/horse.png');
        this.load.image('bird','./assets/bird.png');
        this.load.image('magic','./assets/magic stick.png');
        this.load.image('level1','./assets/level1.png');
    }
  
    create() {
        

        this.back = this.add.tileSprite(0, 0, 640, 640, 'level1').setOrigin(0, 0);
        //this.add.rectangle(0, 0, game.config.width, game.config.height, 0x99ffcc).setOrigin(0, 0);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.music = this.sound.add('bgm', {
            volume: 0.5,
            loop: true
        });
        this.music.play();
        this.score = 0;
        let scoreConfig = {
            fontFamily: 'Comic Sans MS',
            fontSize: '36px',
            backgroundColor: '#FFFFFF',
            color: '#D43F4D',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        
        //if (game.settings.players == 2) {
            //scoreConfig.color = '#7FA8CF';
        //}
        //this.scoreLeft = this.add.text(game.config.width/20, game.config.height / 30, this.score, scoreConfig);
        scoreConfig.fixedWidth = 0;


        // this.startTime = this.time.now;
        // this.timeRight = this.add.text(200, 200, Math.floor((this.time.now - this.startTime)/1000), scoreConfig).setDepth(20);
        // this.timeRight.text = Math.floor((this.time.now - this.startTime)/1000);

        //this.text2 = this.add.text(game.config.width/20, game.config.height / 30, 'Left Button was released', scoreConfig);
        //this.input.mouse.disableContextMenu();
        //this.pointer = this.input.activePointer;
        /*this.input.on('pointerup', function (pointer) {
            if (pointer.leftButtonReleased()) {
                this.text2 = this.add.text(game.config.width/20, game.config.height / 30, 'Left Button was released', scoreConfig);
            }
        });*/
        //if (this.pointer.isDown) {
            //this.score += 20;
        //}
        
        this.pumpkin = this.add.sprite(game.config.width/2, game.config.height/2,'pumpkin');
        /*this.cardA = this.add.sprite(game.config.width/2 - 52.5, game.config.height/2 - 157.5,'mouse').setInteractive();
        this.cardB = this.add.sprite(game.config.width/2 + 52.5, game.config.height/2 - 157.5,'rabbit').setInteractive();
        this.cardC = this.add.sprite(game.config.width/2 - 157.5, game.config.height/2 - 157.5,'horse').setInteractive();
        this.cardD = this.add.sprite(game.config.width/2 + 157.5, game.config.height/2 - 157.5,'mouse').setInteractive();
        this.cardE = this.add.sprite(game.config.width/2 - 52.5, game.config.height/2 - 52.5,'bird').setInteractive();
        this.cardF = this.add.sprite(game.config.width/2 + 52.5, game.config.height/2 - 52.5,'rabbit').setInteractive();
        this.cardG = this.add.sprite(game.config.width/2 - 157.5, game.config.height/2 - 52.5,'mouse').setInteractive();
        this.cardH = this.add.sprite(game.config.width/2 + 157.5, game.config.height/2 - 52.5,'horse').setInteractive();
        this.cardI = this.add.sprite(game.config.width/2 - 52.5, game.config.height/2 + 52.5,'rabbit').setInteractive();
        this.cardJ = this.add.sprite(game.config.width/2 + 52.5, game.config.height/2 + 52.5,'bird').setInteractive();
        this.cardK = this.add.sprite(game.config.width/2 - 157.5, game.config.height/2 + 52.5,'bird').setInteractive();
        this.cardL = this.add.sprite(game.config.width/2 + 157.5, game.config.height/2 + 52.5,'mouse').setInteractive();
        this.cardM = this.add.sprite(game.config.width/2 - 52.5, game.config.height/2 + 157.5,'horse').setInteractive();
        this.cardN = this.add.sprite(game.config.width/2 + 52.5, game.config.height/2 + 157.5,'rabbit').setInteractive();
        this.cardO = this.add.sprite(game.config.width/2 - 157.5, game.config.height/2 + 157.5,'bird').setInteractive();
        this.cardP = this.add.sprite(game.config.width/2 + 157.5, game.config.height/2 + 157.5,'horse').setInteractive();
        this.card = this.add.sprite(game.config.width/2 - 52.5, game.config.height/2 - 157.5,'card').setInteractive();
        this.card2 = this.add.sprite(game.config.width/2 + 52.5, game.config.height/2 - 157.5,'card').setInteractive();
        this.card3 = this.add.sprite(game.config.width/2 - 157.5, game.config.height/2 - 157.5,'card').setInteractive();
        this.card4 = this.add.sprite(game.config.width/2 + 157.5, game.config.height/2 - 157.5,'card').setInteractive();
        this.card5 = this.add.sprite(game.config.width/2 - 52.5, game.config.height/2 - 52.5,'card').setInteractive();
        this.card6 = this.add.sprite(game.config.width/2 + 52.5, game.config.height/2 - 52.5,'card').setInteractive();
        this.card7 = this.add.sprite(game.config.width/2 - 157.5, game.config.height/2 - 52.5,'card').setInteractive();
        this.card8 = this.add.sprite(game.config.width/2 + 157.5, game.config.height/2 - 52.5,'card').setInteractive();
        this.card9 = this.add.sprite(game.config.width/2 - 52.5, game.config.height/2 + 52.5,'card').setInteractive();
        this.card10 = this.add.sprite(game.config.width/2 + 52.5, game.config.height/2 + 52.5,'card').setInteractive();
        this.card11 = this.add.sprite(game.config.width/2 - 157.5, game.config.height/2 + 52.5,'card').setInteractive();
        this.card12 = this.add.sprite(game.config.width/2 + 157.5, game.config.height/2 + 52.5,'card').setInteractive();
        this.card13 = this.add.sprite(game.config.width/2 - 52.5, game.config.height/2 + 157.5,'card').setInteractive();
        this.card14 = this.add.sprite(game.config.width/2 + 52.5, game.config.height/2 + 157.5,'card').setInteractive();
        this.card15 = this.add.sprite(game.config.width/2 - 157.5, game.config.height/2 + 157.5,'card').setInteractive();
        this.card16 = this.add.sprite(game.config.width/2 + 157.5, game.config.height/2 + 157.5,'card').setInteractive();*/
        
        this.card01 = new Card(this, game.config.width/2 - 105, game.config.height/2 - 157.5,'mouse', 0, 1, 1).setOrigin(0,0);
        this.card02 = new Card(this, game.config.width/2, game.config.height/2 - 157.5,'rabbit', 0, 2, 1).setOrigin(0,0);
        this.card03 = new Card(this, game.config.width/2 - 210, game.config.height/2 - 157.5,'horse', 0, 3, 1).setOrigin(0,0);
        this.card04 = new Card(this, game.config.width/2 + 105, game.config.height/2 - 157.5,'mouse', 0, 1, 1).setOrigin(0,0);
        this.card05 = new Card(this, game.config.width/2 - 105, game.config.height/2 - 52.5,'bird', 0, 4, 1).setOrigin(0,0);
        this.card06 = new Card(this, game.config.width/2, game.config.height/2 - 52.5,'rabbit', 0, 2, 1).setOrigin(0,0);
        this.card07 = new Card(this, game.config.width/2 - 210, game.config.height/2 - 52.5,'mouse', 0, 1, 1).setOrigin(0,0);
        this.card08 = new Card(this, game.config.width/2 + 105, game.config.height/2 - 52.5,'horse', 0, 3, 1).setOrigin(0,0);
        this.card09 = new Card(this, game.config.width/2 - 105, game.config.height/2 + 52.5,'rabbit', 0, 2, 1).setOrigin(0,0);
        this.card010 = new Card(this, game.config.width/2, game.config.height/2 + 52.5,'bird', 0, 4, 1).setOrigin(0,0);
        this.card011 = new Card(this, game.config.width/2 - 210, game.config.height/2 + 52.5,'bird', 0, 4, 1).setOrigin(0,0);
        this.card012 = new Card(this, game.config.width/2 + 105, game.config.height/2 + 52.5,'mouse', 0, 1, 1).setOrigin(0,0);
        this.card013 = new Card(this, game.config.width/2 - 105, game.config.height/2 + 157.5,'horse', 0, 3, 1).setOrigin(0,0);
        this.card014 = new Card(this, game.config.width/2, game.config.height/2 + 157.5,'rabbit', 0, 2, 1).setOrigin(0,0);
        this.card015 = new Card(this, game.config.width/2 - 210, game.config.height/2 + 157.5,'bird', 0, 4, 1).setOrigin(0,0);
        this.card016 = new Card(this, game.config.width/2 + 105, game.config.height/2 + 157.5,'horse', 0, 3, 1).setOrigin(0,0);
        this.card1 = new Card(this, game.config.width/2 - 105, game.config.height/2 - 157.5,'card', 0, 1, 1).setOrigin(0,0);
        this.card2 = new Card(this, game.config.width/2, game.config.height/2 - 157.5,'card', 0, 2, 1).setOrigin(0,0);
        this.card3 = new Card(this, game.config.width/2 - 210, game.config.height/2 - 157.5,'card', 0, 3, 1).setOrigin(0,0);
        this.card4 = new Card(this, game.config.width/2 + 105, game.config.height/2 - 157.5,'card', 0, 4, 1).setOrigin(0,0);
        this.card5 = new Card(this, game.config.width/2 - 105, game.config.height/2 - 52.5,'card', 0, 5, 1).setOrigin(0,0);
        this.card6 = new Card(this, game.config.width/2, game.config.height/2 - 52.5,'card', 0, 6, 1).setOrigin(0,0);
        this.card7 = new Card(this, game.config.width/2 - 210, game.config.height/2 - 52.5,'card', 0, 7, 1).setOrigin(0,0);
        this.card8 = new Card(this, game.config.width/2 + 105, game.config.height/2 - 52.5,'card', 0, 8, 1).setOrigin(0,0);
        this.card9 = new Card(this, game.config.width/2 - 105, game.config.height/2 + 52.5,'card', 0, 9, 1).setOrigin(0,0);
        this.card10 = new Card(this, game.config.width/2, game.config.height/2 + 52.5,'card', 0, 10, 1).setOrigin(0,0);
        this.card11 = new Card(this, game.config.width/2 - 210, game.config.height/2 + 52.5,'card', 0, 11, 1).setOrigin(0,0);
        this.card12 = new Card(this, game.config.width/2 + 105, game.config.height/2 + 52.5,'card', 0, 12, 1).setOrigin(0,0);
        this.card13 = new Card(this, game.config.width/2 - 105, game.config.height/2 + 157.5,'card', 0, 13, 1).setOrigin(0,0);
        this.card14 = new Card(this, game.config.width/2, game.config.height/2 + 157.5,'card', 0, 14, 1).setOrigin(0,0);
        this.card15 = new Card(this, game.config.width/2 - 210, game.config.height/2 + 157.5,'card', 0, 15, 1).setOrigin(0,0);
        this.card16 = new Card(this, game.config.width/2 + 105, game.config.height/2 + 157.5,'card', 0, 16, 1).setOrigin(0,0);
        this.magic = this.add.sprite(game.config.width/2, game.config.height/2,'magic');
        //click.inputEnabled = true;
        //click.events.onInputDown.add(clicking,this);
        //this.click.on('pointerdown', function() {
            //this.score += 20;
        //});
        this.input.on('gameobjectdown',this.onObjectClicked);
        //this.score+=20;
        //this.scoreLeft.text = this.score;
    
        // this.timeText = this.add.text(200, 200, '', { fontSize: '20px', fill: '#ffffff' });
        // this.timeText.fixedToCamera = true;


        this.startTime = new Date();
        this.totalTime = 40;
        this.timeElap = 0;
        this.createTimer();
        this.showGameTimer = this.time.addEvent({ delay: 10, callback: this.updateTimer(), callbackScope: this, loop: true });
        this.gameOver = false;
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart', scoreConfig).setOrigin(0.5);

            this.gameOver = true;
        }, null, this);
    }

    /*clicking(){
        this.score += 20;
    }*/
    onObjectClicked(pointer,gameObject) {
        this.limit+=1;
    }
  
    
    update() {
        if(Phaser.Input.Keyboard.JustDown(keyR)) {
            this.music.stop();
            this.scene.start("menuScene");
        }
        this.magic.x = game.input.mousePointer.x;
        this.magic.y = game.input.mousePointer.y;
        //if (this.pointer.isDown) {
            //this.score += 20;
        //}
        // if(!this.gameOver){
        //     this.displayTimeRemaining();
        // }
        if(!this.gameOver){
            this.updateTimer();
        }
        if(!this.gameOver) {
            
            if(game.input.mousePointer.buttons == 1) {
                if(this.checkCollision(this.magic, this.card1)) {
                    this.card1.update();
                }
                if(this.checkCollision(this.magic, this.card2)) {
                    this.card2.update();
                }
                if(this.checkCollision(this.magic, this.card3)) {
                    this.card3.update();
                }
                if(this.checkCollision(this.magic, this.card4)) {
                    this.card4.update();
                }
                if(this.checkCollision(this.magic, this.card5)) {
                    this.card5.update();
                }
                if(this.checkCollision(this.magic, this.card6)) {
                    this.card6.update();
                }
                if(this.checkCollision(this.magic, this.card7)) {
                    this.card7.update();
                }
                if(this.checkCollision(this.magic, this.card8)) {
                    this.card8.update();
                }
                if(this.checkCollision(this.magic, this.card9)) {
                    this.card9.update();
                }
                if(this.checkCollision(this.magic, this.card10)) {
                    this.card10.update();
                }
                if(this.checkCollision(this.magic, this.card11)) {
                    this.card11.update();
                }
                if(this.checkCollision(this.magic, this.card12)) {
                    this.card12.update();
                }
                if(this.checkCollision(this.magic, this.card13)) {
                    this.card13.update();
                }
                if(this.checkCollision(this.magic, this.card14)) {
                    this.card14.update();
                }
                if(this.checkCollision(this.magic, this.card15)) {
                    this.card15.update();
                }
                if(this.checkCollision(this.magic, this.card16)) {
                    this.card16.update();
                }
            }
           
            // card1

            if(this.card1.appear == 0) {
                if(this.card2.appear == 0) {
                    if (this.card01.texture.key == this.card02.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card02.destroy();
                            this.card01.destroy();
                            this.card2.destroy();
                            this.card1.destroy();
                            this.card1.appear = 2;
                            this.card2.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card1.reset();
                            this.card2.reset();
                        }, null, this);
                    }
                }
                if(this.card3.appear == 0) {
                    if (this.card01.texture.key == this.card03.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card03.destroy();
                            this.card01.destroy();
                            this.card3.destroy();
                            this.card1.destroy();
                            this.card1.appear = 2;
                            this.card3.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card1.reset();
                            this.card3.reset();
                        }, null, this);
                    }
                }
                if(this.card4.appear == 0) {
                    if (this.card01.texture.key == this.card04.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card04.destroy();
                            this.card01.destroy();
                            this.card4.destroy();
                            this.card1.destroy();
                            this.card1.appear = 2;
                            this.card4.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card1.reset();
                            this.card4.reset();
                        }, null, this);
                    }
                }
                if(this.card5.appear == 0) {
                    if (this.card01.texture.key == this.card05.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card05.destroy();
                            this.card01.destroy();
                            this.card5.destroy();
                            this.card1.destroy();
                            this.card1.appear = 2;
                            this.card5.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card1.reset();
                            this.card5.reset();
                        }, null, this);
                    }
                }
                if(this.card6.appear == 0) {
                    if (this.card01.texture.key == this.card06.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card06.destroy();
                            this.card01.destroy();
                            this.card6.destroy();
                            this.card1.destroy();
                            this.card1.appear = 2;
                            this.card6.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card1.reset();
                            this.card6.reset();
                        }, null, this);
                    }
                }
                if(this.card7.appear == 0) {
                    if (this.card01.texture.key == this.card07.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card07.destroy();
                            this.card01.destroy();
                            this.card7.destroy();
                            this.card1.destroy();
                            this.card1.appear = 2;
                            this.card7.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card1.reset();
                            this.card7.reset();
                        }, null, this);
                    }
                }
                if(this.card8.appear == 0) {
                    if (this.card01.texture.key == this.card08.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card08.destroy();
                            this.card01.destroy();
                            this.card8.destroy();
                            this.card1.destroy();
                            this.card1.appear = 2;
                            this.card8.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card1.reset();
                            this.card8.reset();
                        }, null, this);
                    }
                }
                if(this.card9.appear == 0) {
                    if (this.card01.texture.key == this.card09.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card09.destroy();
                            this.card01.destroy();
                            this.card9.destroy();
                            this.card1.destroy();
                            this.card1.appear = 2;
                            this.card9.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card1.reset();
                            this.card9.reset();
                        }, null, this);
                    }
                }
                if(this.card10.appear == 0) {
                    if (this.card01.texture.key == this.card010.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card010.destroy();
                            this.card01.destroy();
                            this.card10.destroy();
                            this.card1.destroy();
                            this.card1.appear = 2;
                            this.card10.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card1.reset();
                            this.card10.reset();
                        }, null, this);
                    }
                }
                if(this.card11.appear == 0) {
                    if (this.card01.texture.key == this.card011.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card011.destroy();
                            this.card01.destroy();
                            this.card11.destroy();
                            this.card1.destroy();
                            this.card1.appear = 2;
                            this.card11.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card1.reset();
                            this.card11.reset();
                        }, null, this);
                    }
                }
                if(this.card12.appear == 0) {
                    if (this.card01.texture.key == this.card012.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card012.destroy();
                            this.card01.destroy();
                            this.card12.destroy();
                            this.card1.destroy();
                            this.card1.appear = 2;
                            this.card12.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card1.reset();
                            this.card12.reset();
                        }, null, this);
                    }
                }
                if(this.card13.appear == 0) {
                    if (this.card01.texture.key == this.card013.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card013.destroy();
                            this.card01.destroy();
                            this.card13.destroy();
                            this.card1.destroy();
                            this.card1.appear = 2;
                            this.card13.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card1.reset();
                            this.card13.reset();
                        }, null, this);
                    }
                }
                if(this.card14.appear == 0) {
                    if (this.card01.texture.key == this.card014.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card014.destroy();
                            this.card01.destroy();
                            this.card14.destroy();
                            this.card1.destroy();
                            this.card1.appear = 2;
                            this.card14.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card1.reset();
                            this.card14.reset();
                        }, null, this);
                    }
                }
                if(this.card15.appear == 0) {
                    if (this.card01.texture.key == this.card015.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card015.destroy();
                            this.card01.destroy();
                            this.card15.destroy();
                            this.card1.destroy();
                            this.card1.appear = 2;
                            this.card15.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card1.reset();
                            this.card15.reset();
                        }, null, this);
                    }
                }
                if(this.card16.appear == 0) {
                    if (this.card01.texture.key == this.card016.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card016.destroy();
                            this.card01.destroy();
                            this.card16.destroy();
                            this.card1.destroy();
                            this.card1.appear = 2;
                            this.card16.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card1.reset();
                            this.card16.reset();
                        }, null, this);
                    }
                }
            }

            // card2

            if(this.card2.appear == 0) {
                if(this.card3.appear == 0) {
                    if (this.card02.texture.key == this.card03.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card03.destroy();
                            this.card02.destroy();
                            this.card3.destroy();
                            this.card2.destroy();
                            this.card2.appear = 2;
                            this.card3.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card2.reset();
                            this.card3.reset();
                        }, null, this);
                    }
                }
                if(this.card4.appear == 0) {
                    if (this.card02.texture.key == this.card04.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card04.destroy();
                            this.card02.destroy();
                            this.card4.destroy();
                            this.card2.destroy();
                            this.card2.appear = 2;
                            this.card4.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card2.reset();
                            this.card4.reset();
                        }, null, this);
                    }
                }
                if(this.card5.appear == 0) {
                    if (this.card02.texture.key == this.card05.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card05.destroy();
                            this.card02.destroy();
                            this.card5.destroy();
                            this.card2.destroy();
                            this.card2.appear = 2;
                            this.card5.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card2.reset();
                            this.card5.reset();
                        }, null, this);
                    }
                }
                if(this.card6.appear == 0) {
                    if (this.card02.texture.key == this.card06.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card06.destroy();
                            this.card02.destroy();
                            this.card6.destroy();
                            this.card2.destroy();
                            this.card2.appear = 2;
                            this.card6.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card2.reset();
                            this.card6.reset();
                        }, null, this);
                    }
                }
                if(this.card7.appear == 0) {
                    if (this.card02.texture.key == this.card07.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card07.destroy();
                            this.card02.destroy();
                            this.card7.destroy();
                            this.card2.destroy();
                            this.card2.appear = 2;
                            this.card7.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card2.reset();
                            this.card7.reset();
                        }, null, this);
                    }
                }
                if(this.card8.appear == 0) {
                    if (this.card02.texture.key == this.card08.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card08.destroy();
                            this.card02.destroy();
                            this.card8.destroy();
                            this.card2.destroy();
                            this.card2.appear = 2;
                            this.card8.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card2.reset();
                            this.card8.reset();
                        }, null, this);
                    }
                }
                if(this.card9.appear == 0) {
                    if (this.card02.texture.key == this.card09.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card09.destroy();
                            this.card02.destroy();
                            this.card9.destroy();
                            this.card2.destroy();
                            this.card2.appear = 2;
                            this.card9.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card2.reset();
                            this.card9.reset();
                        }, null, this);
                    }
                }
                if(this.card10.appear == 0) {
                    if (this.card02.texture.key == this.card010.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card010.destroy();
                            this.card02.destroy();
                            this.card10.destroy();
                            this.card2.destroy();
                            this.card2.appear = 2;
                            this.card10.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card2.reset();
                            this.card10.reset();
                        }, null, this);
                    }
                }
                if(this.card11.appear == 0) {
                    if (this.card02.texture.key == this.card011.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card011.destroy();
                            this.card02.destroy();
                            this.card11.destroy();
                            this.card2.destroy();
                            this.card2.appear = 2;
                            this.card11.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card2.reset();
                            this.card11.reset();
                        }, null, this);
                    }
                }
                if(this.card12.appear == 0) {
                    if (this.card02.texture.key == this.card012.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card012.destroy();
                            this.card02.destroy();
                            this.card12.destroy();
                            this.card2.destroy();
                            this.card2.appear = 2;
                            this.card12.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card2.reset();
                            this.card12.reset();
                        }, null, this);
                    }
                }
                if(this.card13.appear == 0) {
                    if (this.card02.texture.key == this.card013.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card013.destroy();
                            this.card02.destroy();
                            this.card13.destroy();
                            this.card2.destroy();
                            this.card2.appear = 2;
                            this.card13.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card2.reset();
                            this.card13.reset();
                        }, null, this);
                    }
                }
                if(this.card14.appear == 0) {
                    if (this.card02.texture.key == this.card014.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card014.destroy();
                            this.card02.destroy();
                            this.card14.destroy();
                            this.card2.destroy();
                            this.card2.appear = 2;
                            this.card14.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card2.reset();
                            this.card14.reset();
                        }, null, this);
                    }
                }
                if(this.card15.appear == 0) {
                    if (this.card02.texture.key == this.card015.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card015.destroy();
                            this.card02.destroy();
                            this.card15.destroy();
                            this.card2.destroy();
                            this.card2.appear = 2;
                            this.card15.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card2.reset();
                            this.card15.reset();
                        }, null, this);
                    }
                }
                if(this.card16.appear == 0) {
                    if (this.card02.texture.key == this.card016.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card016.destroy();
                            this.card02.destroy();
                            this.card16.destroy();
                            this.card2.destroy();
                            this.card2.appear = 2;
                            this.card16.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card2.reset();
                            this.card16.reset();
                        }, null, this);
                    }
                }
            }
            
            // card3

            if(this.card3.appear == 0) {
                if(this.card4.appear == 0) {
                    if (this.card03.texture.key == this.card04.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card04.destroy();
                            this.card03.destroy();
                            this.card4.destroy();
                            this.card3.destroy();
                            this.card3.appear = 2;
                            this.card4.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card3.reset();
                            this.card4.reset();
                        }, null, this);
                    }
                }
                if(this.card5.appear == 0) {
                    if (this.card03.texture.key == this.card05.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card05.destroy();
                            this.card03.destroy();
                            this.card5.destroy();
                            this.card3.destroy();
                            this.card3.appear = 2;
                            this.card5.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card3.reset();
                            this.card5.reset();
                        }, null, this);
                    }
                }
                if(this.card6.appear == 0) {
                    if (this.card03.texture.key == this.card06.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card06.destroy();
                            this.card03.destroy();
                            this.card6.destroy();
                            this.card3.destroy();
                            this.card3.appear = 2;
                            this.card6.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card3.reset();
                            this.card6.reset();
                        }, null, this);
                    }
                }
                if(this.card7.appear == 0) {
                    if (this.card03.texture.key == this.card07.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card07.destroy();
                            this.card03.destroy();
                            this.card7.destroy();
                            this.card3.destroy();
                            this.card3.appear = 2;
                            this.card7.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card3.reset();
                            this.card7.reset();
                        }, null, this);
                    }
                }
                if(this.card8.appear == 0) {
                    if (this.card03.texture.key == this.card08.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card08.destroy();
                            this.card03.destroy();
                            this.card8.destroy();
                            this.card3.destroy();
                            this.card3.appear = 2;
                            this.card8.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card3.reset();
                            this.card8.reset();
                        }, null, this);
                    }
                }
                if(this.card9.appear == 0) {
                    if (this.card03.texture.key == this.card09.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card09.destroy();
                            this.card03.destroy();
                            this.card9.destroy();
                            this.card3.destroy();
                            this.card3.appear = 2;
                            this.card9.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card3.reset();
                            this.card9.reset();
                        }, null, this);
                    }
                }
                if(this.card10.appear == 0) {
                    if (this.card03.texture.key == this.card010.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card010.destroy();
                            this.card03.destroy();
                            this.card10.destroy();
                            this.card3.destroy();
                            this.card3.appear = 2;
                            this.card10.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card3.reset();
                            this.card10.reset();
                        }, null, this);
                    }
                }
                if(this.card11.appear == 0) {
                    if (this.card03.texture.key == this.card011.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card011.destroy();
                            this.card03.destroy();
                            this.card11.destroy();
                            this.card3.destroy();
                            this.card3.appear = 2;
                            this.card11.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card3.reset();
                            this.card11.reset();
                        }, null, this);
                    }
                }
                if(this.card12.appear == 0) {
                    if (this.card03.texture.key == this.card012.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card012.destroy();
                            this.card03.destroy();
                            this.card12.destroy();
                            this.card3.destroy();
                            this.card3.appear = 2;
                            this.card12.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card3.reset();
                            this.card12.reset();
                        }, null, this);
                    }
                }
                if(this.card13.appear == 0) {
                    if (this.card03.texture.key == this.card013.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card013.destroy();
                            this.card03.destroy();
                            this.card13.destroy();
                            this.card3.destroy();
                            this.card3.appear = 2;
                            this.card13.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card3.reset();
                            this.card13.reset();
                        }, null, this);
                    }
                }
                if(this.card14.appear == 0) {
                    if (this.card03.texture.key == this.card014.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card014.destroy();
                            this.card03.destroy();
                            this.card14.destroy();
                            this.card3.destroy();
                            this.card3.appear = 2;
                            this.card14.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card3.reset();
                            this.card14.reset();
                        }, null, this);
                    }
                }
                if(this.card15.appear == 0) {
                    if (this.card03.texture.key == this.card015.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card015.destroy();
                            this.card03.destroy();
                            this.card15.destroy();
                            this.card3.destroy();
                            this.card3.appear = 2;
                            this.card15.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card3.reset();
                            this.card15.reset();
                        }, null, this);
                    }
                }
                if(this.card16.appear == 0) {
                    if (this.card03.texture.key == this.card016.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card016.destroy();
                            this.card03.destroy();
                            this.card16.destroy();
                            this.card3.destroy();
                            this.card3.appear = 2;
                            this.card16.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card3.reset();
                            this.card16.reset();
                        }, null, this);
                    }
                }
            }
            
            // card4

            if(this.card4.appear == 0) {
                if(this.card5.appear == 0) {
                    if (this.card04.texture.key == this.card05.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card05.destroy();
                            this.card04.destroy();
                            this.card5.destroy();
                            this.card4.destroy();
                            this.card4.appear = 2;
                            this.card5.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card4.reset();
                            this.card5.reset();
                        }, null, this);
                    }
                }
                if(this.card6.appear == 0) {
                    if (this.card04.texture.key == this.card06.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card06.destroy();
                            this.card04.destroy();
                            this.card6.destroy();
                            this.card4.destroy();
                            this.card4.appear = 2;
                            this.card6.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card4.reset();
                            this.card6.reset();
                        }, null, this);
                    }
                }
                if(this.card7.appear == 0) {
                    if (this.card04.texture.key == this.card07.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card07.destroy();
                            this.card04.destroy();
                            this.card7.destroy();
                            this.card4.destroy();
                            this.card4.appear = 2;
                            this.card7.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card4.reset();
                            this.card7.reset();
                        }, null, this);
                    }
                }
                if(this.card8.appear == 0) {
                    if (this.card04.texture.key == this.card08.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card08.destroy();
                            this.card04.destroy();
                            this.card8.destroy();
                            this.card4.destroy();
                            this.card4.appear = 2;
                            this.card8.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card4.reset();
                            this.card8.reset();
                        }, null, this);
                    }
                }
                if(this.card9.appear == 0) {
                    if (this.card04.texture.key == this.card09.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card09.destroy();
                            this.card04.destroy();
                            this.card9.destroy();
                            this.card4.destroy();
                            this.card4.appear = 2;
                            this.card9.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card4.reset();
                            this.card9.reset();
                        }, null, this);
                    }
                }
                if(this.card10.appear == 0) {
                    if (this.card04.texture.key == this.card010.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card010.destroy();
                            this.card04.destroy();
                            this.card10.destroy();
                            this.card4.destroy();
                            this.card4.appear = 2;
                            this.card10.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card4.reset();
                            this.card10.reset();
                        }, null, this);
                    }
                }
                if(this.card11.appear == 0) {
                    if (this.card04.texture.key == this.card011.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card011.destroy();
                            this.card04.destroy();
                            this.card11.destroy();
                            this.card4.destroy();
                            this.card4.appear = 2;
                            this.card11.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card4.reset();
                            this.card11.reset();
                        }, null, this);
                    }
                }
                if(this.card12.appear == 0) {
                    if (this.card04.texture.key == this.card012.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card012.destroy();
                            this.card04.destroy();
                            this.card12.destroy();
                            this.card4.destroy();
                            this.card4.appear = 2;
                            this.card12.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card4.reset();
                            this.card12.reset();
                        }, null, this);
                    }
                }
                if(this.card13.appear == 0) {
                    if (this.card04.texture.key == this.card013.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card013.destroy();
                            this.card04.destroy();
                            this.card13.destroy();
                            this.card4.destroy();
                            this.card4.appear = 2;
                            this.card13.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card4.reset();
                            this.card13.reset();
                        }, null, this);
                    }
                }
                if(this.card14.appear == 0) {
                    if (this.card04.texture.key == this.card014.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card014.destroy();
                            this.card04.destroy();
                            this.card14.destroy();
                            this.card4.destroy();
                            this.card4.appear = 2;
                            this.card14.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card4.reset();
                            this.card14.reset();
                        }, null, this);
                    }
                }
                if(this.card15.appear == 0) {
                    if (this.card04.texture.key == this.card015.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card015.destroy();
                            this.card04.destroy();
                            this.card15.destroy();
                            this.card4.destroy();
                            this.card4.appear = 2;
                            this.card15.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card4.reset();
                            this.card15.reset();
                        }, null, this);
                    }
                }
                if(this.card16.appear == 0) {
                    if (this.card04.texture.key == this.card016.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card016.destroy();
                            this.card04.destroy();
                            this.card16.destroy();
                            this.card4.destroy();
                            this.card4.appear = 2;
                            this.card16.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card4.reset();
                            this.card16.reset();
                        }, null, this);
                    }
                }
            }
            
            // card5

            if(this.card5.appear == 0) {
                if(this.card6.appear == 0) {
                    if (this.card05.texture.key == this.card06.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card06.destroy();
                            this.card05.destroy();
                            this.card6.destroy();
                            this.card5.destroy();
                            this.card5.appear = 2;
                            this.card6.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card5.reset();
                            this.card6.reset();
                        }, null, this);
                    }
                }
                if(this.card7.appear == 0) {
                    if (this.card05.texture.key == this.card07.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card07.destroy();
                            this.card05.destroy();
                            this.card7.destroy();
                            this.card5.destroy();
                            this.card5.appear = 2;
                            this.card7.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card5.reset();
                            this.card7.reset();
                        }, null, this);
                    }
                }
                if(this.card8.appear == 0) {
                    if (this.card05.texture.key == this.card08.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card08.destroy();
                            this.card05.destroy();
                            this.card8.destroy();
                            this.card5.destroy();
                            this.card5.appear = 2;
                            this.card8.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card5.reset();
                            this.card8.reset();
                        }, null, this);
                    }
                }
                if(this.card9.appear == 0) {
                    if (this.card05.texture.key == this.card09.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card09.destroy();
                            this.card05.destroy();
                            this.card9.destroy();
                            this.card5.destroy();
                            this.card5.appear = 2;
                            this.card9.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card5.reset();
                            this.card9.reset();
                        }, null, this);
                    }
                }
                if(this.card10.appear == 0) {
                    if (this.card05.texture.key == this.card010.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card010.destroy();
                            this.card05.destroy();
                            this.card10.destroy();
                            this.card5.destroy();
                            this.card5.appear = 2;
                            this.card10.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card5.reset();
                            this.card10.reset();
                        }, null, this);
                    }
                }
                if(this.card11.appear == 0) {
                    if (this.card05.texture.key == this.card011.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card011.destroy();
                            this.card05.destroy();
                            this.card11.destroy();
                            this.card5.destroy();
                            this.card5.appear = 2;
                            this.card11.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card5.reset();
                            this.card11.reset();
                        }, null, this);
                    }
                }
                if(this.card12.appear == 0) {
                    if (this.card05.texture.key == this.card012.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card012.destroy();
                            this.card05.destroy();
                            this.card12.destroy();
                            this.card5.destroy();
                            this.card5.appear = 2;
                            this.card12.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card5.reset();
                            this.card12.reset();
                        }, null, this);
                    }
                }
                if(this.card13.appear == 0) {
                    if (this.card05.texture.key == this.card013.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card013.destroy();
                            this.card05.destroy();
                            this.card13.destroy();
                            this.card5.destroy();
                            this.card5.appear = 2;
                            this.card13.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card5.reset();
                            this.card13.reset();
                        }, null, this);
                    }
                }
                if(this.card14.appear == 0) {
                    if (this.card05.texture.key == this.card014.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card014.destroy();
                            this.card05.destroy();
                            this.card14.destroy();
                            this.card5.destroy();
                            this.card5.appear = 2;
                            this.card14.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card5.reset();
                            this.card14.reset();
                        }, null, this);
                    }
                }
                if(this.card15.appear == 0) {
                    if (this.card05.texture.key == this.card015.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card015.destroy();
                            this.card05.destroy();
                            this.card15.destroy();
                            this.card5.destroy();
                            this.card5.appear = 2;
                            this.card15.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card5.reset();
                            this.card15.reset();
                        }, null, this);
                    }
                }
                if(this.card16.appear == 0) {
                    if (this.card05.texture.key == this.card016.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card016.destroy();
                            this.card05.destroy();
                            this.card16.destroy();
                            this.card5.destroy();
                            this.card5.appear = 2;
                            this.card16.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card5.reset();
                            this.card16.reset();
                        }, null, this);
                    }
                }
            }
            
            // card6

            if(this.card6.appear == 0) {
                if(this.card7.appear == 0) {
                    if (this.card06.texture.key == this.card07.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card07.destroy();
                            this.card06.destroy();
                            this.card7.destroy();
                            this.card6.destroy();
                            this.card6.appear = 2;
                            this.card7.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card6.reset();
                            this.card7.reset();
                        }, null, this);
                    }
                }
                if(this.card8.appear == 0) {
                    if (this.card06.texture.key == this.card08.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card08.destroy();
                            this.card06.destroy();
                            this.card8.destroy();
                            this.card6.destroy();
                            this.card6.appear = 2;
                            this.card8.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card6.reset();
                            this.card8.reset();
                        }, null, this);
                    }
                }
                if(this.card9.appear == 0) {
                    if (this.card06.texture.key == this.card09.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card09.destroy();
                            this.card06.destroy();
                            this.card9.destroy();
                            this.card6.destroy();
                            this.card6.appear = 2;
                            this.card9.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card6.reset();
                            this.card9.reset();
                        }, null, this);
                    }
                }
                if(this.card10.appear == 0) {
                    if (this.card06.texture.key == this.card010.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card010.destroy();
                            this.card06.destroy();
                            this.card10.destroy();
                            this.card6.destroy();
                            this.card6.appear = 2;
                            this.card10.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card6.reset();
                            this.card10.reset();
                        }, null, this);
                    }
                }
                if(this.card11.appear == 0) {
                    if (this.card06.texture.key == this.card011.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card011.destroy();
                            this.card06.destroy();
                            this.card11.destroy();
                            this.card6.destroy();
                            this.card6.appear = 2;
                            this.card11.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card6.reset();
                            this.card11.reset();
                        }, null, this);
                    }
                }
                if(this.card12.appear == 0) {
                    if (this.card06.texture.key == this.card012.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card012.destroy();
                            this.card06.destroy();
                            this.card12.destroy();
                            this.card6.destroy();
                            this.card6.appear = 2;
                            this.card12.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card6.reset();
                            this.card12.reset();
                        }, null, this);
                    }
                }
                if(this.card13.appear == 0) {
                    if (this.card06.texture.key == this.card013.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card013.destroy();
                            this.card06.destroy();
                            this.card13.destroy();
                            this.card6.destroy();
                            this.card6.appear = 2;
                            this.card13.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card6.reset();
                            this.card13.reset();
                        }, null, this);
                    }
                }
                if(this.card14.appear == 0) {
                    if (this.card06.texture.key == this.card014.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card014.destroy();
                            this.card06.destroy();
                            this.card14.destroy();
                            this.card6.destroy();
                            this.card6.appear = 2;
                            this.card14.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card6.reset();
                            this.card14.reset();
                        }, null, this);
                    }
                }
                if(this.card15.appear == 0) {
                    if (this.card06.texture.key == this.card015.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card015.destroy();
                            this.card06.destroy();
                            this.card15.destroy();
                            this.card6.destroy();
                            this.card6.appear = 2;
                            this.card15.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card6.reset();
                            this.card15.reset();
                        }, null, this);
                    }
                }
                if(this.card16.appear == 0) {
                    if (this.card06.texture.key == this.card016.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card016.destroy();
                            this.card06.destroy();
                            this.card16.destroy();
                            this.card6.destroy();
                            this.card6.appear = 2;
                            this.card16.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card6.reset();
                            this.card16.reset();
                        }, null, this);
                    }
                }
            }
            
            // card7

            if(this.card7.appear == 0) {
                if(this.card8.appear == 0) {
                    if (this.card07.texture.key == this.card08.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card08.destroy();
                            this.card07.destroy();
                            this.card8.destroy();
                            this.card7.destroy();
                            this.card7.appear = 2;
                            this.card8.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card7.reset();
                            this.card8.reset();
                        }, null, this);
                    }
                }
                if(this.card9.appear == 0) {
                    if (this.card07.texture.key == this.card09.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card09.destroy();
                            this.card07.destroy();
                            this.card9.destroy();
                            this.card7.destroy();
                            this.card7.appear = 2;
                            this.card9.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card7.reset();
                            this.card9.reset();
                        }, null, this);
                    }
                }
                if(this.card10.appear == 0) {
                    if (this.card07.texture.key == this.card010.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card010.destroy();
                            this.card07.destroy();
                            this.card10.destroy();
                            this.card7.destroy();
                            this.card7.appear = 2;
                            this.card10.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card7.reset();
                            this.card10.reset();
                        }, null, this);
                    }
                }
                if(this.card11.appear == 0) {
                    if (this.card07.texture.key == this.card011.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card011.destroy();
                            this.card07.destroy();
                            this.card11.destroy();
                            this.card7.destroy();
                            this.card7.appear = 2;
                            this.card11.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card7.reset();
                            this.card11.reset();
                        }, null, this);
                    }
                }
                if(this.card12.appear == 0) {
                    if (this.card07.texture.key == this.card012.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card012.destroy();
                            this.card07.destroy();
                            this.card12.destroy();
                            this.card7.destroy();
                            this.card7.appear = 2;
                            this.card12.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card7.reset();
                            this.card12.reset();
                        }, null, this);
                    }
                }
                if(this.card13.appear == 0) {
                    if (this.card07.texture.key == this.card013.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card013.destroy();
                            this.card07.destroy();
                            this.card13.destroy();
                            this.card7.destroy();
                            this.card7.appear = 2;
                            this.card13.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card7.reset();
                            this.card13.reset();
                        }, null, this);
                    }
                }
                if(this.card14.appear == 0) {
                    if (this.card07.texture.key == this.card014.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card014.destroy();
                            this.card07.destroy();
                            this.card14.destroy();
                            this.card7.destroy();
                            this.card7.appear = 2;
                            this.card14.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card7.reset();
                            this.card14.reset();
                        }, null, this);
                    }
                }
                if(this.card15.appear == 0) {
                    if (this.card07.texture.key == this.card015.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card015.destroy();
                            this.card07.destroy();
                            this.card15.destroy();
                            this.card7.destroy();
                            this.card7.appear = 2;
                            this.card15.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card7.reset();
                            this.card15.reset();
                        }, null, this);
                    }
                }
                if(this.card16.appear == 0) {
                    if (this.card07.texture.key == this.card016.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card016.destroy();
                            this.card07.destroy();
                            this.card16.destroy();
                            this.card7.destroy();
                            this.card7.appear = 2;
                            this.card16.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card7.reset();
                            this.card16.reset();
                        }, null, this);
                    }
                }
            }
            
            // card8

            if(this.card8.appear == 0) {
                if(this.card9.appear == 0) {
                    if (this.card08.texture.key == this.card09.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card09.destroy();
                            this.card08.destroy();
                            this.card9.destroy();
                            this.card8.destroy();
                            this.card8.appear = 2;
                            this.card9.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card8.reset();
                            this.card9.reset();
                        }, null, this);
                    }
                }
                if(this.card10.appear == 0) {
                    if (this.card08.texture.key == this.card010.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card010.destroy();
                            this.card08.destroy();
                            this.card10.destroy();
                            this.card8.destroy();
                            this.card8.appear = 2;
                            this.card10.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card8.reset();
                            this.card10.reset();
                        }, null, this);
                    }
                }
                if(this.card11.appear == 0) {
                    if (this.card08.texture.key == this.card011.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card011.destroy();
                            this.card08.destroy();
                            this.card11.destroy();
                            this.card8.destroy();
                            this.card8.appear = 2;
                            this.card11.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card8.reset();
                            this.card11.reset();
                        }, null, this);
                    }
                }
                if(this.card12.appear == 0) {
                    if (this.card08.texture.key == this.card012.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card012.destroy();
                            this.card08.destroy();
                            this.card12.destroy();
                            this.card8.destroy();
                            this.card8.appear = 2;
                            this.card12.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card8.reset();
                            this.card12.reset();
                        }, null, this);
                    }
                }
                if(this.card13.appear == 0) {
                    if (this.card08.texture.key == this.card013.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card013.destroy();
                            this.card08.destroy();
                            this.card13.destroy();
                            this.card8.destroy();
                            this.card8.appear = 2;
                            this.card13.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card8.reset();
                            this.card13.reset();
                        }, null, this);
                    }
                }
                if(this.card14.appear == 0) {
                    if (this.card08.texture.key == this.card014.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card014.destroy();
                            this.card08.destroy();
                            this.card14.destroy();
                            this.card8.destroy();
                            this.card8.appear = 2;
                            this.card14.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card8.reset();
                            this.card14.reset();
                        }, null, this);
                    }
                }
                if(this.card15.appear == 0) {
                    if (this.card08.texture.key == this.card015.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card015.destroy();
                            this.card08.destroy();
                            this.card15.destroy();
                            this.card8.destroy();
                            this.card8.appear = 2;
                            this.card15.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card8.reset();
                            this.card15.reset();
                        }, null, this);
                    }
                }
                if(this.card16.appear == 0) {
                    if (this.card08.texture.key == this.card016.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card016.destroy();
                            this.card08.destroy();
                            this.card16.destroy();
                            this.card8.destroy();
                            this.card8.appear = 2;
                            this.card16.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card8.reset();
                            this.card16.reset();
                        }, null, this);
                    }
                }
            }
            
            // card9

            if(this.card9.appear == 0) {
                if(this.card10.appear == 0) {
                    if (this.card09.texture.key == this.card010.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card010.destroy();
                            this.card09.destroy();
                            this.card10.destroy();
                            this.card9.destroy();
                            this.card9.appear = 2;
                            this.card10.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card9.reset();
                            this.card10.reset();
                        }, null, this);
                    }
                }
                if(this.card11.appear == 0) {
                    if (this.card09.texture.key == this.card011.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card011.destroy();
                            this.card09.destroy();
                            this.card11.destroy();
                            this.card9.destroy();
                            this.card9.appear = 2;
                            this.card11.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card9.reset();
                            this.card11.reset();
                        }, null, this);
                    }
                }
                if(this.card12.appear == 0) {
                    if (this.card09.texture.key == this.card012.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card012.destroy();
                            this.card09.destroy();
                            this.card12.destroy();
                            this.card9.destroy();
                            this.card9.appear = 2;
                            this.card12.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card9.reset();
                            this.card12.reset();
                        }, null, this);
                    }
                }
                if(this.card13.appear == 0) {
                    if (this.card09.texture.key == this.card013.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card013.destroy();
                            this.card09.destroy();
                            this.card13.destroy();
                            this.card9.destroy();
                            this.card9.appear = 2;
                            this.card13.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card9.reset();
                            this.card13.reset();
                        }, null, this);
                    }
                }
                if(this.card14.appear == 0) {
                    if (this.card09.texture.key == this.card014.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card014.destroy();
                            this.card09.destroy();
                            this.card14.destroy();
                            this.card9.destroy();
                            this.card9.appear = 2;
                            this.card14.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card9.reset();
                            this.card14.reset();
                        }, null, this);
                    }
                }
                if(this.card15.appear == 0) {
                    if (this.card09.texture.key == this.card015.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card015.destroy();
                            this.card09.destroy();
                            this.card15.destroy();
                            this.card9.destroy();
                            this.card9.appear = 2;
                            this.card15.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card9.reset();
                            this.card15.reset();
                        }, null, this);
                    }
                }
                if(this.card16.appear == 0) {
                    if (this.card09.texture.key == this.card016.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card016.destroy();
                            this.card09.destroy();
                            this.card16.destroy();
                            this.card9.destroy();
                            this.card9.appear = 2;
                            this.card16.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card9.reset();
                            this.card16.reset();
                        }, null, this);
                    }
                }
            }
            
            // card10

            if(this.card10.appear == 0) {
                if(this.card11.appear == 0) {
                    if (this.card010.texture.key == this.card011.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card011.destroy();
                            this.card010.destroy();
                            this.card11.destroy();
                            this.card10.destroy();
                            this.card10.appear = 2;
                            this.card11.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card10.reset();
                            this.card11.reset();
                        }, null, this);
                    }
                }
                if(this.card12.appear == 0) {
                    if (this.card010.texture.key == this.card012.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card012.destroy();
                            this.card010.destroy();
                            this.card12.destroy();
                            this.card10.destroy();
                            this.card10.appear = 2;
                            this.card12.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card10.reset();
                            this.card12.reset();
                        }, null, this);
                    }
                }
                if(this.card13.appear == 0) {
                    if (this.card010.texture.key == this.card013.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card013.destroy();
                            this.card010.destroy();
                            this.card13.destroy();
                            this.card10.destroy();
                            this.card10.appear = 2;
                            this.card13.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card10.reset();
                            this.card13.reset();
                        }, null, this);
                    }
                }
                if(this.card14.appear == 0) {
                    if (this.card010.texture.key == this.card014.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card014.destroy();
                            this.card010.destroy();
                            this.card14.destroy();
                            this.card10.destroy();
                            this.card10.appear = 2;
                            this.card14.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card10.reset();
                            this.card14.reset();
                        }, null, this);
                    }
                }
                if(this.card15.appear == 0) {
                    if (this.card010.texture.key == this.card015.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card015.destroy();
                            this.card010.destroy();
                            this.card15.destroy();
                            this.card10.destroy();
                            this.card10.appear = 2;
                            this.card15.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card10.reset();
                            this.card15.reset();
                        }, null, this);
                    }
                }
                if(this.card16.appear == 0) {
                    if (this.card010.texture.key == this.card016.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card016.destroy();
                            this.card010.destroy();
                            this.card16.destroy();
                            this.card10.destroy();
                            this.card10.appear = 2;
                            this.card16.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card10.reset();
                            this.card16.reset();
                        }, null, this);
                    }
                }
            }
            
            // card11

            if(this.card11.appear == 0) {
                if(this.card12.appear == 0) {
                    if (this.card011.texture.key == this.card012.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card012.destroy();
                            this.card011.destroy();
                            this.card12.destroy();
                            this.card11.destroy();
                            this.card11.appear = 2;
                            this.card12.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card11.reset();
                            this.card12.reset();
                        }, null, this);
                    }
                }
                if(this.card13.appear == 0) {
                    if (this.card011.texture.key == this.card013.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card013.destroy();
                            this.card011.destroy();
                            this.card13.destroy();
                            this.card11.destroy();
                            this.card11.appear = 2;
                            this.card13.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card11.reset();
                            this.card13.reset();
                        }, null, this);
                    }
                }
                if(this.card14.appear == 0) {
                    if (this.card011.texture.key == this.card014.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card014.destroy();
                            this.card011.destroy();
                            this.card14.destroy();
                            this.card11.destroy();
                            this.card11.appear = 2;
                            this.card14.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card11.reset();
                            this.card14.reset();
                        }, null, this);
                    }
                }
                if(this.card15.appear == 0) {
                    if (this.card011.texture.key == this.card015.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card015.destroy();
                            this.card011.destroy();
                            this.card15.destroy();
                            this.card11.destroy();
                            this.card11.appear = 2;
                            this.card15.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card11.reset();
                            this.card15.reset();
                        }, null, this);
                    }
                }
                if(this.card16.appear == 0) {
                    if (this.card011.texture.key == this.card016.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card016.destroy();
                            this.card011.destroy();
                            this.card16.destroy();
                            this.card11.destroy();
                            this.card11.appear = 2;
                            this.card16.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card11.reset();
                            this.card16.reset();
                        }, null, this);
                    }
                }
            }
            
            // card12

            if(this.card12.appear == 0) {
                if(this.card13.appear == 0) {
                    if (this.card012.texture.key == this.card013.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card013.destroy();
                            this.card012.destroy();
                            this.card13.destroy();
                            this.card12.destroy();
                            this.card12.appear = 2;
                            this.card13.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card12.reset();
                            this.card13.reset();
                        }, null, this);
                    }
                }
                if(this.card14.appear == 0) {
                    if (this.card012.texture.key == this.card014.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card014.destroy();
                            this.card012.destroy();
                            this.card14.destroy();
                            this.card12.destroy();
                            this.card12.appear = 2;
                            this.card14.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card12.reset();
                            this.card14.reset();
                        }, null, this);
                    }
                }
                if(this.card15.appear == 0) {
                    if (this.card012.texture.key == this.card015.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card015.destroy();
                            this.card012.destroy();
                            this.card15.destroy();
                            this.card12.destroy();
                            this.card12.appear = 2;
                            this.card15.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card12.reset();
                            this.card15.reset();
                        }, null, this);
                    }
                }
                if(this.card16.appear == 0) {
                    if (this.card012.texture.key == this.card016.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card016.destroy();
                            this.card012.destroy();
                            this.card16.destroy();
                            this.card12.destroy();
                            this.card12.appear = 2;
                            this.card16.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card12.reset();
                            this.card16.reset();
                        }, null, this);
                    }
                }
            }
            
            // card13

            if(this.card13.appear == 0) {
                if(this.card14.appear == 0) {
                    if (this.card013.texture.key == this.card014.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card014.destroy();
                            this.card013.destroy();
                            this.card14.destroy();
                            this.card13.destroy();
                            this.card13.appear = 2;
                            this.card14.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card13.reset();
                            this.card14.reset();
                        }, null, this);
                    }
                }
                if(this.card15.appear == 0) {
                    if (this.card013.texture.key == this.card015.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card015.destroy();
                            this.card013.destroy();
                            this.card15.destroy();
                            this.card13.destroy();
                            this.card13.appear = 2;
                            this.card15.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card13.reset();
                            this.card15.reset();
                        }, null, this);
                    }
                }
                if(this.card16.appear == 0) {
                    if (this.card013.texture.key == this.card016.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card016.destroy();
                            this.card013.destroy();
                            this.card16.destroy();
                            this.card13.destroy();
                            this.card13.appear = 2;
                            this.card16.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card13.reset();
                            this.card16.reset();
                        }, null, this);
                    }
                }
            }
            
            // card14

            if(this.card14.appear == 0) {
                if(this.card15.appear == 0) {
                    if (this.card014.texture.key == this.card015.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card015.destroy();
                            this.card014.destroy();
                            this.card15.destroy();
                            this.card14.destroy();
                            this.card14.appear = 2;
                            this.card15.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card14.reset();
                            this.card15.reset();
                        }, null, this);
                    }
                }
                if(this.card16.appear == 0) {
                    if (this.card014.texture.key == this.card016.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card016.destroy();
                            this.card014.destroy();
                            this.card16.destroy();
                            this.card14.destroy();
                            this.card14.appear = 2;
                            this.card16.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card14.reset();
                            this.card16.reset();
                        }, null, this);
                    }
                }
            }
            
            // card15

            if(this.card15.appear == 0) {
                if(this.card16.appear == 0) {
                    if (this.card015.texture.key == this.card016.texture.key) {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card016.destroy();
                            this.card015.destroy();
                            this.card16.destroy();
                            this.card15.destroy();
                            this.card15.appear = 2;
                            this.card16.appear = 2;
                        }, null, this);
                    }
                    else {
                        this.clock = this.time.delayedCall(game.settings.clickTimer, () => {
                            this.card15.reset();
                            this.card16.reset();
                        }, null, this);
                    }
                }
            }
            //this.scoreLeft.text = this.score;
        }
        if (this.card1.appear == 2) {
            if (this.card2.appear == 2) {
                if (this.card3.appear == 2) {
                    if (this.card4.appear == 2) {
                        if (this.card5.appear == 2) {
                            if (this.card6.appear == 2) {
                                if (this.card7.appear == 2) {
                                    if (this.card8.appear == 2) {
                                        if (this.card9.appear == 2) {
                                            if (this.card10.appear == 2) {
                                                if (this.card11.appear == 2) {
                                                    if (this.card12.appear == 2) {
                                                        if (this.card13.appear == 2) {
                                                            if (this.card14.appear == 2) {
                                                                if (this.card15.appear == 2) {
                                                                    if (this.card16.appear == 2) {
                                                                        this.music.stop();
                                                                        this.scene.start("playScene2"); 
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    createTimer(){

        var me = this;
        let timerConfig = {
            fontFamily: 'Comic Sans MS',
            fontSize: '36px',
            backgroundColor: '#e1f2e8',
            color: '#D43F4D',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 70
        }

        me.timeLabel = me.add.text(20, 110, "00", timerConfig); 
   

    }
    updateTimer(){

        var me = this;

        var currentTime = new Date();
        var timeDifference = me.startTime.getTime() - currentTime.getTime();

        //Time elapsed in seconds
        me.timeElapsed = Math.abs(timeDifference / 1000);


        //Time remaining in seconds
        var timeRemaining = me.totalTime - me.timeElapsed; 
        if(me.timeElapsed > me.totalTime){
                this.gameOver = true;
        }

        //Convert seconds into minutes and seconds
        var seconds = Math.floor(timeRemaining);

        //Display minutes, add a 0 to the start if less than 10

        //Display seconds, add a 0 to the start if less than 10

        me.timeLabel.text = seconds;


    }
    // displayTimeRemaining() {
        
    //     var time = Math.floor(this.totalElapsedSeconds());
    //     var timeLeft = this.timeLimit - time;
    
    //     // detect when countdown is over
    //     if (timeLeft <= 0) {
    //         timeLeft = 0;
    //         this.timeOver = true;
    //     }
    
    //     var sec = Math.floor(timeLeft);
    
        
        
    //     this.timeText.text = sec;
    // }
    checkCollision(rocket, ship) {
        // simple AABB checking
        
        if (rocket.x < ship.x + ship.width && 
            rocket.x > ship.x && 
            rocket.y < ship.y + ship.height &&
            rocket.y > ship.y) {
                return true;
        }
        else {
            return false;
        }
    }
    shipExplode() {
        this.limit += 1;
    }
    
}