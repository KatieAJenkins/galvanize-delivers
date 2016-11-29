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

//running subtotal
var runningSubtotal = 0;


//add event listener to add to order buttons
$(".add" ).click( function() {
var id = event.target.id;
console.log(id);
var burgerName = menuItems.burger.name;
var burgerPrice = menuItems.burger.price;
console.log(burgerPrice);

//add prices into subtotalField
var price = $(".price").html();
console.log(price);

runningSubtotal += parseFloat(price);
console.log(runningSubtotal);
subtotalField.text(runningSubtotal);

//append item name to shoppingCart on Order bttn
    if(id === "burger" ) {
      shoppingCart.append('<tr><td>' + burgerName + '</td><td>' + burgerPrice + '</td></tr>');

    } else if (id === "pie" ) {
      shoppingCart.append('<tr><td>' + menuItems.pie.name + '</td><td>' + menuItems.pie.price + '</td></tr>');
      // subtotalField.append('<td>' + menuItems.pie.price + "</td>");

    } else if (id === "swine" ) {
      shoppingCart.append('<tr><td>' + menuItems.swine.name + '</td><td>' + menuItems.swine.price + '</td></tr>');
      subtotalField.append('<td>' + menuItems.swine.price + "</td>");

    } else if (id === "biscuit" ) {
      shoppingCart.append('<tr><td>' + menuItems.biscuit.name + '</td><td>' + menuItems.biscuit.price + '</td></tr>');
      subtotalField.append('<td>' + menuItems.biscuit.price + "</td>");
    }
  });
});

//dynamically update subtotal//need var subtotal = 0;

//calculate tax on subtotal

//dynamically update tax in tax field

//add tax and subtotal together for total field

//show sum of tax and subtotal in total field

//don't use replace with in calculations
