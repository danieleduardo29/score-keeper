var scoreKeeperApp = angular.module('scoreKeeperApp', []);

scoreKeeperApp.controller('ScoreController', function ($scope) {
	
	$scope.game = {
		nameIsAccepted : false,
		isActive : false,
		name : ""
	};
	var game = $scope.game;

	$scope.players = [];
	var players = $scope.players

	$scope.newPlayer = {name: ''};
	
	var newPlayer = $scope.newPlayer;
	
	$("#newGameInput").focus();
  
	
	$scope.acceptGameName = function(name){
		game.name = name;
		game.nameIsAccepted = true;
		$('#newPlayerInput').focus();
	};
	
	$scope.addPlayer = function(newPlayerName){
		//ToDo: validate dupe players
		players.push(
			{
				'name': newPlayerName,
				'points': [],
				'roundPoints': '',
				'total': 0
			}
		);
		newPlayer.name = "";
		$('#newPlayerInput').focus();
	};
	
	$scope.startGame = function(){
		game.isActive = true;
	};
	
	$scope.addRoundPoints = function(){
		for(i in players){
			
			players[i].points.push(
				{
					'value' : players[i].roundPoints
				}
			);
			players[i].total = players[i].total + players[i].roundPoints;
			players[i].roundPoints = "";
		}
	};
});