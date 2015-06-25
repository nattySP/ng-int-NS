angular
    .module('cytoscapeSample')
    .directive('cytoscape', function($rootScope) {
        return {
            restrict: 'E',
            template :'<div id="cy"></div>',
            replace: true,
            scope: {
                cyData: '=',
                cyEdges: '=',
                cyGraph: '=',
                cySelection: '=',
                cyPath: '=',
            },
            link: function(scope, element, attrs, fn) {
                console.log('link function called ', scope.cySelection);

                // scope.buildNodeArray = function() {
                //     var nodes = []
                //     var nodeObj = {
                //         group: 'nodes', 
                //         data: {}
                //     }

                //     for (var key in scope.cyGraph) {
                //         nodeObj.data.id = 'n' + key; 
                //         nodeObj.data.name = key; 
                //         console.log(nodeObj);
                //         nodes.push(nodeObj);
                //     }
                //     console.log('nodes: ', nodes);
                //     console.log(scope.cyData);
                //     return nodes; 

                // }

                scope.buildGraph = function(){ 

                    scope.elements = {};
                    scope.elements.nodes = scope.cyData;
                    scope.elements.edges = scope.cyEdges;


                    $('#cy').cytoscape({
                        layout: {
                            name: 'circle',
                            fit: true, 
                            ready: undefined, 
                            stop: undefined, 
                            padding: 10, 
                        },
                        style: cytoscape.stylesheet()
                            .selector('node')
                            .css({
                                'shape': 'circle',
                                'width': '90',
                                'height': '90',
                                'background-color': '#FFF',
                                'background-opacity': 0.5,
                                'border-color': '#FFF', 
                                'border-style': 'solid', 
                                'border-width': 3,
                                'content': 'data(name)',
                                'text-valign': 'center',
                                'color': 'white',
                                'text-outline-width': 2,
                                'text-outline-color': 'grey', 
                                'font-size': 40
                            })
                            .selector('edge')
                            .css({
                                'width': 'data(weight)',
                                'target-arrow-shape': 'triangle'
                            })
                            .selector(':selected')
                            .css({
                                'background-color': 'grey',
                                'background-opacity': 0.5,
                                'border-opacity': 0.5,
                                'line-color': 'black',
                                'target-arrow-color': 'black'
                            }),
                            ready: function(){
                            window.cy = this;

                            cy.load(scope.elements);
                        }
                    });

                };

                scope.buildGraph(); 

                scope.buildSelection = function() {
                    cy.$(':selected').unselect(); 
                    var selectNodes = _.filter(scope.elements.nodes, function(node) {
                        return _.contains(scope.cySelection, node.data.name);
                    });


                    var selectEdges = _.filter(scope.elements.edges, function(edge) {
                        var compareEdge = {
                            source: edge.data.source, 
                            target: edge.data.target
                        }
                        for (var i = 0; i < scope.cyPath.length; i++) {
                            if (scope.cyPath[i].source === compareEdge.source && 
                                scope.cyPath[i].target === compareEdge.target ) {
                                console.log('match');
                                return true; 
                            }
                        }
                        return false;
                    });

                    selectNodes.forEach(function(node){
                        var id = '#' + node.data.id; 
                        cy.$(id).select(); 
                    })

                    selectEdges.forEach(function(edge){
                        console.log('edge.data.id', edge.data.id);
                        var id = '#' + edge.data.id;
                        cy.$(id).select(); 
                    })
                }

                scope.$watch('cySelection', function(newValue, oldValue) {
                    if (scope.cySelection && scope.cySelection.length) {
                        scope.buildSelection();
                    }
                })

            }
        };
    });