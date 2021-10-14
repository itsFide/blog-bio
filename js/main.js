// Получение родителя тегов
let filterlist = document.querySelector('.blog-filter-list');
// Получение каждого тега, т.е li элемент
let filterItem = filterlist.childNodes;
// Получение всех статей
let newsItem = document.querySelectorAll('.news-item');
// Получение обёртки статей
let newsWrapper = document.querySelector('.news-items');
filterItem.forEach((event)=>{
    event.addEventListener('click', ()=>{
        event.classList.toggle('active');
        
            // Получение атрибута data tag у li списка
            let itemAttr = event.getAttribute('data-tag');
            // Поиск статей с таким же классом
            let resultItem = document.querySelectorAll(`.${itemAttr}`)
            
            resultItem.forEach((elem)=>{
                newsItem.forEach((e)=>{
                    // Скрываем все статьи    
                })
                // Нужную статью показываем
                elem.style.display = 'block';
            })
       
            
        
       
    })
})