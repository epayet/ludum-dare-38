import * as Phaser from "phaser";
import {ASSETS} from "../constants";

export default class SplashState extends Phaser.State {
    init() {}

    preload() {
        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.load.image("loaderBg", ASSETS.loaderBg);
        this.load.image("loaderBar", ASSETS.loaderBar);
    }

    create() {
        // TODO this is not really working
        let loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "loaderBg");
        let loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "loaderBar");
        loaderBg.anchor.setTo(0.5);
        loaderBar.anchor.setTo(0.5);

        this.load.setPreloadSprite(loaderBar);
    }

    render() {
        this.game.state.start("Game");
    }
}