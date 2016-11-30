"use strict";
$( document ).ready(function() {
var shoppingCart = $("#shoppingCart>tbody");
var subtotalField = $("#subtotal");
// (console.log(subtotalField));

// menuItems Object
var menuItems = {
  burger : {
    name: "Royale with Cheese",
    price: 8.99
  },

  pie : {
    name: "Arugula Pie",
    price: 11.99
  },

  swine : {
    name: "Smoked Swine",
    price: 14.99
  },

  biscuit : {
    name: "Ice Cream Biscuit",
    price: 7.99
  }
};

//running subtotal outside of event listener
var runningSubtotal = 0;

//add event listener to add to order buttons
$(".add" ).click(function(event) {
  console.log(event);
  console.log(this);

  console.log(($("#burger").siblings("h5").text()));

  // console.log($(".price").val());
// var id = event.target.id;
// console.log(id);

var burgerName = menuItems.burger.name;
var burgerPrice = menuItems.burger.price;
// console.log(burgerPrice);
var pieName = menuItems.pie.name;
// console.log(pieName);
var piePrice = menuItems.pie.price;
// console.log(piePrice);
var swinePrice = menuItems.swine.price;
// console.log(swinePrice);
var swineName = menuItems.swine.name;
// console.log(swineName);

//find price of food item
// var price = $(".price").html();
// console.log(price);

//add price to runningSubtotal
runningSubtotal += parseFloat(price);
//add runningSubtotal to screen
subtotalField.text(runningSubtotal);
// console.log(runningSubtotal);

//append item name to shoppingCart on Order bttn
    if(id === "burger" ) {
      shoppingCart.append('<tr><td>' + burgerName + '</td><td>' + burgerPrice + '</td></tr>');

    } else if (id === "pie" ) {
      shoppingCart.append('<tr><td>' + pieName + '</td><td>' + piePrice + '</td></tr>');

    } else if (id === "swine" ) {
      shoppingCart.append('<tr><td>' + menuItems.swine.name + '</td><td>' + menuItems.swine.price + '</td></tr>');

    } else if (id === "biscuit" ) {
      shoppingCart.append('<tr><td>' + menuItems.biscuit.name + '</td><td>' + menuItems.biscuit.price + '</td></tr>');
    }
  });
});

//calculate tax on subtotal

//dynamically update tax in tax field

//add tax and subtotal together for total field

//show sum of tax and subtotal in total field

//don't use replace with in calculations
