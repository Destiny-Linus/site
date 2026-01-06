function main() {
    navs = document.querySelector(".navs");
    ham = document.querySelector(".ham");
    nav = document.querySelector(".navigation");
    hero = document.querySelector(".hero");
    secs = document.querySelector("main");
    foot = document.querySelector("footer")

    year = document.querySelector("#date").textContent = new Date().getFullYear();

    ham.addEventListener("click", ()=> {
        navs.classList.add("show");
        ham.classList.add("show");
        nav.classList.add("show");
        hero.classList.add("show");
        secs.classList.add("show");
        foot.classList.add("show");
    })

    const goes = document.querySelectorAll(".go")
    goes.forEach(el => {
        el.addEventListener("click", ()=> {
            navs.classList.remove("show");
            nav.classList.remove("show");
            hero.classList.remove("show");
            secs.classList.remove("show");
            foot.classList.remove("show"); 
            ham.classList.remove("show");
        })
    })

    const reveals = document.querySelectorAll(".reveal");

    window.addEventListener("scroll", () => {
        reveals.forEach(el => {
            const top = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (top < windowHeight - 50 && !el.classList.contains("show")) {
                el.classList.add("show")

                if (el.classList.contains("parent")) {
                    setInterval(autoslide, 10000)
                }
            }
        })
    })

    container = document.querySelector(".parent");
    cards = document.querySelectorAll(".item")
    let index = 0;

    function getStep() {
        const cardWidth = cards[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(container).gap) || 0;
        return cardWidth + gap
    }

    function goToIndex(i) {
        index = Math.max(0, Math.min(i, cards.length -1));

        container.scrollTo({
            left: index * getStep(),
            behavior: "smooth"
        })
    }

    function next() {
        goToIndex(index + 1)
    }

    function prev() {
        goToIndex(index - 1)
    }

    function autoslide() {
        index ++;

        if (index >= cards.length) {
            index = 0;
        }

        container.scrollTo({
            left: index * getStep(),
            behavior: "smooth"
        })
    }

    document.getElementById("next").addEventListener("click", next);
    document.getElementById("prev").addEventListener("click", prev);

    function startChat(service) {
        const phone = "2349152680996";

        const message = service
            ? `Hello Destiny, I'm interested in a website project and would love to discuss your
                ${service} service.`
            : `Hello Destiny, I'm interested in a website projecct and would love to discuss your services `;
        
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }

    document.querySelectorAll(".WhatsApp-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const service = this.dataset.service;
            startChat(service);
        });
    });

}
main();