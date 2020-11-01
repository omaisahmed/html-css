app.controller('mainCtrl', ['$scope', 'dataService', '$timeout',  function ($scope, dataService, $timeout) {

	$scope.selectedCard = undefined;
	$scope.selectedCardIndex = undefined;
	$scope.selectionCounter = 1;
	$scope.trueSlectionscounter = 0;

	$scope.gameEnded = false;
	$scope.score = 100;
	$scope.difficultArray = [1,2,3,4,5,6,7,8,9,10];
	$scope.difficultLevel = 3;

	$scope.getCardsFromSrv = function(){
		dataService.getCards().success(function(response){
			if (response.status == "success"){
				var dupArray = $scope.duplicateArray(response.cards.cardsData.slice(0,$scope.difficultLevel));
				$scope.cards = $scope.shuffle(dupArray);
			}
		}).error(function(data, status) {
		  console.error('error', status, data);
		});
	}

	$scope.shuffle = function(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	};

	$scope.duplicateArray = function(array){
		var arr1 = angular.copy(array);
		var arr2 = angular.copy(array);
		var dupArray = [];
		for (var i=0; i<array.length; i++){
			dupArray.push(arr1[i]);
			dupArray.push(arr2[i]);
		};

		return dupArray;
	};

	$scope.checkFoundTwinsCards = function(index, card){

		if ($scope.selectionCounter > 1){
			//after selecting the second card in the curent round
			if ( $scope.selectedCard == card.text ){
				//the first and second cards are identical
				$scope.cards[index].class = 'succeededSelection';
				$scope.cards[$scope.selectedCardIndex].class = 'succeededSelection';
				//init variables if the user succeeded in the current round or failes
				$scope.selectionCounter = 1;
				$scope.selectedCard = undefined;
				$scope.selectedCardIndex = undefined;

				$scope.trueSlectionscounter += 1;
			} else {
				$scope.cards[index].class = 'succeededSelection';
				$scope.cards[$scope.selectedCardIndex].class = 'succeededSelection';
				$timeout(function() {
					$scope.cards[index].class = '';
					$scope.cards[$scope.selectedCardIndex].class = '';

					$scope.score -= 2;
					//init variables if the user succeeded in the current round or failes
					$scope.selectionCounter = 1;
					$scope.selectedCard = undefined;
					$scope.selectedCardIndex = undefined;
				}, 500);
			}
		} else {
			//after selecting the first card in the current round
			$scope.cards[index].class = 'succeededSelection';
			$scope.selectedCard = card.text;
			$scope.selectedCardIndex = index;
			$scope.selectionCounter += 1;

		}

		if ($scope.trueSlectionscounter == $scope.difficultLevel){
			$scope.gameEnded = true;
		}

	};

	$scope.setDifficult = function(difficult){
		$scope.difficultLevel = difficult;
		$scope.initGame();
	}

	$scope.initGame = function(){
		$scope.getCardsFromSrv();
		$scope.selectionCounter = 1;
		$scope.selectedCard = undefined;
		$scope.selectedCardIndex = undefined;
		$scope.gameEnded = false;
		$scope.score = 100;
	}

	$scope.getCardsFromSrv();
}]);