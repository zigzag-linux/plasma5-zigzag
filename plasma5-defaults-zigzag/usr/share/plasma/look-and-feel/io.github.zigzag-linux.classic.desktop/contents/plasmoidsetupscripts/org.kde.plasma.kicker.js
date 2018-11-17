applet.currentConfigGroup = ["General"];
applet.writeConfig("favoriteApps", [
  "preferred://browser",
  "org.kde.dolphin.desktop",
  "systemsettings.desktop",
  "org.kde.konsole.desktop",
  "org.kde.discover.desktop"
]);
applet.writeConfig("limitDepth", true);
applet.writeConfig("alphaSort", true);

applet.reloadConfig();
