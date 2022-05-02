const modal = {
    e: document.querySelector("#modal"),
    b: document.body,
    show() {
        this.b.classList.add("modal-open");
    },
    hide() {
        this.b.classList.remove("modal-open");
    },
    init() {
        if (this.b) {
            this.b.addEventListener("click", (e) => {
                if (e.target.id == "modal") this.hide();
            });
        }
    },
};
const pageLoader = {
    e: document.querySelector("#pageLoader"),
    hide(callback) {
        modal.hide();
        setTimeout(() => {
            this.remove();
            callback();
        }, parseFloat(window.getComputedStyle(modal.e).transitionDuration) * 1000);
    },
    remove() {
        this.e.remove();
    },
};
// Feature categories
(() => {
    const item1 = ({ src, t, a }) => {
        return `
    <li class="carousel-cell w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 xl:w-1/10 sm:px-3 px-1">
        <div
            class="bg-red-100 group pb-4 cursor-pointer flex flex-col items-center transition duration-300 hover:border-green-300 rounded-lg border border-transparent"
        >
            <img
                src="${src}"
                alt=""
                class="aspect-square w-full scale-75"
                draggable="false"
            />
    
            <h1
                class="font-semibold md:text-sm text-xs group-hover:text-teal-500 cursor-pointer transition duration-300 whitespace-nowrap"
            >
            ${t}
            </h1>
            <h5 class="md:text-xs text-exs to-gray-400">${a} món</h5>
        </div>
    </li>
        `;
    };
    const items1 = () => {
        const data = [
            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png",
                t: "Thực vật",
                a: "72",
            },
            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png",
                t: "Dâu tây",
                a: "36",
            },
            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png",
                t: "Snack",
                a: "56",
            },
            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png",
                t: "Mận đen",
                a: "123",
            },
            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png",
                t: "Mãng cầu",
                a: "34",
            },
            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-6.png",
                t: "Nho",
                a: "34",
            },
            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-7.png",
                t: "Cam",
                a: "34",
            },
            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-8.png",
                t: "Cây cảnh",
                a: "34",
            },
            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png",
                t: "Táo đỏ",
                a: "54",
            },
            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png",
                t: "Đào",
                a: "14",
            },
            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png",
                t: "Kiwi",
                a: "28",
            },
            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png",
                t: "Bánh & sữa",
                a: "26",
            },

            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png",
                t: "Cà phê & trà",
                a: "89",
            },
            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-15.png",
                t: "Tai nghe",
                a: "87",
            },
        ];
        return data.map(item1).join("");
        // var e = temp1.querySelectorAll(".col-lg-4");
        // e.forEach((r) => {
        //     d.push({
        //         src: r.querySelector("img").src,
        //         t: r.querySelector("h4").innerText,
        //     });
        // });
    };
    const item2 = ({ src, t }) => {
        return `
    <li
    class="aspect-video rounded-xl bg-cover bg-right-bottom xl:p-11 p-6 sm:last:col-span-2 lg:last:col-span-1"
    style="
        background-image: url('${src}');
    "
    >
        <div class="flex flex-col items-start h-full w-full">
            <h1 class="font-bold md:text-xl text-lg transition duration-300 hover:-translate-y-1">
                ${t}
            </h1>
            <button
                class="mt-auto group flex gap-1 bg-teal-500 rounded-md text-white font-bold text-xs px-3 py-1.5 transition duration-300 hover:bg-yellow-500"
            >
                Lướt Ngay
                <i
                    class="ti-arrow-right my-auto text-exs transition-all duration-300 group-hover:pl-1"
                ></i>
            </button>
        </div>
    </li>
        `;
    };
    const items2 = () => {
        const data = [
            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png",
                t: "Thực phẩm tươi<br>mới mỗi ngày",
            },
            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-2.png",
                t: "Bữa sáng dễ dàng<br>và dinh dưỡng",
            },
            {
                src: "http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-3.png",
                t: "Thực phẩm<br>hữu cơ",
            },
        ];
        return data.map(item2).join("");
    };
    const parent1 = document.querySelector(".carousel-1");
    const parent2 = document.querySelector("#b-bigCate");
    if (parent1) parent1.innerHTML = items1();
    if (parent2) parent2.innerHTML = items2();
})();

// Daily
(() => {
    const item1 = ({ src, src2, c, n, percent, percent2, value1, value2 }) => {
        return `
    <li class="carousel-cell xl:w-1/4 md:w-1/2 lg:w-1/3 w-full sm:px-3 px-1">
        <div
            class="relative transition duration-300 border border-gray-300 border-transparent hover:border-green-300 hover:shadow-lg rounded-xl overflow-hidden"
        >
            <div
                class="absolute top-0 left-0 z-20 bg-rose-500 px-4 py-1 text-xs text-white rounded-tl-xl rounded-br-xl"
            >
                Hot
            </div>
            <div class="relative flex items-center justify-center">
                <a href="./product.html"
                    class="group peer relative transition duration-700 hover:scale-105 cursor-pointer"
                >
                    <img
                        src="${src2}"
                        alt=""
                        class="absolute inset-0 transition object-cover aspect-square -z-10"
                    />
                    <img
                        src="${src}"
                        alt=""
                        class="z-10 w-full transition object-cover aspect-square group-hover:opacity-0"
                    />
                </a>
                <div
                    class="absolute z-10 transition duration-300 opacity-0 peer-hover:opacity-100 hover:opacity-100 flex"
                >
                    <button
                        class="relative group bg-white text-sm flex items-center justify-center py-1 px-3 border-y border-l first:rounded-l-lg last:border-r last:rounded-r-lg"
                    >
                        <i
                            class="ti-heart text-teal-500 transition duration-300 group-hover:text-yellow-500"
                        >
                        </i>
                        <span
                            class="absolute flex justify-center px-2 py-1 rounded-md text-xs text-white bg-teal-500 whitespace-nowrap bottom-full transition duration-300 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 after:absolute after:top-full after:w-0 after:h-0 after:border-4 after:border-t-8 after:border-t-teal-500 after:border-transparent"
                        >
                            Lưu
                        </span>
                    </button>
                    <button
                        class="relative group bg-white text-sm flex items-center justify-center py-1 px-3 border-y border-l first:rounded-l-lg last:border-r last:rounded-r-lg"
                    >
                        <i
                            class="ti-control-shuffle text-teal-500 transition duration-300 group-hover:text-yellow-500"
                        >
                        </i>
                        <span
                            class="absolute flex justify-center px-2 py-1 rounded-md text-xs text-white bg-teal-500 whitespace-nowrap bottom-full transition duration-300 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 after:absolute after:top-full after:w-0 after:h-0 after:border-4 after:border-t-8 after:border-t-teal-500 after:border-transparent"
                        >
                            So sánh
                        </span>
                    </button>
                    <a href="./product.html"
                        class="relative group bg-white text-sm flex items-center justify-center py-1 px-3 border-y border-l first:rounded-l-lg last:border-r last:rounded-r-lg"
                    >
                        <i
                            class="ti-eye text-teal-500 transition duration-300 group-hover:text-yellow-500"
                        >
                        </i>
                        <span
                            class="absolute flex justify-center px-2 py-1 rounded-md text-xs text-white bg-teal-500 whitespace-nowrap bottom-full transition duration-300 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 after:absolute after:top-full after:w-0 after:h-0 after:border-4 after:border-t-8 after:border-t-teal-500 after:border-transparent"
                        >
                            Xem ngay
                        </span>
                    </a>
                </div>
            </div>
            <div class="p-5 h-52 flex flex-col">
                <h5 class="mt-2 text-xs text-gray-400">${c}</h5>
                <a href="./product.html"
                    class="mt-2 font-bold text-sm line-clamp-2 cursor-pointer transition duration-300 hover:text-teal-500"
                >
                    ${n}
                </a>
                <div class="mt-2 flex gap-3 text-xs">
                    <div class="relative">
                        <div class="overflow-hidden whitespace-nowrap text-gray-300">
                            <i class="ti-star"></i>
                            <i class="ti-star"></i>
                            <i class="ti-star"></i>
                            <i class="ti-star"></i>
                            <i class="ti-star"></i>
                        </div>
                        <div
                            class="overflow-hidden whitespace-nowrap text-yellow-500 absolute inset-0 max-w-full"
                            style="width: ${percent}%"
                        >
                            <i class="ti-star"></i>
                            <i class="ti-star"></i>
                            <i class="ti-star"></i>
                            <i class="ti-star"></i>
                            <i class="ti-star"></i>
                        </div>
                    </div>
                </div>
                <div class="mt-auto space-y-1">
                    <div class="relative rounded-md overflow-hidden">
                        <div class="w-full h-1 bg-gray-200"></div>
                        <div class="absolute inset-0 bg-teal-500" style="width: ${percent2}%"></div>
                    </div>
                    <h1 class="text-xs">Đã bán: ${value1}/${value2}</h1>
                </div>
                <div class="mt-2 flex">
                    <button
                        class="flex-1 px-3 py-2 bg-teal-500 text-xs font-bold text-white rounded-md transition duration-300 hover:bg-yellow-500 hover:-translate-y-0.5 hover:text-white"
                    >
                        <i class="ti-shopping-cart"></i> Thêm
                    </button>
                </div>
            </div>
        </div>
    </li>
        `;
    };
    const items1 = () => {
        return __dataProducts.map(item1).join("");
    };
    const parent1 = document.querySelector(".carousel-2");
    if (parent1) parent1.innerHTML = items1();
})();

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
modal.init();
const bAnimate = BAnimate();

bAnimate.set(".carousel-1 .carousel-cell", "fade+fly");
bAnimate.set("#b-bigCate>li", "fade+fly");
bAnimate.set("#b-pproduct>li", "fade");
bAnimate.set(".carousel-2 .carousel-cell", "fade+fly");
bAnimate.set(".selling-products", "fade+fly_transform");
bAnimate.set(".h-label", "fade+fly_transform");
bAnimate.set(".L_footer-container", "fade+fly_transform");
window.addEventListener("load", () => {
    // modal.hide();
    // pageLoader.hide(() => {});

    pageLoader.hide(() => {
        modal.show();
        document.querySelector("#b-deal").classList.remove("hidden");
        document.querySelector("#b-deal").classList.add("flex");
    });
});
