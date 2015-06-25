angular
    .module('cytoscapeSample')
    .controller('CytoscapeCtrl', CytoscapeCtrl)

    CytoscapeCtrl.$inject = ['$scope', '$rootScope', 'CytoscapeFactory']

    function CytoscapeCtrl($scope, $rootScope, CytoscapeFactory){
        
        $scope.dataEntered = false; 
        $scope.graph = CytoscapeFactory.graph;
        $scope.mapData = CytoscapeFactory.mapData; 
        $scope.edgeData = CytoscapeFactory.edgeData; 

    
        $scope.doClick = function(value)
        {

            // sample just passes the object's ID then output it to the console and to an alert
            console.log(value);
        };


        $scope.findPath = function(source, target) {
            var dijkstras = new Dijkstras($scope.graph);
            var result = dijkstras.calc(source, target);

            $scope.shortestPathDistance = result[0];
            $scope.shortestPath = result[1];
            $scope.dataEntered = true; 
            $scope.selection = $scope.shortestPath.split(' ');
            $scope.pathEdges = findEdges(); 
        };

        function findEdges() {
            var edges = []; 
            var graph = $scope.graph; 
            for (var i = 0; i < $scope.selection.length - 1; i++) {
                var currNode = $scope.selection[i];
                var nextNode = $scope.selection[i + 1];
                for (var key in graph[currNode].edges) {
                    if (key === nextNode){
                        var edgeObj = {
                            source: 'n' + currNode,
                            target: 'n' + key
                        }
                        edges.push(edgeObj);
                    }
                }
            }
            return edges
        }

    };