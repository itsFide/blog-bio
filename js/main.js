// Получение родителя тегов
let filterlist = document.querySelector('.blog-filter-list');
// Получение каждого тега, т.е li элемент
let filterItem = filterlist.childNodes;
// Получение всех статей
//let newsItem = document.querySelectorAll('.news-item');
// Получение обёртки статей
let newsWrapper = document.querySelector('.news-items');
//filterItem.forEach((event)=>{
//    event.addEventListener('click', ()=>{
//        event.classList.toggle('active');
//        
//            // Получение атрибута data tag у li списка
//            let itemAttr = event.getAttribute('data-tag');
//            // Поиск статей с таким же классом
//            let resultItem = document.querySelectorAll(`.${itemAttr}`)
//            
//            resultItem.forEach((elem)=>{
//                newsItem.forEach((e)=>{
//                    // Скрываем все статьи    
//                })
//                // Нужную статью показываем
//                elem.style.display = 'block';
//            })
//       
//            
//        
//       
//    })
//})


// массив, в котором нужно произвести фильтрацию

let array = [
    {
      category:        ['interview'],
      productCategory: ['interview',]
    }, {
      category:        ['run'],
      productCategory: ['run',]
    },
    {
      category:        ['bikesport'],
      productCategory: ['bikesport',]
    },
    {
      category:        ['nutritionists'],
      productCategory: ['nutritionists',]
    },
    {
      category:        ['interview'],
      productCategory: ['interview',]
    },
    {
      category:        ['types of sports'],
      productCategory: ['types of sports',]
    },
    {
      category:        ['psyhology'],
      productCategory: ['psyhology',]
    },
    {
      category:        ['different'],
      productCategory: ['different',]
    },
    {
      category:        ['medicine'],
      productCategory: ['medicine',]
    },
    {
      category:        ['swimming'],
      productCategory: ['swimming',]
    },
    {
      category:        ['nutritionology'],
      productCategory: ['nutritionology',]
    }
  ];
  
// фильтр
let  keys = [
  {title: 'interview', selected: false},
  {title: 'bikesport', selected: false}, 
  {title: 'run', selected: false},
  {title: 'nutritionists', selected: false},
  {title: 'types of sports', selected: false},
  {title: 'psyhology', selected: false},
  {title: 'different', selected: false},
  {title: 'medicine', selected: false},
  {title: 'swimming', selected: false},
  {title: 'nutritionology', selected: false}
];



filterItem.forEach((event)=>{
  event.addEventListener('click', ()=>{
    // Получение атрибута data-tag
      let itemAttr = event.getAttribute('data-tag');
      event.classList.toggle('active')
      // Проверка, если категория активна
      if(event.classList.contains('active')){
        for(let i = 0; i < keys.length; i++){
          // Если имя ключа и значение атрибута data-tag совпадают, то selected = true
          if(keys[i].title == itemAttr){
            keys[i].selected = true;
            // выбранные значения фильтра 
            let keysSelectedFilter = keys.filter(i => i.selected).map(i => i.title)
            let result = array.filter(i => 
              i.productCategory.some(k =>
                keysSelectedFilter.includes(k)
              )
            )
            // поиск всех статей
            let newsItem = document.querySelectorAll(`.news-item`)
            newsItem.forEach((event)=>{
              // Скрываем каждую
              event.style.display = 'none'
            })
            result.forEach((e)=>{
              // Находим нужны статьи исходя из функции result
              let newsItemCurrent = document.querySelectorAll(`.${e.category[0]}`)
              // Отображаем эти статьи
              newsItemCurrent.forEach((event)=>{
                event.style.display = 'block'
              })
            })
          } 
        }
      } else{
        for(let i = 0; i < keys.length; i++){
          if(keys[i].title == itemAttr){
            keys[i].selected = false;
            console.log(keys[i]);
            // выбранные значения фильтра 
            let keysSelectedFilter = keys.filter(i => i.selected).map(i => i.title)
            let result = array.filter(i => 
              i.productCategory.some(k =>
                keysSelectedFilter.includes(k)
              )
            )
            let newsItem = document.querySelectorAll(`.news-item`)
            newsItem.forEach((event)=>{
              event.style.display = 'none'
            })
            result.forEach((e)=>{

              let newsItemCurrent = document.querySelectorAll(`.${e.category[0]}`)

              newsItemCurrent.forEach((event)=>{
                event.style.display = 'block'
              })
            })
          } 
        }
      }
  })
})
// console.log(keysSelectedFilter, result);