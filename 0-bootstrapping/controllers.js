function PhoneListController($scope) {

  $scope.fruits = [
    {
      "name":"Apple",
      "taste":"Good",
      "colour":"red",
      "tasteRating":1
    },
    {
      "name":"Mango",
      "taste":"Awesome",
      "colour":"orange",
      "tasteRating":2
    },
    {
      "name":"Papaya",
      "taste":"Yuck",
      "color":"orange",
      "tasteRating":0
    }
  ];

  $scope.orderProp = "name"

}
