var app = angular.module("EveryPublished")

app.directive('fileModel', function(){
  return{
    controller:function($parse, $element, $attrs, $scope){
      var exp = $parse($attrs.fileModel)

      $element.on('change', function(){
        exp.assign($scope, this.files)
        $scope.$apply()
      })

    }
  }
})
