const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')
const ahref = document.getElementById('a')

a.addEventListener('click',(e)=>{
    e.preventDefault()
    alert('e.preventDefault()')
})


const onclickHandler1 = () => alert('Hey')
const onclickHandler2 = () => alert('bye')
const onclickHandler3 = (e) => {
    e.stopPropagation()
    if(e.target.tagName === 'BUTTON'){
        alert(e.target.id)
    }
}

// sm.onclick = onclickHandler1
// sm.onclick = onclickHandler2

// sm.addEventListener('click', onclickHandler1)
// sm.addEventListener('click', onclickHandler2)
sm.addEventListener('click', onclickHandler3)