import * as Phaser from "phaser";

export default class GameState extends Phaser.State {

    create() {
        let style: Phaser.PhaserTextStyle = {
            backgroundColor: "white"
        };
        let hello = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY, "Hello world", style);
        this.add.existing(hello);
    }

    update() {

    }
}