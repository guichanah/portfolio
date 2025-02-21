document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");
    let currentIndex = 0;
    let indicators = document.querySelectorAll(".indicator");
    
    function updateIndicators() {
        indicators.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }
    
    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: "smooth" });
            currentIndex = index;
            updateIndicators();
        }
    }
    
    function action_wheel(event){
        if (event.deltaY > 0) {
            currentIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
        }
        scrollToSection(currentIndex);
        event.preventDefault();
    }

    function swiper_none(){
        var win_w = window.innerWidth;
        if(win_w >= 790){
            
            document.addEventListener("wheel",  action_wheel, { passive: false });
        }else{
            document.removeEventListener("wheel",  action_wheel, { passive: false });
        }
    }


    swiper_none();
    
    window.addEventListener("resize",swiper_none);

    indicators.forEach((dot, index) => {
        dot.addEventListener("click", () => scrollToSection(index));
    });


    //텍스트 애니메이션
    const text = "Thank you!";
        const textContainer = document.getElementById("text");

        text.split("").forEach((char, index) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.classList.add("letter");
            span.style.animationDelay = `${index * 0.1}s`; // 순차적 딜레이
            textContainer.appendChild(span);
        });

     //메인페이지 애니메이션 효과
     particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 100,  /* 입자 개수 */
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff" /* 입자 색상 (흰색) */
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.5,
                "random": true
            },
            "size": {
                "value": 3,
                "random": true
            },
            "move": {
                "enable": true,
                "speed": 2, /* 입자 이동 속도 */
                "direction": "none",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    //"mode": "repulse" /* 마우스를 가져가면 입자가 밀려남 */
                }
            }
        }
    });

// JavaScript로 랜덤한 별 위치 만들기
for (let i = 0; i < 300; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    document.getElementById("contact").appendChild(star);

    // 랜덤한 위치와 애니메이션 시간 부여
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * .5 + .5}s`; // 별이 반짝이는 속도
    star.style.animationDelay = `${Math.random() * .5}s`; // 반짝이는 딜레이
}


});





