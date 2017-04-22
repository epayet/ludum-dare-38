import * as Phaser from "phaser";
import {ASSETS, TEXTURES, GAME_STATES} from "../constants";

export default class SplashState extends Phaser.State {
    init() {}

    preload() {
        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.load.image(TEXTURES.LOADER_BG, ASSETS[TEXTURES.LOADER_BG]);
        this.load.image(TEXTURES.LOADER_BAR, ASSETS[TEXTURES.LOADER_BAR]);
        this.load.image(TEXTURES.BACKGROUND, ASSETS[TEXTURES.BACKGROUND]);
        this.load.image(TEXTURES.BALCONY_BARRIER, ASSETS[TEXTURES.BALCONY_BARRIER]);
        this.load.image(TEXTURES.BALCONY_BARRIER_VERTICAL, ASSETS[TEXTURES.BALCONY_BARRIER_VERTICAL]);
        this.load.image(TEXTURES.PLAYER, ASSETS[TEXTURES.PLAYER]);
    }

    create() {
        // TODO this is not really working
        let loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, TEXTURES.LOADER_BG);
        let loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, TEXTURES.LOADER_BAR);
        loaderBg.anchor.setTo(0.5);
        loaderBar.anchor.setTo(0.5);

        this.load.setPreloadSprite(loaderBar);
    }

    render() {
        this.game.state.start(GAME_STATES.MAIN);
    }
}