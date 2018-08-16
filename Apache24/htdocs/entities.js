angular.module('entityApp', [])
  .controller('FolderController', function($scope, $http) {
    var folderList = this;
	
    folderList.folders = [
		{
			id:1,	
			folderName:"folder1",
			entities:[
			  {id:1, entityName:'country',parentFolder:1},
			  {id:2, entityName:'clty',parentFolder:1}
			]
		
		},
		{
			id:2,
			folderName:"folder2",	
			entities:[
			  {id:3, entityName:'employee',parentFolder:2},
			  {id:4, entityName:'campaigns',parentFolder:2}
			]
		}
	];
		
    folderList.addFolder = function(folder) {
      folderList.entities.push(folder);
    };
    folderList.remove = function(folder) {
      for(var i=0; i<folderList.folders.length ; i++){
		  if( folderList.folders[i].id === folder.id ){
			  folderList.folders.splice(i,1);
			  break;
		  }
	  }
    };
 
 
    folderList.addEntityToFolder = function(folder,entity) {
      folder.push(entity);
    };
    folderList.removeEntityFromFolder = function(folder,entity) {
      for(var i=0; i<folder.entities.length ; i++){
		  if( folder.entities[i].id === entity.id ){
			  folder.entities.splice(i,1);
			  break;
		  }
	  }
    };
	
    //declare an action for our button
	folderList.getFolders = function () {

		//perform ajax call.
		$http({
			url: "./foldersSelect.php",
			method: "GET",
			responseType: "json"
		}).success(function (data, status, headers, config) {

			//copy the data we get to our items array. we need to use angular.copy so that
			//angular can track the object and bind it automatically.
			angular.copy(data.folderList, folderList);


		}).error(function (data, status, headers, config) {
			//something went wrong
			alert('Error getting data');
		});
	};	
	folderList.onFolderClick = function(folder){
		alert("clicked on:" + folder.id + " " + folder.folderName);
	};	
	folderList.onEntityClick = function(entity){
		alert("clicked on:" + entity.id + " " + entity.entityName);
	};
	
  });