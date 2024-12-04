function registerSettings() {
  game.settings.register("the-longnight-before-krampus", "firstTimeLoad", {
    name: "Imported Adventure",
    scope: "world",
    config: false,
    type: Boolean,
    default: false
  })
};

Hooks.once("init", () => {
  registerSettings();
});

Hooks.once('ready', async function() {
  if (game.user.isGM) {
    if (!game.settings.get("the-longnight-before-krampus", "firstTimeLoad")) {
      const adventures = await game.packs.get("the-longnight-before-krampus.the-longnight-before-krampus-adventure").getDocuments();
      for (let adventure of adventures) {
          adventure.sheet.render(true)
      }
      game.settings.set("the-longnight-before-krampus", "firstTimeLoad", true)
    }
  }
})