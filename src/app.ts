import "phaser";

const config : Phaser.Types.Core.GameConfig = {
  title: "Phaser Tile Editor",
  width: 800,
  height: 600,
  parent: "game",
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