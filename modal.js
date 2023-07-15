/* (() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})(); */

const modalprueba = document.querySelector(".modal-formulario");
const closeprueba = document.querySelector(".data-modal-close")
const openprueba = document.querySelector(".solicite-button")

btn.addEventListener ("click", mostrar()); 

function mostrar () {
    
    openprueba.addEventListener("click", (e) => {
        return  alert("ojo")
    }) 
    
    }


closeprueba.addEventListener("click", (e) =>{
    e.preventDefault();
    modalprueba.classList.remove("modal--show")

})

