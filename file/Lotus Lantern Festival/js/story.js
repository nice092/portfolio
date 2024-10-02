$(document).ready(function() {
    alert("이 화면은 1920px 해상도에 최적화되어 있으며, 해당 해상도에서의 이용을 권장합니다.");

    const $imgBoxes = document.querySelectorAll(".imgbox");
    
    let txtBoxOffset = () => {
        const os = [];
        document.querySelectorAll(".txtbox").forEach((e, i) => {
            os.push(e.offsetTop);
        });
        return os;
    };

    const offsets = txtBoxOffset();

    window.addEventListener("scroll", () => {
        const scr = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.offsetHeight;

        $imgBoxes.forEach(element => {
            element.classList.remove("on");
        });

        if(scr >= offsets[0] && scr < offsets[1]) {
            $imgBoxes[0].classList.add("on");
        } else if(scr >= offsets[1] && scr < offsets[2]) {
            $imgBoxes[1].classList.add("on");
        } else if(scr >= offsets[2] && scr < offsets[3]) {
            $imgBoxes[2].classList.add("on");
        } else if(scr >= offsets[3]) {
            $imgBoxes[3].classList.add("on");
        }

        if (scr + windowHeight >= documentHeight - 10) {
            $imgBoxes.forEach(element => {
                element.classList.remove("on");
            });
            $imgBoxes[3].classList.add("on");
        }
    });
});
