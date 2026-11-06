(function () {
    var split = document.getElementById('split');
    if (!split) return;

    var mid = document.getElementById('splitMid');
    var midTxt = mid.querySelector('.mid-txt');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* 이름 크기 맞춤: 벌어졌을 때 [EUN] + [문장] + [HYUNG]이 가로폭을 꽉 채우도록 */
    function fitSplit() {
        split.style.setProperty('--nm-size', '100px');

        var W = split.clientWidth;
        var namesW = 0;
        split.querySelectorAll('.nm').forEach(function (el) { namesW += el.scrollWidth; });
        var midW = midTxt.scrollWidth;

        var size = 100 * (W - midW) / namesW;
        size = Math.min(size, window.innerHeight * 0.34); // 낮은 화면에서 너무 커지지 않게

        split.style.setProperty('--nm-size', size + 'px');
        split.style.setProperty('--mid-w', midTxt.scrollWidth + 'px');
    }

    /* 2초 뒤 한 번만 벌어짐
       - 웹폰트가 다 로드된 뒤 크기를 한 번만 계산하고 화면에 보여줌 (크기가 바뀌며 움직이는 현상 방지)
       - 그 시점부터 2초 뒤에 열림 */
    function start() {
        fitSplit();
        split.offsetWidth;                 // 계산된 크기를 먼저 적용
        split.classList.add('is-ready');
        if (reduce) {
            split.classList.add('is-open');
        } else {
            setTimeout(function () { split.classList.add('is-open'); }, 2000);
        }
        window.addEventListener('resize', fitSplit);
    }

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(start);
    } else {
        start();
    }
})();
