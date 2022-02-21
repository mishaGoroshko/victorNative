const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

const onClickHandler1 = () => alert('Yo')
const onClickHandler2 = () => alert('Hello')
const onClickHandler3 = (e) => console.dir(e)
const onClickHandler4 = (e) => console.dir(e)
const onClickHandler5 = (e) => {
    e.stopPropagation()
    console.dir(e)
    if (e.target.id === 'small') {
        alert(e.target.id)
    }
}

// sm.onclick = onClickHandler1             //set
// sm.onclick = onClickHandler2             //второй раз перезатер onClickHandler1
// sm.onclick = ''                          //delete
// sm.onclick = null                         //delete


// sm.addEventListener('click', onClickHandler1)
// sm.addEventListener('click', onClickHandler2)
// sm.addEventListener('click', onClickHandler3, true) //можно изменить модель обработки -- погружение
// sm.addEventListener('click', onClickHandler5)
// md.addEventListener('click', onClickHandler4)
// bg.addEventListener('click', onClickHandler4)


// sm.removeEventListener('click', onClickHandler1)
// sm.removeEventListener('click', onClickHandler2)
// sm.removeEventListener('click', () => alert('Hello'))  //все равно вызовет 'Hello'

const superHandler = (e) => {
    if (e.target.tagName === 'BUTTON') {
        alert(e.target.id)
    }
}
sm.addEventListener('click', superHandler)

const a = document.getElementById('a')

a.addEventListener('click', (e) => {    //не выполнение по умолчанию
    e.preventDefault()
    alert('e.preventDefault()')
})