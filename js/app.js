let orderMenu = document.getElementById('order-menu');
let mealSelect = document.getElementById('meal-select');
let itemOptions = document.getElementsByClassName('options');
let orderBtn = document.getElementsByClassName( 'order-btn');
let mealSelected = null;
let total = 0;
const option = document.getElementsByClassName('name');
const price = document.getElementsByClassName('option-price');
let totalDisplay = document.getElementById('display-total');
let OrderList = [];
menu = {
  Breakfast:{
      1:["Ham Steak", 13.56, "toast", 2.25, "Fruit", 3.25, "Pancake", 1.75],
      2:["Chicken Fired Steak", 14.56, "Extra Gravy", 2.75, "Fruit", 3.25, "Pancake", 1.75],
      3:["Corn Beef and Hash", 12.23, "toast", 2.25, "Fruit", 3.25, "Pancake", 1.75],
      4:["PanCakes", 9.99, "2 Eggs", 4.15, "Fruit", 3.25, "Bacon", 255.75],
      5:["French Toast", 8.98,"2 Eggs", 4.15, "Fruit", 3.25, "Bacon", 255.75],
      6:["Chef's Feature", 12.52,"toast", 2.25, "Fruit", 3.25, "Pancake", 1.75]
  },
  Lunch:{
      1:["Cheese Burger", 15.50, "Fires", 2.50, "Fruit", 3.25, "O-rings", 3.25],
      2:["2 Tacos", 12.25, "Rice", 2.50, "Beans", 3.50, "Chips", 2.75],
      3:["Sub Sandwich", 7.50, "Chips", 1.25, "Salad", 3.25, "Soup", 3.25],
      4:["Soup and Salad", 8.00, "Sandwich", 4.25, "Taco", 4.25, "Cookie", 1.25 ],
      5:["Cobb Salad", 11.99,"Chips", 1.25, "Fruit", 3.25, "Soup", 3.25 ],
      6:["Chef's Feature", 15.50, "Fires", 2.50, "Fruit", 3.25, "O-rings", 3.25]
  },
  Dinner:{
      1:["Steak", 36.50, "Veggies", 4.50, "Potatoes", 4.50, "Bread", 3.75],
      2:["Tacos", 19.99, "Rice", 4.50, "Beans", 5.50, "Chips", 2.75],
      3:["Pot Roast", 21.25, "Veggies", 4.50, "Potatoes", 4.50, "Bread", 3.75],
      4:["Shrimp Platter", 30.12, "Veggies", 4.50, "Potatoes", 4.50, "Bread", 3.75],
      5:["Fish n Chips", 19.75, "Fires", 4.50, "Fruit", 3.25, "O-rings", 5.25],
      6:["Chef's Feature", 39.99, "Veggies", 4.50, "Potatoes", 4.50, "Bread", 3.75]
  }
};

function buildMenuCard(index, item, price) {
    const itemClass = document.getElementsByClassName('item');
    const priceClass = document.getElementsByClassName('price');
    itemClass[index].innerHTML = item;
    priceClass[index].innerHTML = price;
}
const PlaceOrder = () =>{
   let confrimOrder = document.getElementsByClassName("confirm-order") ;
   let menuWrapper = document.getElementsByClassName("menu-wrapper");
   let greetingClass = document.getElementsByClassName( "greeting");
   let totalFinal = document.getElementsByClassName('final-total');
   let whatWasOrder = document.getElementsByClassName('what-isorder');
   let greetings = ["Thank You For Your Order", "You Rock Thank You", "Wow that order looks Good", "Enjoy Your Order"];
   let indexValue = Math.floor((Math.random() * greetings.length));
   confrimOrder[0].style.display = 'grid';
   menuWrapper[0].style.display = 'none';
   greetingClass[0].innerHTML = greetings[indexValue];
   totalFinal[0].innerHTML = `$${total.toFixed(2)}`;
    for (let i =0; i < OrderList.length; i++){
        whatWasOrder[i].innerHTML = OrderList[i];
    }
 };

const renderBreakfastMenu = () =>{
    let index = 0;
    for (index; index <=5; index++){
        buildMenuCard(index,
            menu.Breakfast[index + 1][0],
            menu.Breakfast[index +1][1]);
    }
};
const breakfast = () => {
    mealSelect.style.display = 'none';
    orderMenu.style.display = 'block';
    document.title = "Breakfast Menu";
    const subHeading = document.getElementsByClassName("sub-heading");
    subHeading[0].innerHTML = "Breakfast Menu";
    subHeading[1].innerHTML = "Please Order From the Breakfast Menu";
    mealSelected = 'Breakfast';
    renderBreakfastMenu();
};
const renderLunchMenu = () =>{
    let index = 0;
    for (index; index <=5; index++){
        buildMenuCard(index,
            menu.Lunch[index + 1][0],
            menu.Lunch[index +1][1]);
    }
};
const lunch = () => {
    mealSelect.style.display = 'none';
    orderMenu.style.display = 'block';
    document.title = "Lunch Menu";
    const subHeading = document.getElementsByClassName("sub-heading");
    subHeading[0].innerHTML = "Lunch Menu";
    subHeading[1].innerHTML = "Please Order From the Lunch Menu";
    mealSelected = 'Lunch';
    renderLunchMenu();
};
const dinner = () => {
    mealSelect.style.display = 'none';
    orderMenu.style.display = 'block';
    document.title = "Dinner Menu";
    const subHeading = document.getElementsByClassName("sub-heading");
    subHeading[0].innerHTML = "Dinner Menu";
    subHeading[1].innerHTML = "Please Order From the Dinner Menu";
    mealSelected = 'Dinner';
    renderDinnerMenu();
};
const renderDinnerMenu = () =>{
    let index = 0;
    for (index; index <=5; index++){
        buildMenuCard(index, menu.Dinner[index + 1][0],
            menu.Dinner[index +1][1]);
    }
};


const orderItem1 = () => {
    orderBtn[0].style.display = 'none';
    itemOptions[0].style.display = 'grid';
    let menuItems = document.querySelectorAll('#item-2, #item-3,#item-4, #item-5, #item-6');
    menuItems[0].style.display = 'none';
    menuItems[1].style.display = 'none';
    menuItems[2].style.display = 'none';
    menuItems[3].style.display = 'none';
    menuItems[4].style.display = 'none';
    if(mealSelected === 'Breakfast'){
        total = menu.Breakfast["1"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["1"][0]);
        option[0].innerHTML = menu.Breakfast["1"][2];
        price[0].innerHTML = menu.Breakfast["1"][3];
        option[1].innerHTML = menu.Breakfast["1"][4];
        price[1].innerHTML = menu.Breakfast["1"][5];
        option[2].innerHTML = menu.Breakfast["1"][6];
        price[2].innerHTML = menu.Breakfast["1"][7];
    }
    if(mealSelected === 'Lunch'){
        total = menu.Lunch["1"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["1"][0]);
        option[0].innerHTML = menu.Lunch["1"][2];
        price[0].innerHTML = menu.Lunch["1"][3];
        option[1].innerHTML = menu.Lunch["1"][4];
        price[1].innerHTML = menu.Lunch["1"][5];
        option[2].innerHTML = menu.Lunch["1"][6];
        price[2].innerHTML = menu.Lunch["1"][7];
    }
    if(mealSelected === 'Dinner'){
        total = menu.Dinner["1"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["1"][0]);
        option[0].innerHTML = menu.Dinner["1"][2];
        price[0].innerHTML = menu.Dinner["1"][3];
        option[1].innerHTML = menu.Dinner["1"][4];
        price[1].innerHTML = menu.Dinner["1"][5];
        option[2].innerHTML = menu.Dinner["1"][6];
        price[2].innerHTML = menu.Dinner["1"][7];
    }
};
const addOne = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["1"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["1"][2]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["1"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["1"][2]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Lunch["1"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["1"][2]);
    }
};
const addTwo = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["1"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["1"][4]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["1"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["1"][4]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["1"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["1"][4]);
    }
};
const addThree = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["1"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["1"][6]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["1"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["1"][6]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["1"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["1"][6]);
    }
};

const orderItem2 = () => {
    orderBtn[1].style.display = 'none';
    itemOptions[1].style.display = 'grid';
    let menuItems = document.querySelectorAll('#item-1, #item-3,#item-4, #item-5, #item-6');
    menuItems[0].style.display = 'none';
    menuItems[1].style.display = 'none';
    menuItems[2].style.display = 'none';
    menuItems[3].style.display = 'none';
    menuItems[4].style.display = 'none';
    if(mealSelected === 'Breakfast'){
        total = menu.Breakfast["2"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["2"][0]);
        option[3].innerHTML = menu.Breakfast["2"][2];
        price[3].innerHTML = menu.Breakfast["2"][3];
        option[4].innerHTML = menu.Breakfast["2"][4];
        price[4].innerHTML = menu.Breakfast["2"][5];
        option[5].innerHTML = menu.Breakfast["2"][6];
        price[5].innerHTML = menu.Breakfast["2"][7];
    }
    if(mealSelected === 'Lunch'){
        total = menu.Lunch["2"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["2"][0]);
        option[3].innerHTML = menu.Lunch["2"][2];
        price[3].innerHTML = menu.Lunch["2"][3];
        option[4].innerHTML = menu.Lunch["2"][4];
        price[4].innerHTML = menu.Lunch["2"][5];
        option[5].innerHTML = menu.Lunch["2"][6];
        price[5].innerHTML = menu.Lunch["2"][7];
    }
    if(mealSelected === 'Dinner'){
        total = menu.Dinner["2"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["2"][0]);
        option[3].innerHTML = menu.Dinner["2"][2];
        price[3].innerHTML = menu.Dinner["2"][3];
        option[4].innerHTML = menu.Dinner["2"][4];
        price[4].innerHTML = menu.Dinner["2"][5];
        option[5].innerHTML = menu.Dinner["2"][6];
        price[5].innerHTML = menu.Dinner["2"][7];
    }
};
const addFour = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["2"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["2"][2]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["2"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["2"][2]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["2"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["2"][2]);

    }
};
const addFive = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["2"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["2"][4]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["2"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["2"][4]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["2"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["2"][4]);
    }
};
const addSix = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["2"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["2"][6]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["2"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["2"][5]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["2"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["2"][5]);
    }
};

const orderItem3 = () => {
    orderBtn[2].style.display = 'none';
    itemOptions[2].style.display = 'grid';
    let menuItems = document.querySelectorAll('#item-2, #item-1,#item-4, #item-5, #item-6');
    menuItems[0].style.display = 'none';
    menuItems[1].style.display = 'none';
    menuItems[2].style.display = 'none';
    menuItems[3].style.display = 'none';
    menuItems[4].style.display = 'none';
    if(mealSelected === 'Breakfast'){
        total = menu.Breakfast["3"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["3"][0]);
        option[6].innerHTML = menu.Breakfast["3"][2];
        price[6].innerHTML = menu.Breakfast["3"][3];
        option[7].innerHTML = menu.Breakfast["3"][4];
        price[7].innerHTML = menu.Breakfast["3"][5];
        option[8].innerHTML = menu.Breakfast["3"][6];
        price[8].innerHTML = menu.Breakfast["3"][7];
    }
    if(mealSelected === 'Lunch'){
        total = menu.Lunch["3"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["3"][0]);
        option[6].innerHTML = menu.Lunch["3"][2];
        price[6].innerHTML = menu.Lunch["3"][3];
        option[7].innerHTML = menu.Lunch["3"][4];
        price[7].innerHTML = menu.Lunch["3"][5];
        option[8].innerHTML = menu.Lunch["3"][6];
        price[8].innerHTML = menu.Lunch["3"][7];
    }
    if(mealSelected === 'Dinner'){
        total = menu.Dinner["3"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["3"][0]);
        option[6].innerHTML = menu.Dinner["3"][2];
        price[6].innerHTML = menu.Dinner["3"][3];
        option[7].innerHTML = menu.Dinner["3"][4];
        price[7].innerHTML = menu.Dinner["3"][5];
        option[8].innerHTML = menu.Dinner["3"][6];
        price[8].innerHTML = menu.Dinner["3"][7];
    }
};
const addSeven = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["3"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["3"][2]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["3"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["3"][2]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["3"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["3"][2]);
    }
};
const addEight = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["3"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["3"][4]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["3"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["3"][4]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["3"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["3"][4]);
    }
};
const addNine = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["3"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["3"][6]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["3"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["3"][6]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["3"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["3"][6]);
    }
};

const orderItem4 = () => {
    orderBtn[3].style.display = 'none';
    itemOptions[3].style.display = 'grid';
    let menuItems = document.querySelectorAll('#item-2, #item-3,#item-1, #item-5, #item-6');
    menuItems[0].style.display = 'none';
    menuItems[1].style.display = 'none';
    menuItems[2].style.display = 'none';
    menuItems[3].style.display = 'none';
    menuItems[4].style.display = 'none';
    if(mealSelected === 'Breakfast'){
        total = menu.Breakfast["4"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["4"][0]);
        option[9].innerHTML = menu.Breakfast["4"][2];
        price[9].innerHTML = menu.Breakfast["4"][3];
        option[10].innerHTML = menu.Breakfast["4"][4];
        price[10].innerHTML = menu.Breakfast["4"][5];
        option[11].innerHTML = menu.Breakfast["4"][6];
        price[11].innerHTML = menu.Breakfast["4"][7];
    }
    if(mealSelected === 'Lunch'){
        total = menu.Lunch["4"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["4"][0]);
        option[9].innerHTML = menu.Lunch["4"][2];
        price[9].innerHTML = menu.Lunch["4"][3];
        option[10].innerHTML = menu.Lunch["4"][4];
        price[10].innerHTML = menu.Lunch["4"][5];
        option[11].innerHTML = menu.Lunch["4"][6];
        price[11].innerHTML = menu.Lunch["4"][7];
    }
    if(mealSelected === 'Dinner'){
        total = menu.Dinner["4"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["4"][0]);
        option[9].innerHTML = menu.Dinner["4"][2];
        price[9].innerHTML = menu.Dinner["4"][3];
        option[10].innerHTML = menu.Dinner["4"][4];
        price[10].innerHTML = menu.Dinner["4"][5];
        option[11].innerHTML = menu.Dinner["4"][6];
        price[11].innerHTML = menu.Dinner["4"][7];
    }
};
const addTen = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["4"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["4"][2]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["4"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["4"][2]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["4"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["4"][2]);
    }
};
const addEleven = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["4"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["4"][4]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["4"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["4"][4]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["4"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["4"][4]);
    }
};
const addTwelve = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["4"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["4"][6]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["4"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["4"][6]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["4"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["4"][6]);
    }
};

const orderItem5 = () => {
    orderBtn[4].style.display = 'none';
    itemOptions[4].style.display = 'grid';
    let menuItems = document.querySelectorAll('#item-2, #item-3,#item-4, #item-1, #item-6');
    menuItems[0].style.display = 'none';
    menuItems[1].style.display = 'none';
    menuItems[2].style.display = 'none';
    menuItems[3].style.display = 'none';
    menuItems[4].style.display = 'none';
    if(mealSelected === 'Breakfast'){
        total = menu.Breakfast["5"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["5"][0]);
        option[12].innerHTML = menu.Breakfast["5"][2];
        price[12].innerHTML = menu.Breakfast["5"][3];
        option[13].innerHTML = menu.Breakfast["5"][4];
        price[13].innerHTML = menu.Breakfast["5"][5];
        option[14].innerHTML = menu.Breakfast["5"][6];
        price[14].innerHTML = menu.Breakfast["5"][7];
    }
    if(mealSelected === 'Lunch'){
        total = menu.Lunch["5"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["5"][0]);
        option[12].innerHTML = menu.Lunch["5"][2];
        price[12].innerHTML = menu.Lunch["5"][3];
        option[13].innerHTML = menu.Lunch["5"][4];
        price[13].innerHTML = menu.Lunch["5"][5];
        option[14].innerHTML = menu.Lunch["5"][6];
        price[14].innerHTML = menu.Lunch["5"][7];
    }
    if(mealSelected === 'Dinner'){
        total = menu.Dinner["5"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["5"][0]);
        option[12].innerHTML = menu.Dinner["5"][2];
        price[12].innerHTML = menu.Dinner["5"][3];
        option[13].innerHTML = menu.Dinner["5"][4];
        price[13].innerHTML = menu.Dinner["5"][5];
        option[14].innerHTML = menu.Dinner["5"][6];
        price[14].innerHTML = menu.Dinner["5"][7];
    }
};
const addThreeteen = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["5"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["5"][2]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["5"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["5"][2]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["5"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["5"][2]);
    }
};
const addFourteen = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["5"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["5"][4]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["5"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["5"][4]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["5"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["5"][4]);
    }
};
const addFiveTeen = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["5"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["5"][6]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["5"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["5"][6]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["5"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["5"][6]);
    }
};

const orderItem6 = () => {
    orderBtn[5].style.display = 'none';
    itemOptions[5].style.display = 'grid';
    let menuItems = document.querySelectorAll('#item-2, #item-3,#item-4, #item-5, #item-1');
    menuItems[0].style.display = 'none';
    menuItems[1].style.display = 'none';
    menuItems[2].style.display = 'none';
    menuItems[3].style.display = 'none';
    menuItems[4].style.display = 'none';
    if(mealSelected === 'Breakfast'){
        total = menu.Breakfast["6"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["6"][0]);
        option[15].innerHTML = menu.Breakfast["6"][2];
        price[15].innerHTML = menu.Breakfast["6"][3];
        option[16].innerHTML = menu.Breakfast["6"][4];
        price[16].innerHTML = menu.Breakfast["6"][5];
        option[17].innerHTML = menu.Breakfast["6"][6];
        price[17].innerHTML = menu.Breakfast["6"][7];
    }
    if(mealSelected === 'Lunch'){
        total = menu.Lunch["6"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["6"][0]);
        option[15].innerHTML = menu.Lunch["6"][2];
        price[15].innerHTML = menu.Lunch["6"][3];
        option[16].innerHTML = menu.Lunch["6"][4];
        price[16].innerHTML = menu.Lunch["6"][5];
        option[17].innerHTML = menu.Lunch["6"][6];
        price[17].innerHTML = menu.Lunch["6"][7];
    }
    if(mealSelected === 'Dinner'){
        total = menu.Dinner["6"][1];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["6"][0]);
        option[15].innerHTML = menu.Dinner["6"][2];
        price[15].innerHTML = menu.Dinner["6"][3];
        option[16].innerHTML = menu.Dinner["6"][4];
        price[16].innerHTML = menu.Dinner["6"][5];
        option[17].innerHTML = menu.Dinner["6"][6];
        price[17].innerHTML = menu.Dinner["6"][7];
    }
};
const addSixteen = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["6"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["6"][2]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["6"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["6"][2]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["6"][3];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["6"][2]);
    }
};
const addSevenTeen = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["6"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["6"][4]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["6"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["6"][4]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["6"][5];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["6"][4]);
    }
};
const addEightTeen = () => {
    if(mealSelected === 'Breakfast'){
        total = total + menu.Breakfast["6"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Breakfast["6"][6]);
    }
    if(mealSelected === 'Lunch'){
        total = total + menu.Lunch["6"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Lunch["6"][6]);
    }
    if(mealSelected === 'Dinner'){
        total = total + menu.Dinner["6"][7];
        totalDisplay.innerText = `$${total.toFixed(2)}`;
        OrderList.push(menu.Dinner["6"][6]);
    }
};




