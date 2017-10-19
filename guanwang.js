{
    let inner = document.querySelector(".imgbox");
    let item = document.querySelectorAll(".youhui1");
    let prev = document.querySelector(".yhanniu-left");
    let next = document.querySelector(".yhanniu-right");
    let dir = "r";
    let flag = true;
    let num = 4
    let st = setInterval(moveFn, 2000);
    function moveFn() {
        if (dir == "r") {
            num++
        } else if (dir == "l") {
            num--
        }
        inner.style.transition = "all 1s";
        inner.style.marginLeft = -295 * num + "px";
        // if(num == 8){
        // 	num = 0;
        // 	inner.style.marginLeft = 0;
        // 	inner.style.transition = "none";
        // }
    };
    inner.addEventListener("transitionend", function () {
        if (num == 12) {
            num = 4;
            inner.style.marginLeft = "-1185px";
            inner.style.transition = "none";
        }
        flag = true
    });
    inner.onmouseover = window.onblur = function () {
        clearInterval(st);
    };
    inner.onmouseout = window.onfocus = function () {
        st = setInterval(moveFn, 2000);
    };
    next.onclick = function () {
        if (flag == true) {
            dir = "r";
            flag = false;
            moveFn()
        }
    };
    prev.onclick = function () {
        if (flag == true) {
            dir = "l";
            flag = false;
            moveFn();
        }
    }

}
// 无缝轮播结束
// banner轮播开始
{
    let imgs = document.querySelectorAll(".lunbo img");
    let points = document.querySelectorAll(".point li");
    console.log(imgs)
    points.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < points.length; i++) {
                points[i].classList.remove("active");
                imgs[i].classList.remove("active");
            }
            ele.classList.add("active");
            imgs[index].classList.add("active");
            now = index;
        }
    });

}
// banner轮播结束
// 充值开始
{
    let goods = document.querySelectorAll(".zhi1");
    console.log(goods);
    goods.forEach(function (ele, index) {

        ele.onclick = function () {
            for (let i = 0; i < goods.length; i++) {
                goods[i].classList.remove("zhi2");
            }
            ele.classList.add("zhi2");
        }

    });

}
// 充值结束