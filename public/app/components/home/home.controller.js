(function(){
    //Read up here http://stackoverflow.com/questions/21444100/angularjs-how-to-http-get-data-and-store-it-in-service

    'use strict';
    var app = angular.module('app.home');

    app.controller('HomeController', HomeController);

    SystemController.$inject = ['$scope', 'HomeInfo'];
    function SystemController($scope, HomeInfo){
        /*
        HomeInfo.getData().then(function(data){
            this.groups = data.groups
        });
        */
        this.group = "Some random key'";
        //get the group by passing the key of the group in the dict
        this.setGroup = function(groupKey) {
            this.group = this.groups[groupKey];
        };
        
        this.groups = {
          "id": "1.2",
          "groups": [
            {
              "groupId": "212312",
              "groupMembers": [
                {
                  "id": [
                    {
                      "name": "\"Shit face\""
                    },
                    {
                      "name": "shitter"
                    }
                  ]
                }
              ],
              "Documents": [
                {
                  "id": "1223",
                  "meta": {
                    "tagName3": "\"1112\"",
                    "TagName2": "\"222\""
                  }
                }
              ]
            },
            {
              "groupId": "123213",
              "groupMembers": [
                {
                  "id": [
                    {
                      "name": "\"Shit face\""
                    },
                    {
                      "name": "shitter"
                    }
                  ]
                }
              ],
              "Documents": [
                {
                  "id": "1223",
                  "meta": {
                    "tagName3": "\"1112\"",
                    "TagName2": "\"222\""
                  }
                }
              ]
            }
          ]
        };
    }





})();
