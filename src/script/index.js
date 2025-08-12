const hamburgerIcon=document.getElementById('hamburger')
const navItemsContainer=document.getElementById('nav-item-container')

hamburgerIcon.addEventListener('click',()=>{
    hamburgerIcon.style.display='none'
    navItemsContainer.style.display='flex'
})

document.addEventListener('click',(e)=>{
    if(document.body.offsetWidth>=1200)return
    if(!navItemsContainer.contains(e.target) && !hamburgerIcon.contains(e.target)){
        navItemsContainer.style.display='none'
        hamburgerIcon.style.display='block'
    }
})
