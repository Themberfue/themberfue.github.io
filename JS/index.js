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

         if (targetId === 'search-content') {
            targetContent.style.display = 'flex';
            targetContent.style.alignItems = 'center';
            targetContent.style.justifyContent = 'space-between';
        } else {
            // 确保其他内容不使用flex布局
            targetContent.style.display = 'block';
        }
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
    // GTA5 Div
    var gta5Div = document.querySelector('.game.GTA5');
    if (gta5Div) {
        gta5Div.addEventListener('click', function() {
            window.open('https://baike.baidu.com/item/rockstar%20games/3544461', '_blank');
        });
    }

    // GTA Online Div
    var gtaonlineDiv = document.querySelector('.game.GTAOnline');
    if (gtaonlineDiv) {
        gtaonlineDiv.addEventListener('click', function() {
            window.open('https://baike.baidu.com/item/rockstar%20games/3544461', '_blank');
        });
    }

    // Red Dead Redemption 2 Div
    var RedDeadRedemption2Div = document.querySelector('.game.RedDeadRedemption2');
    if (RedDeadRedemption2Div) {
        RedDeadRedemption2Div.addEventListener('click', function() {
            window.open('https://baike.baidu.com/item/rockstar%20games/3544461', '_blank');
        });
    }

    // Red Dead Online Div
    var RedReadOnlineDiv = document.querySelector('.game.RedReadOnline');
    if (RedReadOnlineDiv) {
        RedReadOnlineDiv.addEventListener('click', function() {
            window.open('https://baike.baidu.com/item/rockstar%20games/3544461', '_blank');
        });
    }

    // GTA Trilogy Div
    var GTATrilogyDiv = document.querySelector('.game.GTATrilogy');
    if (GTATrilogyDiv) {
        GTATrilogyDiv.addEventListener('click', function() {
            window.open('https://themberfue.cn/login.html', '_blank');
        });
    }

    // Logo Div
    var logoDiv = document.querySelector('.logo');
    if (logoDiv) {
        logoDiv.addEventListener('click', function() {
            location.reload();
        });
    }

    // Picture Div
    var pictureDiv = document.querySelector('.picture');
    if (pictureDiv) {
        pictureDiv.addEventListener('click', function() {
            window.open('https://socialclub.rockstargames.com/member/Themberfue?id=172253076', '_blank');
        });
    }
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

    // var autoSlideTimer = setInterval(nextSlide, 5000);

    updateSlides(0);

    var prompts = document.querySelectorAll('#search-content .search-content-right .prompt');

    prompts.forEach(function(prompt) {
        prompt.addEventListener('click', function() {
            // 首先移除所有.prompt元素的'clicked'类
            prompts.forEach(function(p) {
                p.classList.remove('clicked');
            });

            // 然后只给被点击的元素添加'clicked'类
            this.classList.add('clicked');
        });
    });

    // 获取.top-bar元素和要动画的元素
    const topBarElement = document.querySelector('.top-bar');
    const animatedElement = document.querySelector('.introduce');
    const topBarTwoViceText = document.querySelector('.top-bar-two-vice');

    // 设置.introduce和.top-bar-two-vice元素的初始状态
    const initialStyles = {
    transition: 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out',
    transform: 'translateY(50px)',
    opacity: '0'
    };

    Object.assign(animatedElement.style, initialStyles);
    Object.assign(topBarTwoViceText.style, initialStyles);

    // 定义一个变量来跟踪动画是否已经被触发
    let animationTriggered = false;

    // 当窗口滚动时触发函数
    window.addEventListener('scroll', () => {
        // 获取.top-bar元素相对于视口的位置
        const topBarPosition = topBarElement.getBoundingClientRect().top;

        // 检查.top-bar元素是否到达了视口的顶部
        if (topBarPosition <= 0 && !animationTriggered) {
            // 触发.top-bar-two-vice的动画
            topBarTwoViceText.style.transform = 'translateY(0)';
            topBarTwoViceText.style.opacity = '1';

            // 延迟1秒后触发.introduce的动画
            setTimeout(() => {
                animatedElement.style.transform = 'translateY(0)';
                animatedElement.style.opacity = '1';
            }, 500);  // 延迟0.5秒

            animationTriggered = true; // 标记动画已被触发
        } else if (topBarPosition > 0 && animationTriggered) {
            // 如果.top-bar元素未在视口顶部且动画已被触发，则重置动画
            topBarTwoViceText.style.transform = 'translateY(50px)';
            topBarTwoViceText.style.opacity = '0';
            animatedElement.style.transform = 'translateY(50px)';
            animatedElement.style.opacity = '0';
            animationTriggered = false; // 重置标记
        }
    });

        // 获取.introduce元素和所有.paragragh元素
    const introduceElement = document.querySelector('.introduce');
    const paragraphs = introduceElement.querySelectorAll('.paragragh1, .paragragh2, .paragragh3, .paragragh4, .paragragh5');

    // 为.introduce添加鼠标悬浮事件监听
    introduceElement.addEventListener('mouseenter', () => {
    paragraphs.forEach((p, index) => {
        // 设置每个段落的延迟时间，依次增加
        setTimeout(() => {
        p.style.transform = 'translateY(0)';
        p.style.opacity = '1';
        }, index * 200); // 每个段落之间延迟200ms
    });
    });

    // 为.introduce添加鼠标离开事件监听
    introduceElement.addEventListener('mouseleave', () => {
    paragraphs.forEach(p => {
        // 重置到初始样式
        p.style.transform = 'translateY(50px)';
        p.style.opacity = '0';
    });
    });

    // 初始化.paragragh元素的初始样式
    paragraphs.forEach(p => {
    p.style.transform = 'translateY(50px)';
    p.style.opacity = '0';
    p.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
    });

    // 获取.container-three中的.introduce和所有.paragragh元素
    const introduceElementContainerThree = document.querySelector('.container-three .introduce');
    const paragraphsContainerThree = introduceElementContainerThree.querySelectorAll('.paragragh1, .paragragh2, .paragragh3, .paragragh4, .paragragh5');

    // 应用初始样式到每个段落
    paragraphsContainerThree.forEach(p => Object.assign(p.style, initialStyles));

    // 监听滚动事件
    window.addEventListener('scroll', () => {
    // 确定.introduce的位置
    const introducePositionContainerThree = introduceElementContainerThree.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // 当滚动到.introduce位置时
    if (introducePositionContainerThree <= windowHeight * 2 / 3) {
        paragraphsContainerThree.forEach((p, index) => {
        setTimeout(() => {
            p.style.transform = 'translateY(0)';
            p.style.opacity = '1';
        }, index * 200);  // 递增延迟时间，使段落依次出现
        });
    } else if (introducePositionContainerThree > windowHeight) {
        // 当滚动超过.introduce区域一定范围时，重置段落的样式
        paragraphsContainerThree.forEach(p => {
        Object.assign(p.style, initialStyles);
        });
    }
    });

        // 当窗口滚动时执行
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        var backToTop = document.getElementById("backToTop");

        // 当用户滑动页面超过20px时显示按钮
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    }

    // 当用户点击按钮时，平滑滚动到页面顶部
    document.getElementById('backToTop').onclick = function() {
        // 对于所有浏览器
        window.scrollTo({
        top: 0,
        behavior: 'smooth' // 指定平滑滚动
        });
    };
    
});

document.addEventListener('DOMContentLoaded', function() {
    // 选择第一个图片元素并为其添加点击事件
    var picture1 = document.getElementById('picture1');
    picture1.addEventListener('click', function() {
        // 在新标签页中打开指定的URL
        window.open('https://www.rockstargames.com/', '_blank');
    });

    // 选择第二个图片元素并为其添加点击事件
    var picture2 = document.getElementById('picture2');
    picture2.addEventListener('click', function() {
        // 在新标签页中打开指定的URL
        window.open('https://themberfue.cn/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/index.html', '_blank');
    });
});

document.querySelector('.all-information').addEventListener('click', function() {
    // 切换 .top-information 部分的显示状态
    var topInfo = document.querySelector('.top-information');
    if (topInfo.style.display === "none") {
        topInfo.style.display = "block";
    } else {
        topInfo.style.display = "none";
    }
});
document.querySelector('.top-bar .top-information .close-button').addEventListener('click', function() {
    var topInfo = document.querySelector('.top-bar .top-information');
    topInfo.style.display = 'none'; // 隐藏 .top-information
});
