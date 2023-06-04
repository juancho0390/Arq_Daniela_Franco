let listElements = document.querySelectorAll('.list_button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight =="0"){
            height = menu.scrollHeight;
        }

        menu.style.height = height + "px"

    })
});

const button =  document.getElementById("button")
const modal = document.getElementById("ventana-modal")
const cerrar = document.getElementById("cerrar-modal")

button.addEventListener("click", () => modal.classList.add("modal--show"))
modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) modal.classList.remove("modal--show")
})
cerrar.addEventListener("click", ()=> modal.classList.remove("modal--show"))