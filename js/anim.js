$(document).ready(function () {
    $("body").addClass("visible");

    // FADE OUT ON NAVIGATION
    $("a.nav-link").click(function (e) {
        const href = $(this).attr("href");

        if (href && href !== "#") {
            e.preventDefault();
            $("body").removeClass("visible");
            setTimeout(() => {
                window.location = href;
            }, 500);
        }
    });
});

document.querySelectorAll(".img-slider").forEach(slider => {
    let images = slider.querySelectorAll(".slider-img");
    let index = 0;

    const showImage = (i) => {
        images.forEach(img => img.classList.remove("active"));
        images[i].classList.add("active");
    };

    slider.querySelector(".left-arrow").addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    });

    slider.querySelector(".right-arrow").addEventListener("click", () => {
        index = (index + 1) % images.length;
        showImage(index);
    });
});
