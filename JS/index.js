document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.top-bar .top-information .information, .top-bar .self .search');
    var contents = document.querySelectorAll('.tab-content');
    var currentActiveTab = null; // 用于跟踪当前激活的选项卡

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            if (currentActiveTab === tab) {
                // 如果当前选项卡已激活，则隐藏内容并重置currentActiveTab
                fadeOut(document.getElementById(tab.getAttribute('data-target')));
                tab.classList.remove('active');
                currentActiveTab = null;
            } else {
                // 激活新的选项卡
                activateTab(tab);
                currentActiveTab = tab;
            }
        });
    });

    function activateTab(tab) {
        var targetId = tab.getAttribute('data-target');
        var targetContent = document.getElementById(targetId);

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        contents.forEach(function(content) {
            if(content !== targetContent) {
                fadeOut(content);
            }
        });

        fadeIn(targetContent);
    }
});

function fadeIn(element) {
    element.style.opacity = 0;
    element.style.transform = 'translateY(10px)';
    element.style.display = 'block';

    var last = +new Date();
    var opacity = 0;
    var tick = function() {
        opacity += (new Date() - last) / 200;
        element.style.opacity = opacity;
        element.style.transform = `translateY(${10 - 10 * opacity}px)`;
        last = +new Date();

        if (opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };

    tick();
}

function fadeOut(element) {
    var opacity = 1;
    element.style.transform = 'translateY(0)';
    var last = +new Date();
    var tick = function() {
        opacity -= (new Date() - last) / 200;
        element.style.opacity = opacity;
        element.style.transform = `translateY(${10 - 10 * opacity}px)`;
        last = +new Date();

        if (opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        } else {
            element.style.display = 'none';
        }
    };
    tick();
}
document.addEventListener('DOMContentLoaded', function() {
    var gta5Div = document.querySelector('.game.GTA5');

    gta5Div.addEventListener('click', function() {
        window.open('https://baike.baidu.com/item/rockstar%20games/3544461', '_blank'); // 在新标签页中打开URL
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var gtaonlineDiv = document.querySelector('.game.GTAOnline');

    gtaonlineDiv.addEventListener('click', function() {
        window.open('https://baike.baidu.com/item/rockstar%20games/3544461', '_blank'); // 在新标签页中打开URL
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var RedDeadRedemption2Div = document.querySelector('.game.RedDeadRedemption2');

    RedDeadRedemption2Div.addEventListener('click', function() {
        window.open('https://baike.baidu.com/item/rockstar%20games/3544461', '_blank'); // 在新标签页中打开URL
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var RedReadOnlineDiv = document.querySelector('.game.RedReadOnline');

    RedReadOnlineDiv.addEventListener('click', function() {
        window.open('https://baike.baidu.com/item/rockstar%20games/3544461', '_blank'); // 在新标签页中打开URL
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var GTATrilogyDiv = document.querySelector('.game.GTATrilogy');

    GTATrilogyDiv.addEventListener('click', function() {
        window.open('https://themberfue.cn/login.html', '_blank'); // 在新标签页中打开URL
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var logoDiv = document.querySelector('.logo');

    logoDiv.addEventListener('click', function() {
        location.reload(); // 刷新当前页面
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var pictureDiv = document.querySelector('.picture');

    pictureDiv.addEventListener('click', function() {
        window.open('https://socialclub.rockstargames.com/member/Themberfue?id=172253076', '_blank'); // 在新标签页中打开URL
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var slidesContainer = document.querySelector('.slides-container');
    var slides = document.querySelectorAll('.slide');
    var texts = document.querySelectorAll('.description .text');
    var buttons = document.querySelectorAll('.description .slideshow-area-button');
    var currentIndex = 0;

    function updateSlides(index) {
        var slideWidth = slides[0].clientWidth;
        slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;

        texts.forEach(text => text.classList.remove('active-text'));
        buttons.forEach(button => button.classList.remove('active')); // 移除其他按钮的active类
        if (texts[index]) {
            texts[index].classList.add('active-text');
        }
        if (buttons[index]) {
            buttons[index].classList.add('active'); // 为当前按钮添加active类
        }

        currentIndex = index;
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            updateSlides(index);
            clearInterval(autoSlideTimer);
            autoSlideTimer = setInterval(nextSlide, 5000);
        });
    });

    function nextSlide() {
        var nextIndex = (currentIndex + 1) % slides.length;
        updateSlides(nextIndex);
    }

    var autoSlideTimer = setInterval(nextSlide, 5000);

    updateSlides(0);
});

