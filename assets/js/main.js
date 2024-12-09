let state = null; //pause,play,minize
$(document).ready(() => {
    const params = new URLSearchParams(window.location.search);
    const videoUrl = params.get("video");
    if (videoUrl !== null) {
        if (videoUrl === "") {
            $("#main").hide();
            return;
        }
        $("#form").hide();
        $("#videoSrc").attr("src", videoUrl);
        $("#video").get(0).load();
        $("#video").toggleClass("brightness-75");
        $("#controlBar").hide();
        $("#pauseIc").toggleClass("fa-play");
    } else {
        $("#main").hide();
    }
});

function play() {
    console.log("STATE PLAY");
    if (state == null) {
        state = "play";
        $("#playId").hide();
        $("#video").toggleClass("brightness-75");
        $("#video").get(0).play();
        $("#pauseIc").toggleClass("fa-play");
        $("pauseIc").toggleClass("fa-pause");
        $("#controlBar").show();
    }
}
function pause() {
    if (state === "play") {
        state = "pause";
        console.log("STATE " + state);
        $("#playId").show();
        $("#video").toggleClass("brightness-75");
        $("pauseIc").toggleClass("fa-pause");
        $("#pauseIc").toggleClass("fa-play");
        $("#video").get(0).pause();
    } else if (state === "pause") {
        state = "play";
        console.log("STATE " + state);
        $("#playId").hide();
        $("#video").toggleClass("brightness-75");
        $("#video").get(0).play();
        $("#pauseIc").toggleClass("fa-play");
        $("pauseIc").toggleClass("fa-pause");
    }
}
//SKIP VIDEO FOR 10 SECONDS
function skip() {
    const videoEl = $("#video")[0];
    videoEl.currentTime += 10;
}
function fullScreen() {
    openFullscreen($("#video")[0]);
}

function openFullscreen(myVideo) {
    console.log("hitting");
    var elem = myVideo;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
}
