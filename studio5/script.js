angular.module('app', [])
.controller('appCtrl', function($scope) {
// define list of foods
$scope.foods = [
    
     {
    food:"Brioche",

    type:"Bread"
  },
  {
    food:"Onions",

    type:"Vegetable"
  },
  {
    food:"Tomatoes",

    type:"Fruit"
  },
     {
    food:"Ciabatta",

    type:"Bread"
  },
   {
    food:"Chicken",

    type:"Meat"
  },
  {
    food:"Potatoes",

    type:"Vegetable"
  },
   {
    food:"Cabbage",

    type:"Vegetable"
  },
  {
    food:"Pork",

    type:"Meat"
  },
     {
    food:"Pita",

    type:"Bread"
  },
     {
    food:"Banana",

    type:"Fruit"
  },
    {
    food:"Beef",

    type:"Meat"
  },
  {
    food:"Spinach",

    type:"Vegetable"
  },
     {
    food:"Pineapple",

    type:"Fruit"
  },
  {
    food:"Veal",

    type:"Meat"
  },
   {
    food:"Spinach",

    type:"Vegetable"
  },
     {
    food:"Strawberry",

    type:"Fruit"
  },
     {
    food:"Sourdough",

    type:"Bread"
  },
   {
    food:"Spinach",

    type:"Vegetable"
  },
];

// define list of items
$scope.foodType = ["Fruit","Vegetable","Meat","Bread"];

// initialize filter object
$scope.filter = {};

// reset the filter
$scope.resetFilter = function() {
  // set filter object as blank
  $scope.filter = {}; 
}
});