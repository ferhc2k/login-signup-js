const modal = document.querySelector(".modal");
const controllerSection = document.querySelector(".controller-section");
const controllerActive = document.querySelector(".controller-active");
const sections = document.querySelectorAll(".content");
const tl = gsap.timeline();

const setPasswordActive = element => {
    const passwordContainer = element.parentElement;
    const passwordInput = passwordContainer.querySelector("input");
    const overlay = passwordContainer.querySelector(".form-overlay");
    overlay.classList.toggle("form-overlay-expand");
    passwordContainer.classList.toggle("form-input-active");
    overlay.classList.contains("form-overlay-expand") ? passwordInput.type = "text" : passwordInput.type = "password";
};

const setSectionActive = (el = controllerSection.children[0]) => {
    controllerActive.style.cssText = `left:${el.offsetLeft}px;width:${el.clientWidth}px;height:${el.clientHeight}px;`;
    Array.from(sections, section => section.classList.remove("active"));
    document.getElementById(el.dataset.section).classList.add("active");
    tl.from(`#${el.dataset.section}`, {opacity: 0, y: 20, ease: 'slastic'});
}

const openModal = () => {
    modal.classList.toggle("show");
    setSectionActive();
    tl.from('.modal', {scale: 0, ease: 'slastic'});
}

const openSection = item => setSectionActive(controllerSection.querySelector(`a[data-section="${item.dataset.section}"]`));




