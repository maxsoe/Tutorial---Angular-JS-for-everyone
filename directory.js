angular.module('directoryApp', ['ngAnimate', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: '<h1>Hello</h1>'
      })
      .state('about', {
        url: '/about',
        template: '<h1>About</h1>'
      });
  })
  .controller('directoryController', function() {

    var dirList = this;

    dirList.toggle = true;

    dirList.list = [{
        name: 'Scott',
        age: 29,
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'
      },
      {
        name: 'Ross',
        age: 31,
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg'
      },
      {
        name: 'Ben',
        age: 32,
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/guiiipontes/128.jpg'
      },
      {
        name: 'Courtney',
        age: 29,
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'
      }
    ];

    dirList.addPerson = function() {
      dirList.list.push({
        name: dirList.name,
        age: dirList.age
      });
      dirList.name = '';
      dirList.age = 0;
    };
  });
