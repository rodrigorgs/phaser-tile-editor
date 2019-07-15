import "phaser";
import { MainScene } from './main-scene';

const config : Phaser.Types.Core.GameConfig = {
  title: "Phaser Tile Editor",
  width: 480,
  height: 320,
  parent: "game",
  scene: [MainScene],
  backgroundColor: "#ccff00"
};

export class TileEditorGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
};

window.onload = () => {
  var game = new TileEditorGame(config);
};