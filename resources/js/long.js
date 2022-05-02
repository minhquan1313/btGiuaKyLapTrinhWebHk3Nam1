var elem = document.querySelector(".L_slider-wrap");
if (elem)
    new Flickity(elem, {
        // options
        cellAlign: "left",
        autoPlay: 2500,
        pauseAutoPlayOnHover: false,
        wrapAround: true,
        contain: true,
    });
const countdown1 = () => {
    const countDate = new Date("December 1, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);

    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day1").innerHTML = textDay < 10 ? "0" + textDay : textDay;
    document.querySelector(".hour1").innerHTML = textHour < 10 ? "0" + textHour : textHour;
    document.querySelector(".minute1").innerHTML = textMinute < 10 ? "0" + textMinute : textMinute;
    document.querySelector(".second1").innerHTML = textSecond < 10 ? "0" + textSecond : textSecond;
};
if (document.querySelector(".day1")) setInterval(countdown1, 1000);

const countdown2 = () => {
    const countDate = new Date("December 1, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);

    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day2").innerHTML = textDay < 10 ? "0" + textDay : textDay;
    document.querySelector(".hour2").innerHTML = textHour < 10 ? "0" + textHour : textHour;
    document.querySelector(".minute2").innerHTML = textMinute < 10 ? "0" + textMinute : textMinute;
    document.querySelector(".second2").innerHTML = textSecond < 10 ? "0" + textSecond : textSecond;
};
if (document.querySelector(".day2")) setInterval(countdown2, 1000);

const countdown3 = () => {
    const countDate = new Date("December 1, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);

    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day3").innerHTML = textDay < 10 ? "0" + textDay : textDay;
    document.querySelector(".hour3").innerHTML = textHour < 10 ? "0" + textHour : textHour;
    document.querySelector(".minute3").innerHTML = textMinute < 10 ? "0" + textMinute : textMinute;
    document.querySelector(".second3").innerHTML = textSecond < 10 ? "0" + textSecond : textSecond;
};
if (document.querySelector(".day3")) setInterval(countdown3, 1000);

const countdown4 = () => {
    const countDate = new Date("December 1, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);

    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day4").innerHTML = textDay < 10 ? "0" + textDay : textDay;
    document.querySelector(".hour4").innerHTML = textHour < 10 ? "0" + textHour : textHour;
    document.querySelector(".minute4").innerHTML = textMinute < 10 ? "0" + textMinute : textMinute;
    document.querySelector(".second4").innerHTML = textSecond < 10 ? "0" + textSecond : textSecond;
};
if (document.querySelector(".day4")) setInterval(countdown4, 1000);

function Show() {
    var x = document.getElementById("showSubCate");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

const megaMenu = {
    x: document.getElementById("showMegaMenu"),
    show() {
        this.x.style.display = "block";
    },
    hide() {
        this.x.style.display = "none";
    },
};

const lAnimate = BAnimate();
lAnimate.set(".L_DealOfDay-item", "fade+fly_transform");
