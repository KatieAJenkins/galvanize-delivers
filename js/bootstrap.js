"use strict";
$( document ).ready(function() {
var shoppingCart = $("#shoppingCart>tbody");


// menu object
var menuItems = {
  burger : {
    name: "Royale with Cheese",
    price: 8.99
  }
};
// console.log(menuItems);
// });

//add event listener to add to order buttons
$(".add" ).click( function() {
var id = event.target.id;

//append item name to table
  if(id === "burger" ) {
    shoppingCart.append('<tr><td>' + menuItems.burger.name + '</td><td>' + menuItems.burger.price + '</td></tr>');

  } else {
    console.log("not burger");
  }
});
});



//don't use replace with in calculations
