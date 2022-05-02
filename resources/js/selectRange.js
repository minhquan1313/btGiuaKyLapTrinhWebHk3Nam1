const setSelectRange = (ele, minn, maxx, from, to) => {
    const selecSlide = {
        bar: ele.querySelector("#l_selectRange-bar"),
        barToChange: ele.querySelector("#l_selectRange-bar-toChange"),
        infoL: ele.querySelector("#l_selectRange-info-from"),
        infoR: ele.querySelector("#l_selectRange-info-to"),
        fromPrice: 0,
        toPrice: maxx,
        isLeft: false,
        isRight: false,
        lastL: 0,
        lastR: 0,
        getL() {
            const l = this.barToChange.style.left;
            return l ? parseFloat(l) : 0;
        },
        getR() {
            const l = this.barToChange.style.right;
            return l ? parseFloat(l) : 0;
        },
        checkPrice(t) {
            if (t < minn) {
                t = 0;
            } else if (t > maxx) {
                t = maxx;
            }
            return t;
        },
        setInfoL(t) {
            t = this.checkPrice(t);
            if (t > this.toPrice) {
                t = this.toPrice;
            }
            this.infoL.innerText = t;
            this.fromPrice = t;
        },
        setInfoR(t) {
            t = this.checkPrice(t);
            if (t < this.fromPrice) {
                t = this.fromPrice;
            }
            this.infoR.innerText = t;
            this.toPrice = t;
        },
        checkPercent(t) {
            if (t > 100) t = 100;
            else if (t < 0) t = 0;
            return t;
        },
        setBarL(t) {
            let ele = this.getR();

            t = this.checkPercent(t);
            if (t + ele > 100) t = 100 - ele;

            this.barToChange.style.left = t + "%";
        },
        setBarR(t) {
            t = 100 - t;
            let ele = this.getL();

            t = this.checkPercent(t);
            if (t + ele > 100) t = 100 - ele;

            this.barToChange.style.right = t + "%";
        },
        setLeft(percent) {
            this.setBarL(percent);
            let price = parseInt((percent / 100) * maxx);
            console.log(percent, price);
            this.setInfoL(price);
        },
        setRight(percent) {
            this.setBarR(percent);
            let price = parseInt((percent / 100) * maxx);
            this.setInfoR(price);
        },
    };
    const init = () => {
        selecSlide.lastL = from;
        selecSlide.setLeft(from);

        selecSlide.lastR = to;
        selecSlide.setRight(to);
    };
    let xDown, xDiff;

    const dragHandler = (e) => {
        if (selecSlide.isLeft) {
            xDiff = e.pageX;
            let diff = xDiff - xDown;
            let diffPercent = (diff / selecSlide.bar.clientWidth) * 100;

            selecSlide.setLeft(selecSlide.lastL + diffPercent);
        } else if (selecSlide.isRight) {
            xDiff = e.pageX;
            let diff = xDiff - xDown;
            let diffPercent = (diff / selecSlide.bar.clientWidth) * 100;

            selecSlide.setRight(selecSlide.lastR + diffPercent);
        }
    };
    const downHandler = (e) => {
        xDown = e.pageX;
        xDiff = (e.offsetX / selecSlide.bar.clientWidth) * 100;
        let diffL = Math.abs(xDiff - selecSlide.getL());
        let diffR = Math.abs(xDiff - (100 - selecSlide.getR()));

        if (diffL < diffR || xDiff < selecSlide.getL()) {
            selecSlide.isLeft = true;
            selecSlide.setLeft(xDiff);
            selecSlide.lastL = xDiff;
        } else {
            selecSlide.isRight = true;
            selecSlide.setRight(xDiff);
            selecSlide.lastR = xDiff;
        }
    };
    const upHandler = () => {
        selecSlide.isLeft = false;
        selecSlide.isRight = false;
    };

    init();

    selecSlide.bar.addEventListener("mousedown", downHandler);
    window.addEventListener("mousemove", dragHandler);
    window.addEventListener("mouseup", upHandler);
};

const l_selectRange = document.querySelector("#l_selectRange");
if (l_selectRange) {
    setSelectRange(l_selectRange, 0, 5000, 20, 50);
}
