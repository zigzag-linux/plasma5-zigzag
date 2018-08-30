applet.wallpaperPlugin = 'org.kde.image'
applet.currentConfigGroup = new Array ("Wallpaper", "org.kde.image", "General")
applet.writeConfig("Image", "file:///usr/share/wallpapers/openSUSEdefault/contents/images/1920x1080.jpg")
applet.writeConfig("FillMode", "2")
applet.currentConfigGroup = new Array("General");
applet.writeConfig("pressToMove",true);
applet.writeConfig("showToolbox",false);
applet.writeConfig("popups",false);
applet.writeConfig("selectionMarkers",false);
applet.writeConfig("sortMode","-1");
applet.reloadConfig();
