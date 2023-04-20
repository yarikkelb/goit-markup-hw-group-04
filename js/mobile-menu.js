(() => {
  const refs = {
    openMenuBtn: document.querySelector("[js-open-menu]"),
    closeMenuBtn: document.querySelector("[js-close-menu]"),
    menu: document.querySelector("[js-menu-container]"),
    bodyNoScroll: document.querySelector("[data-no-scroll]")
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-hidden");
    refs.bodyNoScroll.classList.toggle('no-scroll');
  }
})();