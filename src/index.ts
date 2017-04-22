import * as Phaser from "phaser";
import SplashState from "./states/splash";
import MainState from "./states/main";
import {GAME_STATES} from "./constants";

class Game extends Phaser.Game {

    constructor() {
        let width = document.documentElement.clientWidth > 1024 ? 1024 : document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight > 728 ? 728 : document.documentElement.clientHeight;

        super(width, height, Phaser.AUTO, "", null);

        this.state.add(GAME_STATES.SPLASH, SplashState, true);
        this.state.add(GAME_STATES.MAIN, MainState);
    }
}

new Game();

