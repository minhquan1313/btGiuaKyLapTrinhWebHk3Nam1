// Popular products
(() => {
    const item1 = ({ src, src2, c, n, s, newP, oldP, percent, amount }) => {
        return `
    <li
    class="relative rounded-xl overflow-hidden transition duration-300 border-gray-300 hover:border-green-300 hover:shadow-lg border border-transparent"
    >
        <div
            class="absolute top-0 left-0 z-20 bg-rose-500 px-4 py-1 text-xs text-white rounded-tl-xl rounded-br-xl"
        >
            Hot
        </div>
        <div class="relative flex items-center justify-center">
            <a href="./product.html" class="group peer relative transition duration-700 hover:scale-105 cursor-pointer">
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
                <p class="text-gray-400">(${amount})</p>
            </div>
            <h5 class="mt-2 text-xs text-gray-400">
                Bởi 
                <span
                    class="font-semibold text-teal-500 cursor-pointer transition duration-300 hover:text-yellow-500"
                >
                    ${s}
                </span>
            </h5>
            <div class="flex justify-between items-center mt-auto">
                <div class="flex items-end gap-3">
                    <h1 class="text-sm font-bold text-teal-500">${newP}</h1>
                    <h1 class="text-xs font-bold text-gray-400 line-through">${oldP}</h1>
                </div>
    
                <button
                    class="px-3 py-1.5 bg-green-100 text-xs font-bold text-teal-500 rounded-md transition duration-300 hover:bg-teal-500 hover:-translate-y-0.5 hover:text-white"
                >
                    <i class="ti-shopping-cart"></i> Thêm
                </button>
            </div>
        </div>
    </li>
        `;
    };
    const items1 = () => {
        return __dataProducts.map(item1).join("");
        // var e = temp1.querySelectorAll(".col-lg-1-5.col-md-4");
        // e.forEach((r) => {
        //     const percent = (Math.random() * 100).toFixed(2);
        //     const amount = ((5 * percent) / 100).toFixed(1);

        //     const value2 = Math.ceil(Math.random() * 100 + 100);
        //     const value1 = Math.ceil(Math.random() * value2);
        //     const percent2 = ((value1 / value2) * 100).toFixed(2);
        //     d.push({
        //         src: r.querySelector(".default-img").src,
        //         src2: r.querySelector(".hover-img").src,
        //         c: r.querySelector(".product-category").innerText,
        //         n: r.querySelector("h2>a").innerText,
        //         s: r.querySelector("div>span>a").innerText,
        //         newP: r.querySelector(".product-price>span").innerText,
        //         oldP: r.querySelector(".product-price>span.old-price").innerText,
        //         percent,
        //         amount,
        //         percent2,
        //         value1,
        //         value2,
        //     });
        // });
    };
    const parent1 = document.querySelector("#b-pproduct");
    if (parent1) parent1.innerHTML = items1();
})();
