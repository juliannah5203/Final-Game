// Group Name: Seg Fault
// Group Member: Julianne He, Lexin Xiong, Qiuting Zhao

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 640,
    scene: [ Menu, Play1, Play2, Level1, Level2, Level3, End ] 
}
let game = new Phaser.Game(config);
// reserve keyboard vars
let keyLEFT, keyRIGHT, keySPACE, keyR;
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;