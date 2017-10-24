angular.module('directoryApp', [])
  .controller('directoryController', function() {

    var dirList = this;

    dirList.toggle = false;

    dirList.list = [
      {name: 'Scott', age: 29, img:'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'},
      {name: 'Ross', age: 31, img:'https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg'},
      {name: 'Ben', age: 32, img:'https://s3.amazonaws.com/uifaces/faces/twitter/guiiipontes/128.jpg'},
      {name: 'Courtney', age: 29, img:'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'}
    ];

    dirList.addPerson = function() {
      dirList.list.push({name:dirList.name, age: dirList.age});
      dirList.name ='';
      dirList.age = 0;
    };
  });
