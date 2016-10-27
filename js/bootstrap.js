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


//add event listener to add to order buttons
$(".add" ).click( function() {
var id = event.target.id;

//append item name to shoppingCart
    if(id === "burger" ) {
      //add foodItems to shoppingCart
      shoppingCart.append('<tr><td>' + menuItems.burger.name + '</td><td>' + menuItems.burger.price + '</td></tr>');
      //add prices into subtotalField

      var burgerSubTotal = parseFloat(toString(subtotalField.text(menuItems.burger.price)));


    } else if (id === "pie" ) {
      shoppingCart.append('<tr><td>' + menuItems.pie.name + '</td><td>' + menuItems.pie.price + '</td></tr>');

      var pieSubTotal = parseFloat(toString(subtotalField.text(menuItems.pie.price)));


    } else if (id === "swine" ) {
      shoppingCart.append('<tr><td>' + menuItems.swine.name + '</td><td>' + menuItems.swine.price + '</td></tr>');
      subtotalField.append('<td>' + menuItems.swine.price + "</td>");

      var swineSubTotal = parseFloat(toString(subtotalField.text(menuItems.swine.price)));


    } else if (id === "biscuit" ) {
      shoppingCart.append('<tr><td>' + menuItems.biscuit.name + '</td><td>' + menuItems.biscuit.price + '</td></tr>');
      var biscuitSubTotal = parseFloat(toString(subtotalField.text(menuItems.biscuit.price)));
    }
  });


//dynamically update subtotal//need var subtotal = 0;

//calculate tax on subtotal

//dynamically update tax in tax field

//add tax and subtotal together for total field

//show sum of tax and subtotal in total field


//don't use replace with in calculations

});
