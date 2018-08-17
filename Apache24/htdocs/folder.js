angular.module('entityApp')
  .controller('FolderController', function($scope, $http) {
    var folderList = this;
	
    folderList.folders = [
		{
			folderId:1,	
			folderName:"folder1"
		},
		{
			folderId:2,
			folderName:"folder2"	
		}
	];
		
    folderList.addFolder = function(folder) {
      folderList.folders.push(folder);
    };
    folderList.remove = function(folder) {
      for(var i=0; i<folderList.folders.length ; i++){
		  if( folderList.folders[i].folderId === folder.id ){
			  folderList.folders.splice(i,1);
			  break;
		  }
	  }
    };
    //declare an action for our button
	folderList.getFolders = function () {

		//perform ajax call.
		$http({
			url: "./folderSelect.php",
			method: "GET",
			responseType: "json"
		}).success(function (data, status, headers, config) {

			//copy the data we get to our items array. we need to use angular.copy so that
			//angular can track the object and bind it automatically.
			angular.copy(data.folders, folderList.folders);


		}).error(function (data, status, headers, config) {
			//something went wrong
			alert('Error getting data');
		});
	};	
	folderList.onFolderClick = function(folder){
		alert("clicked on:" + folder.folderId + " " + folder.folderName);
	};	
	
	folderList.getFolders()
	
  });