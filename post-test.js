const p1 = document.getElementById('buttonSatu')

p1.addEventListener ('click', function(){
    const paragraf = document.getElementsByTagName('p')
    for (let i=0; i < paragraf.length; i++){
        paragraf[i].style.background = 'orange'
    }
})

const p2 =document.getElementById('buttonDua')

p2.addEventListener ('click', function(){
    p2.style.backgroundColor = 'orange'
    p2.style.color = 'white'
})

const p3 = document.getElementById('buttonTiga')

p3.addEventListener ('click', function(){
    const paragraf3 = document.getElementsByTagName('p')
    for (let i=0; i < paragraf3.length; i++){
        paragraf3[i].style.fontFamily = 'Times New Roman'
        paragraf3[i].style.color = 'lime'
    }
})

const p4 = document.getElementById('buttonEmpat')
p4.addEventListener ('click', function(){
    const button = document.getElementsByTagName('p')
    for (let i=0; i<button.length; i++){
        button[i].style.fontSize = '25px'
    }
})

const p5 = document.getElementById('buttonLima')
p5.addEventListener ('click', function(){
    const tombol = document.getElementById('container')
    tombol.style.backgroundColor = 'grey'
})

const p6 = document.getElementById('buttonEnam')
p6.addEventListener ('click', function(){
    const h2       = document.createElement('h2')
    const tulisan  = document.createTextNode ('Selamat datang di Dojobox.id')
    const sectionC = document.getElementById('a')
    const p1       = sectionC.getElementsByClassName('p1')[0]
    
    h2.appendChild(tulisan)    

    sectionC.replaceChild(h2, p1)
})

const p7 = document.getElementById('buttonTujuh')
p7.addEventListener ('click', function(){
    const  elementYangAkanDiHapus = document.querySelector('#b ul')
    const  eyad = document.querySelector('li:nth-child(1)')
    elementYangAkanDiHapus.removeChild(eyad)

    const tambah = document.createElement('li')
    const isiTulisan = document.createTextNode('Topan')
    tambah.appendChild(isiTulisan)

    const li = document.querySelector('#b ul')
    li.appendChild(tambah)
    

})

const p8 = document.getElementById('buttonDelapan')
p8.addEventListener ('click', function(){
    const judul = document.getElementById('judul')
    judul.innerHTML = 'Post Test'
})

const p9 = document.getElementById('buttonSembilan')
p9.addEventListener ('click', function(){
    const sectionA = document.getElementById('a')
    const hapusLink = sectionA.querySelector('a')
    hapusLink.removeAttribute('href')
})

const p10 = document.getElementById('buttonSembilan')
p10.addEventListener ('click', function(){
    // const newLi = document.createElement('a')
    // const elementGit = document.createTextNode('Github Saya')
    // const cy = document.querySelector('#c ul') 

    // newLi.appendChild(elementGit)    
    // cy.appendChild(newLi)
    // newLi.setAttribute('href','https://github.com/topanrk?tab=repositories')
    
    
    const tambah1 = document.createElement('a')
    const isiTulisan1 = document.createTextNode('Github Saya')
    tambah1.appendChild(isiTulisan1)

    const li1 = document.getElementsByTagName('a')
    li1.appendChild(tambah1)
    tambah1.setAttribute('href','https://github.com/topanrk?tab=repositories')
})

