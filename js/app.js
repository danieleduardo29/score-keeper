var phonecatApp = angular.module('scoreKeeperApp', []);

phonecatApp.controller('ScoreController', function ($scope) {
  $scope.gameName = "Game's name";
  
  $scope.players = [
    {
		'name': 'First Player',
		'points': 
				[
					{ 'value': 0 },
					{ 'value': 0 }
				],
		'total': 0
	},
    {
		'name': 'Second Player',
		'points': 
				[
					{ 'value': 10 },
					{ 'value': 20 }
				],
		'total': 30
	},
	{
		'name': 'Third Player',
		'points': 
				[
					{ 'value': 30 },
					{ 'value': 40 }
				],
		'total': 70
	}
  ];
});