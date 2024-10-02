$(document).ready(function(){
    alert("이 화면은 1920px 해상도에 최적화 되어 있습니다 . 이상으로 보는 것을 권장 드립니다.");

    $imgBoxes = document.querySelectorAll(".imgbox");
    
    let txtBoxOffset = () => {
        const os = new Array;
        
        document.querySelectorAll(".txtbox").forEach((e, i) => {
            os.push(e.offsetTop);
        });
    
        return os;
    }
    txtBoxOffset();
    
    window.addEventListener("scroll", () => {
        const scr = window.scrollY;
        $imgBoxes.forEach(element => {
            element.classList.remove("on");
        });
        if(scr >= txtBoxOffset()[0] && scr < txtBoxOffset()[1]) {
            $imgBoxes[0].classList.add("on");
        } else if(scr >= txtBoxOffset()[1] && scr < txtBoxOffset()[2]) {
            $imgBoxes[1].classList.add("on");
        } else if(scr >= txtBoxOffset()[2] && scr < txtBoxOffset()[3]) {
            $imgBoxes[2].classList.add("on");
        } else if(scr >= txtBoxOffset()[0]) {
            $imgBoxes[3].classList.add("on");
        } else {
            $imgBoxes[0].classList.add("on");
        }
    });
});//끝