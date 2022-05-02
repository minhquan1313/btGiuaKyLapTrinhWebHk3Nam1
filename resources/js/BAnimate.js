function BAnimate() {
    let orders = {};

    const init = () => {
        if (!document.querySelector("#BAnimateScript")) {
            const script = document.createElement("script");
            script.src = "https://unpkg.com/waypoints/lib/noframework.waypoints.min.js";
            script.id = "BAnimateScript";
            document.head.appendChild(script);
        }
        if (!document.querySelector("#BAnimateStyle")) {
            const style = document.createElement("style");
            style.id = "BAnimateStyle";
            style.innerHTML = `
                .b-animate-pos{
                    position: relative;
                }
                .b-animate{
                    will-change: transform, opacity, top;
                }
                .b-animate.b-animate-play {
                    transition-duration: 0.6s !important;
                    transition-delay: calc(var(--o) * 0.1s) !important;
                }
                .b-animate.b-animate-fly2:not(.b-animate-play) {
                    top: 100% !important;
                }
                .b-animate.b-animate-fly2.b-animate-play {
                    top: 0;
                }
                .b-animate.b-animate-fade:not(.b-animate-play) {
                    opacity: 0 !important;
                }
                .b-animate.b-animate-fly:not(.b-animate-play) {
                    transform: translateY(100%) !important;
                }
                `;
            document.head.appendChild(style);
        }
    };
    const makeNewOrder = (top) => {
        orders[top] = 0;
    };
    const getOrder = (top) => {
        orders[top] ?? makeNewOrder(top);
        return orders[top]++;
    };
    const resetOrder = () => {
        orders = {};
    };
    const setAttr = (ele, classes) => {
        ele.classList.add(...classes);
        ele.style.cssText += `--o:${getOrder(ele.offsetTop)}`;
    };
    const playAndRemove = (ele, classes) => {
        ele.classList.add("b-animate-play");

        const styles = window.getComputedStyle(ele);
        const timer = (parseFloat(styles.transitionDuration) + parseFloat(styles.transitionDelay)) * 1000;

        setTimeout(() => {
            ele.classList.remove(...classes, "b-animate-play");
        }, timer);
    };
    const setWaypoints = (ele, classes) => {
        new Waypoint({
            element: ele,
            handler: function () {
                this.destroy();
                playAndRemove(ele, classes);
            },
            offset: "100%",
        });
    };
    const waitForWaypoint = (callback) => {
        if (typeof Waypoint !== "undefined") callback();
        else {
            const inter = setInterval(() => {
                // console.log("Waiting for Waypoint");
                if (typeof Waypoint !== "undefined") {
                    clearInterval(inter);
                    callback();
                }
            }, 30);
        }
    };
    const run = (eles = [], classes = []) => {
        waitForWaypoint(() => {
            resetOrder();
            eles.forEach((r) => {
                setAttr(r, classes);
                setWaypoints(r, classes);
            });
        });
    };

    const styles = {
        "fade+fly": ["b-animate", "b-animate-fly2", "b-animate-pos", "b-animate-fade"],
        "fade+fly_transform": ["b-animate", "b-animate-fly", "b-animate-fade"],
        fade: ["b-animate", "b-animate-fade"],
        fly: ["b-animate", "b-animate-fly2", "b-animate-pos"],
        fly_transform: ["b-animate", "b-animate-fly"],
    };

    init();
    return {
        set(selector, style) {
            // style = 'fade+fly' || 'fade+fly_transform' || 'fade' || 'fly' || 'fly_transform'
            const eles = document.querySelectorAll(selector);
            const classes = styles[style];
            eles.length > 0 && classes && run(eles, classes);
        },
    };
}
