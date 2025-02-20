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
});




