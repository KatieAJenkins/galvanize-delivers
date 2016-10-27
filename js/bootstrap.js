"use strict";
$( document ).ready(function() {
var shoppingCart = $("#shoppingCart>tbody");


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
    price: 14.99
  }

};


//add event listener to add to order buttons
$(".add" ).click( function() {
var id = event.target.id;

//append item name to shoppingCart
  if(id === "burger" ) {
    shoppingCart.append('<tr><td>' + menuItems.burger.name + '</td><td>' + menuItems.burger.price + '</td></tr>');

  } else if (id === "pie" ) {
    shoppingCart.append('<tr><td>' + menuItems.pie.name + '</td><td>' + menuItems.pie.price + '</td></tr>');

  } else if (id === "swine" ) {
    shoppingCart.append('<tr><td>' + menuItems.swine.name + '</td><td>' + menuItems.swine.price + '</td></tr>');

  } else if (id === "biscuit" ) {
    shoppingCart.append('<tr><td>' + menuItems.biscuit.name + '</td><td>' + menuItems.biscuit.price + '</td></tr>');
    
  } else {
    console.log("not burger");
    }
  });
});



//don't use replace with in calculations
