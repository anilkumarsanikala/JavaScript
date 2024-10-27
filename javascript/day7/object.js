// Create an object person with properties firstName, lastName, and age. Then:
// Access and print the firstName property.
// Add a new property city with the value "New York" and print the updated object.


// let person={
//     firstName:"anilkumar",
//     lastName:"sanikala",
//     age:23
// }
// console.log(Object.keys(person)[0]);
// person.city="New York";
// console.log(person);


// Create an object product with properties name, price, and inStock. Then:
// Modify the price property to a new value.
// Delete the inStock property from the object and print the updated object.

// const product={
//     name:"pepsi",
//     price:45,
//     inStock:"yes"
// }
// product.price=65;
// console.log(product);
// delete product.inStock;
// console.log(product);

// Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// Add a new genre scienceFiction with a list of two books.
// Access and print the first book in the fantasy genre.
// Delete the mystery genre from the object.


// var library = {
//     fantasy: {
//         book1: [
//             {
//                 name1: "the blood of enora"
//             },
//             {
//                 name2: "crown of ashes",
//             }
//         ]
//     },
//     mystery: {
//         book2: [
//             {name3: "the girl on the train"},
//             { name4: "killers of the certain age"}
//         ]
//     }
// }
// console.log(library);
// library.scienceFiciton={
//     book3:[

//            { name5:"interstellar"},
//             {name6:"the quantam pardox"}

//     ]
// }
// console.log(library);
// console.log(library.fantasy.book1[0]);
// delete library.mystery;
// console.log(library);



// 4.Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// Freeze the user object using Object.freeze().
// Try to change the email property and check if the object is frozen using Object.isFrozen().
// Add a new property phone to the user object and observe the result.

// let user={
//     username:"anilkumar",
//     email:"anil@gmail.com",
//     address:{
//         city:"hyderabad",
//         state:"telangana",
//         zip:518501
//     }
// }
// console.log(user);
// console.log(Object.freeze(user));
// user.email="kumar@gmail.com";
// console.log(user);
// console.log(Object.isFrozen(user));
// user.phone=1234567890;
// console.log(user);

// 5.Create an object car with properties make, model, and price. Then:
// Seal the object using Object.seal().
// Try to delete the make property and check if the object is sealed using Object.isSealed().
// Modify the price property, and check if the object is still extensible using Object.isExtensible()

// const car={
//     make:"BMW",
//     model:"x7",
//     price:5000000
// }
// console.log(car);
// console.log(Object.seal(car));
// delete car.make;
// console.log(car);
// console.log(Object.isSealed(car));
// car.price=123456788;
// console.log(car);
// console.log(Object.isExtensible(car));


const store = {
    name: "SuperMart",
    products: {
        electronics: {
            phones: {
                apple: {
                    iPhoneX: { price: 999, stock: 20 },
                    iPhone12: { price: 1099, stock: 15 },
                },
                samsung: {
                    galaxyS21: { price: 799, stock: 25 },
                    galaxyNote20: { price: 999, stock: 10 },
                },
            },
            laptops: {
                dell: {
                    XPS13: { price: 1200, stock: 10 },
                    Inspiron15: { price: 800, stock: 30 },
                },
                hp: {
                    SpectreX360: { price: 1300, stock: 5 },
                    Pavilion15: { price: 750, stock: 20 },
                },
            },
        },
        groceries: {
            fruits: {
                apples: { price: 2, stock: 100 },
                bananas: { price: 1, stock: 150 },
            },
            vegetables: {
                carrots: { price: 1.5, stock: 200 },
                spinach: { price: 1, stock: 100 },
            },
        },
    },
};
console.log(store.products.groceries.vegetables.spinach["stock"]);
console.log(store.products.electronics.laptops.hp.Pavilion15["price"]);

