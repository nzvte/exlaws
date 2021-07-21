var _app = function() {
    this.id = 0;
    this.videoElement = null;
    this.audioElement = null;
    this.musicVolume = 0.12;
    this.musicFadeIn = 4000;
    this.skippedIntro = true;
    this.backgroundToggler = false;
    this.shouldIgnoreVideo = false;
    this.effects = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello"];
    this.brandDescription = [
        "exlaws",
        "2krazy.ark",
        "exlaws",
        "2krazy.ark",
        "exlaws and 2krazy.ark on insta"
    ];

    this.titleChanger = function(text, delay) {
        text = text || ['Aris™'];
        delay = delay || 2000;

        var counter = 0;

        setInterval(function() {
            if (counter < text.length)
                document.title = text[counter++];
            else
                document.title = text[counter = 0];
        }, delay);
    }

    this.iconChanger = function(urls, delay) {}
};

var app = new _app();