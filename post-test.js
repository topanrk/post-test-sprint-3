const p1 = document.getElementById('buttonSatu')

p1.addEventListener ('click', function(){
    const div = document.getElementById('a')
    const div2 = document.getElementById('b')
    const div3 = document.getElementById('c')
    div.style.backgroundColor = 'blue'
    div2.style.backgroundColor = 'lime'
    div3.style.backgroundColor = 'green'
})

const p2 =document.getElementById('buttonDua')

p2.addEventListener ('click', function(){
    p2.style.backgroundColor = 'orange'
    p2.style.color = 'white'
})

const p3 = document.getElementById('buttonTiga')

p3.addEventListener ('click', function(){
    const btn = document.getElementsByTagName('body')[0]
    const btn1 = document.getElementsByTagName('body')[0]
    btn.style.fontFamily = 'times new roman'
    btn1.style.color = 'red'
})

const p4 = document.getElementById('buttonEmpat')
p4.addEventListener ('click', function(){
    const button = document.getElementsByTagName('body')[0]
    button.style.fontSize = '25px'
})

const p5 = document.getElementById('buttonLima')
p5.addEventListener ('click', function(){
    const tombol = document.getElementById('container')
    tombol.style.backgroundColor = 'grey'
})

const p6 = document.getElementById('buttonEnam')
p6.addEventListener ('click', function(){
    const h2       = document.createElement('h2')
    const sectionC = document.getElementById('a')

    h2.appendChild(sectionC)
    const p        = sectionC.querySelector('p')

    sectionC.replaceChild(h2, p)
})

const p7 = document.getElementById('buttonTujuh')
p7.addEventListener ('click', function(){

})

const p8 = document.getElementById('buttonDelapan')
p8.addEventListener ('click', function(){
    const judul = document.getElementById('judul')
    judul.innerHTML = 'Post Test'
})

const p9 = document.getElementById('buttonSembilan')
p9.addEventListener ('click', function(){
    const sectionA = document.getElementById('a')
    const elementYangAkanDiHapus = document.getElementsByTagName('a')[0]
    sectionA.removeChild(elementYangAkanDiHapus)
})

const p10 = document.getElementById('buttonSembilan')
p10.addEventListener ('click', function(){
    const elementBaru = document.createElement('p')
    const link = document.createTextNode('https://github.com/topanrk?tab=repositories')

    elementBaru.appendChild(link)
    const sectionAa = document.getElementById('a')
    sectionAa.appendChild(elementBaru)
})