// Напишіть функцію printProductInfo, яка приймає об'єкт product в якості параметра та друкує в консоль інформацію про цей продукт в наступному форматі:

const product = {
name: 'Ноутбук Lenovo IdeaPad 3',
category: 'laptop',
available: true,
price : 15000,
};

function printProductInfo(product){
    const {name, category, available, price} = product;
    console.log(`Name: ${name}`);
    console.log(`Category: ${category}`);
    console.log(`Availability: ${available}`);
    console.log(`Price: ${price}`);
}

printProductInfo(product);

// Назва: Ноутбук Lenovo IdeaPad 3
// Категорія: Ноутбуки
// Доступність: Так
// Ціна: 15000 грн


// Реалізуйте цю функцію, використовуючи деструктуризацію для отримання необхідних полів з об'єкту product.
