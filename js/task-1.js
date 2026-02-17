const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('.item');
console.log(`Numbers of ategories : ${categories.length}`);
categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('ul li').length;
    console.log(`Category : ${title}`);
    console.log(`Elemebts : ${elements}`)
});