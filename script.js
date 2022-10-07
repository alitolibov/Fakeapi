// let arr = [
//     {
//         img: 'чайник.jpg',
//         title: 'Медный чайник с фарфоровой ручкой',
//         price: '1 953 грн'
//     },
//     {
//         img: 'ник.jpg',
//         title: 'Медный чайник с фарфоровой ручкой',
//         price: '1 953 грн'
//     },
//     {
//         img: 'чай.jpg',
//         title: 'Медный чайник с фарфоровой ручкой',
//         price: '1 953 грн'
//     }
// ]
axios.get("http://localhost:3001/arr")
    .then(res => {
        console.log(res);
        reload(res.data)
    })
    axios.get("http://localhost:3001/arrSale")
    .then(res => {
        console.log(res);
        reload2(res.data)
    })
    axios.get("http://localhost:3001/array")
    .then(res => {
        console.log(res);
        reload3(res.data)
    })
// let array = [
//     {
//         title: 'Аутентичность',
//         info: 'Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.'
//     },
//     {
//         title: 'Изысканность',
//         info: 'Наши изделия из меди являются очень практичными. В то же время они наполнят особой магией ваш дом или рабочее....'
//     },
//     {
//         title: 'Честная оплата',
//         info: 'Мы стремимся предоставить лучший товар по лучшей цене с сервисом высокого уровня. Но все начинается c....'
//     },
//     {
//         title: 'Большой ассортимент',
//         info: 'У нас есть все от миниатюрных настольных паровых дистилляторов эфирных масел до крупногабаритного оборудования...'
//     },
//     {
//         title: 'Доставка по всему миру',
//         info: 'Вы можете получить нашу продукцию в кратчайшие сроки в любую точку земного шара.'
//     },
//     {
//         title: 'Гарантия качества',
//         info: 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции.'
//     },
//     {
//         title: 'Удобство в использовании',
//         info: 'Наши изделия из меди имеют уникальный дизайн, который разрабатывался нами с целью получения максимальной...'
//     },
//     {
//         title: 'Забота об окружающей среде',
//         info: 'От 2 до 5% от стоимости каждого приобретенного товара в нашем магазине мы направляем на защиту....'
//     },
// ]
// let arrSale = [
//     {
//         img: 'чайник сале.jpg',
//         title: 'Медный чайник с фарфоровой ручкой',
//         price: '1 953 грн',
//         priceSale: '1 953 грн'
//     },
//     {
//         img: 'ник сале.jpg',
//         title: 'Медный чайник с фарфоровой ручкой',
//         price: '1 953 грн',
//         priceSale: '1 953 грн'
//     },
//     {
//         img: 'чай сале.jpg',
//         title: 'Медный чайник с фарфоровой ручкой',
//         price: '1 953 грн',
//         priceSale: '1 953 грн'
//     }
// ]
let container = document.querySelector('.container')
let background = document.createElement('div')
let title = document.createElement('p')
let block = document.createElement('div')
let left = document.createElement('div')
let right = document.createElement('div')
let dots = document.createElement('div')
let btn = document.createElement('button')

background.classList.add('background')
title.classList.add('title')
title.innerHTML = 'мы рекомендуем'
block.classList.add('block')
left.classList.add('left')
right.classList.add('right')
dots.classList.add('dots')
btn.classList.add('btn')
btn.innerHTML = 'Перейти в каталог'

container.append(background,title,block)
block.append(left,right,dots,btn)

const reload = (arr) => {
    for(let item of arr) {
        let wrap = document.createElement('div')
        let teaPort = document.createElement('img')
        let miniWrap = document.createElement('div')
        let title = document.createElement('p')
        let price = document.createElement('p')
    
        wrap.classList.add('wrap')
        teaPort.classList.add('teaPort')
        teaPort.src = `./img/${item.img}`
        miniWrap.classList.add('miniWrap')
        title.classList.add('text')
        title.innerHTML = item.title
        price.classList.add('price')
        price.innerHTML = item.price
    
        block.append(wrap)
        wrap.append(teaPort,miniWrap)
        miniWrap.append(title,price)
    }
}
let wrapper = document.createElement('div')
let title2 = document.createElement('p')
let block2 = document.createElement('div')
let left2 = document.createElement('div')
let right2 = document.createElement('div')
let dots2 = document.createElement('div')
let btn2 = document.createElement('button')

wrapper.classList.add('wrapper')
title2.classList.add('title2')
title2.innerHTML = 'Скидки'
block2.classList.add('block2')
left2.classList.add('left2')
right2.classList.add('right2')
dots2.classList.add('dots2')
btn2.classList.add('btn2')
btn2.innerHTML = 'Перейти в каталог'

container.append(wrapper)
wrapper.append(title2,block2)
block2.append(left2,right2,dots2,btn2)
const reload2 =(arrSale) => {
    for(let item of arrSale) {
        let wrap1 = document.createElement('div')
        let teaPort1 = document.createElement('img')
        let miniWrap1 = document.createElement('div')
        let title1 = document.createElement('p')
        let price1 = document.createElement('p')
        let oldPrice = document.createElement('p')
        let old = document.createElement('div')
    
        wrap1.classList.add('wrap1')
        teaPort1.classList.add('teaPort1')
        teaPort1.src = `./img/${item.img}`
        miniWrap1.classList.add('miniWrap1')
        title1.classList.add('text1')
        title1.innerHTML = item.title
        price1.classList.add('price1')
        price1.innerHTML = item.price
        oldPrice.classList.add('old')
        oldPrice.innerHTML = item.priceSale
        old.classList.add('oldPrice')
    
        block2.append(wrap1)
        wrap1.append(teaPort1,miniWrap1)
        miniWrap1.append(title1,old)
        old.append(oldPrice,price1)
    }
}
let miniBlock = document.createElement('div')
let left3 = document.createElement('div')
let right3 = document.createElement('div')
let dots3 = document.createElement('div')
let about = document.createElement('p')

miniBlock.classList.add('miniBlock')
left3.classList.add('left3')
right3.classList.add('right3')
dots3.classList.add('dots3')
about.classList.add('aboutUs')
about.innerHTML = 'Что думают о нас'

container.append(miniBlock)
miniBlock.append(about,left3,right3,dots3)

for(let i = 1; i <= 3; i++) {
    let items = document.createElement('div')
    let ivan = document.createElement('div')
    let ivanName = document.createElement('p')
    let ivanInfo = document.createElement('p')
    let ivanData = document.createElement('p')

    items.classList.add('items')
    ivan.classList.add('ivan')
    ivanName.classList.add('ivanName')
    ivanName.innerHTML = 'Иван Иванов'
    ivanInfo.classList.add('ivanInfo')
    ivanInfo.innerHTML = 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. '
    ivanData.classList.add('ivanData')
    ivanData.innerHTML = '20.10.21'

    miniBlock.append(items)
    items.append(ivan,ivanName,ivanInfo,ivanData)

}
let bigWrap = document.createElement('div')
let lastTitle = document.createElement('p')
let grid = document.createElement('div')

bigWrap.classList.add('bigWrap')
lastTitle.classList.add('lastTitle')
lastTitle.innerHTML = 'Почему выбирают нас'
grid.classList.add('grid')

container.append(bigWrap)
bigWrap.append(lastTitle,grid)

const reload3 = (array) => {
    for(let item of array) {
        let gridBlock = document.createElement('div')
        let gridImg = document.createElement('div')
        let gridTitle = document.createElement('p')
        let gridInfo = document.createElement('p')
        let gridHref = document.createElement('div')
    
        gridBlock.classList.add('gridBlock')
        gridImg.classList.add('gridImg')
        gridTitle.classList.add('gridTitle')
        gridTitle.innerHTML = item.title
        gridInfo.classList.add('gridInfo') 
        gridInfo.innerHTML = item.info
        gridHref.classList.add('gridHref')
    
        grid.append(gridBlock)
        gridBlock.append(gridImg,gridTitle,gridInfo,gridHref)
    }
}
let bottom = document.createElement('div')
bottom.classList.add('bottom')
container.append(bottom)

let imgBlock = document.createElement('div')
let copper = document.createElement('div')
let copperText = document.createElement('p')
let a = document.createElement('p')

imgBlock.classList.add('imgBlock')
copper.classList.add('copper')
copperText.classList.add('copperText')
copperText.innerHTML = '© 2021 “Copper Pro” <br> Все права защищенны'
a.classList.add('a')
a.innerHTML = 'Политика конфиденциальности'

bottom.append(imgBlock)
imgBlock.append(copper,copperText,a)

let textBlock = document.createElement('div')
let textTitle = document.createElement('p')
let textInfo = document.createElement('p')
let textInfo2 = document.createElement('p')
let textInfo3 = document.createElement('p')
let textInfo4 = document.createElement('p')
let textInfo5 = document.createElement('p')

textBlock.classList.add('textBlock')
textTitle.classList.add('texttitle')
textTitle.innerHTML = 'Навигация'
textInfo.classList.add('textclick')
textInfo.innerHTML = 'Каталог'
textInfo2.classList.add('textclick')
textInfo2.innerHTML = 'Новости'
textInfo3.classList.add('textclick')
textInfo3.innerHTML = 'Доставка'
textInfo4.classList.add('textclick')
textInfo4.innerHTML = 'О нас'
textInfo5.classList.add('textclick')
textInfo5.innerHTML = 'Контакты'

bottom.append(textBlock)
textBlock.append(textTitle,textInfo,textInfo2,textInfo3,textInfo4,textInfo5)

let textBlock2 = document.createElement('div')
let textBlock3 = document.createElement('div')
let textTitle2 = document.createElement('p')
let textInfo6 = document.createElement('p')
let textInfo7 = document.createElement('p')
let textInfo8 = document.createElement('p')
let textInfo9 = document.createElement('p')
let textInfo10 = document.createElement('p')
let textInfo11 = document.createElement('p')
let topImg = document.createElement('div')

textBlock2.classList.add('textBlock2')
textBlock3.classList.add('textBlock3')
textTitle2.classList.add('texttitle')
textTitle2.innerHTML = 'Каталог'
textInfo6.classList.add('textclick')
textInfo6.innerHTML = 'Для эфирных масел'
textInfo7.classList.add('textclick')
textInfo7.innerHTML = 'Для гидролатов'
textInfo8.classList.add('textclick')
textInfo8.innerHTML = 'Медная посуда'
textInfo9.classList.add('textclick')
textInfo9.innerHTML = 'Аксессуары из меди'
textInfo10.classList.add('textclick')
textInfo10.innerHTML = 'Индивидуальный заказ'
textInfo11.classList.add('textclick')
textInfo11.innerHTML = 'Скидки и предложения'
topImg.classList.add('topImg')

bottom.append(textBlock2,textBlock3,topImg)
textBlock2.append(textTitle2,textInfo6,textInfo7,textInfo8,textInfo9,textInfo10,textInfo11)

