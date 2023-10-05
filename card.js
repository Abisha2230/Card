const card = document.querySelectorAll('.panel')
card.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses(){
    card.forEach(panel=>{
        panel.classList.remove('active')
    })}

