const menutoggle = document.getElementById('menubar')
const navlink = document.querySelector('.navlinks')

menutoggle.addEventListener('click',()=>{
    console.log("Menu click");
    navlink.classList.toggle('show')
    
})