let text = document.querySelector('input[type="text"]')
let btn = document.querySelector('input[type="button"]')
let form = document.querySelector('form')

btn.addEventListener('click', getHero)

function getHero(){
    let heroName = form.querySelector('input[type="text"]').value.toLowerCase()
    let common = document.createElement('form')
    let div = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')
    let input = document.createElement('input')
    common.innerHTML = form.innerHTML

    function favHero(heroName, src){
        form.innerHTML = ''
        p.innerHTML = heroName.charAt(0).toUpperCase() + heroName.slice(1)
        img.src = src
        form.appendChild(div)
        div.appendChild(img)
        div.appendChild(p)
        input.value = 'Изменить'
        input.type = 'botton'
        input.style.margin = '5em'
        input.addEventListener('click',()=>{
            form.innerHTML = common.innerHTML
            form.querySelector('input[type="button"]').addEventListener('click', getHero)            
        })
        form.appendChild(input)
    }
    if(heroName == 'железный человек'){
        let src = 'https://i.pinimg.com/originals/c6/c5/92/c6c592b55bb6d61bb53a504344256742.jpg'
        favHero(heroName, src)
    }else if(heroName == 'человек паук'){
        let src = 'https://www.kino-teatr.ru/news/11465/110893.jpg'
        favHero(heroName, src)
    }else if(heroName == 'капитан америка'){
        let src = 'https://img2.goodfon.ru/wallpaper/original/1/a6/captain-america-the-winter-5153.jpg'
        favHero(heroName, src)
    }
}