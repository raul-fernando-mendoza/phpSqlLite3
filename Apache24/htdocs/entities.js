angular.module('entityApp')
  .controller('EntityController', function($scope, $http) {
    var entityList = this;
	
    entityList.entities = [
		{
			entityId:1,	
			entityName:"Entity1",
			parentFolderId:$scope.$parent.folder.folderId
		},
		{
			entityId:2,	
			entityName:"Entity2",
			parentFolderId:$scope.$parent.folder.folderId
		}		
	];
		
    entityList.addEntity = function(entityId, entityName, parentFolderId) {
	  var e = {entityId:entityId, entityName:entityName,parentFolderId:parentFolderId }; 
      entityList.entities.push(e);
    };
    entityList.remove = function(e) {
      for(var i=0; i<entityList.entities.length ; i++){
		  if( entityList.entities[i].id === e.id ){
			  entityList.entities.splice(i,1);
			  break;
		  }
	  }
    };
	entityList.onEntityClick = function(entity){
		alert("clicked on:" + entity.entityName + " " + entity.entityId);
	};	
  });