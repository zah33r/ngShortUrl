'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:ShortCtrl
 * @description
 * # ShortCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('ShortCtrl', function ($scope, $http, $mdDialog, $mdMedia) {
        var hostUrl = 'https://radiant-dusk-31829.herokuapp.com/v1/urls';
        //        var hostUrl = 'http://192.168.0.103:3001/v1/urls';
        console.log("long url after this");
        var longUrl = "";
        $scope.isDisabled = true;

        $scope.dialogEvent = "";
        $scope.showAlert = function (ev) {
            $scope.dialogEvent = ev;
        };

        $scope.copyAlert = function () {
            $scope.getUrlLength();
            if ($scope.isEnabled)
                $mdDialog.show(
                    $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Short URL')
                    .textContent('URL copied to clipboard')
                    .ariaLabel('')
                    .ok('Ok')
                    .targetEvent($scope.dialogEvent)
                );
        }

        $scope.getUrlLength = function () {
            $scope.isEnabled = $scope.shortestUrl != undefined && $scope.shortestUrl.trim() != "";
        };

        $scope.getShortUrl = function () {
            $scope.shortestUrl = "";
            longUrl = $scope.longUrl;
            var req = {
                method: 'POST'
                , url: hostUrl
                , data: {
                    "short_url": {
                        "link": longUrl
                    }
                }
            };

            $http(req)
                .then(function (response) {
                    $scope.shortestUrl = hostUrl.replace("v1/urls", "") + response.data.alias;
                    $mdDialog.show(
                        $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('Short URL')
                        .textContent('URL created successfully. Lets share with world!')
                        .ariaLabel('')
                        .ok('Ok')
                        .targetEvent($scope.dialogEvent)
                    );
                }, function (response) {
                    $mdDialog.show(
                        $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('Short URL')
                        .textContent('Ops! some error occured while connecting to the server.')
                        .ariaLabel('Try again later')
                        .ok('Ok')
                        .targetEvent($scope.dialogEvent)
                    );
                });
        };
    });