var scoreKeeperApp = angular.module('scoreKeeperApp', []);

scoreKeeperApp.controller('ScoreController', function ($scope) {
	
	$scope.startNewGame = function(){
		game.isActive = false;
		game.nameIsAccepted = false;
		game.name = "";
		
		newPlayer.Name = '';
		newGame.Name = '';
		$('#newGameInput').focus();
	};
	
	$scope.acceptGameName = function(){
		game.name = newGame.Name;
		game.nameIsAccepted = true;
		$('#newPlayerInput').focus();
	};
	
	$scope.addPlayer = function(){
		//ToDo: validate dupe players
		players.push(
			{
				'name': newPlayer.Name,
				'points': [],
				'roundPoints': '',
				'total': 0
			}
		);
		newPlayer.Name = "";
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
	
	$scope.game = {};
	var game = $scope.game;

	$scope.players = [];
	var players = $scope.players

	$scope.newGame = {};
	var newGame = $scope.newGame;
	
	$scope.newPlayer = {};
	var newPlayer = $scope.newPlayer;
	
	//First time init
	$scope.startNewGame();
	
	$("#newGameInput").focus();
	
});