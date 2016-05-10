var todoApp = angular.module("todoApp", []);

var taskModel = function(taskText,done){
  if(done == undefined) {
    done =  false; // false is for pending
  }else{
    done =  true; // true is for done
  }

  return  {
    text : taskText,
    done : done
  };

}




todoApp.controller("taskListController",function($scope){

  $scope.tasks = [];
  $scope.newTaskText  = ""

  $scope.sync = function(){
    //to be use for sync with any api etc (Integration point with server etc)
    var tasks = $scope.tasks
    console.log(tasks);
  };

  console.log("First Sync");
  $scope.sync()


  $scope.addTask = function(taskText){
    $scope.tasks.push(new taskModel(taskText));
    $scope.sync();
  };

  $scope.delete = function(queryTask){
    for (task in $scope.tasks) {
      if($scope.tasks[task] == queryTask){
        $scope.tasks.splice(task,1);
      }
    }
    $scope.sync();
  }

  $scope.keyPress = function(key_event){
    if(key_event.code == "Enter"){
      $scope.addTask($scope.newTaskText);
      $scope.newTaskText = "";
    }
  }

});
