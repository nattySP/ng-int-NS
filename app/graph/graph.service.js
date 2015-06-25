angular
    .module('cytoscapeSample')
    .factory('CytoscapeFactory', CytoscapeFactory)

    function CytoscapeFactory(){
        console.log('factory instantiated');
        
        var graph = {
            0: {edges: {1:4, 7:8}},
            1: {edges: {2:8, 7:11}},
            2: {edges: {3:7, 8:2}},
            3: {edges: {5:14, 4:9}}, 
            4: {edges: {}},
            5: {edges: {4:10, 2:4}},
            6: {edges: {8:6, 5:2}},
            7: {edges: {6:1}},
            8: {edges: {7:7}}
        }; 


        var mapData = [
            {
                group: 'nodes',
                'data':{
                        id: 'n0',
                        name: '0',
                    }
            }, 
            {
                group: 'nodes',
                'data':{
                        id: 'n1',
                        name: '1',
                    }
            }, 
            {
                group: 'nodes',
                'data':{
                        id: 'n2',
                        name: '2',
                    }
            }, 
            {
                group: 'nodes',
                'data':{
                        id: 'n3',
                        name: '3',
                    }
            }, 
            {
                group: 'nodes',
                'data':{
                        id: 'n4',
                        name: '4',
                    }
            }, 
            {
                group: 'nodes',
                'data':{
                        id: 'n5',
                        name: '5',
                    }
            }, 
            {
                group: 'nodes',
                'data':{
                        id: 'n6',
                        name: '6',
                    }
            }, 
            {
                group: 'nodes',
                'data':{
                        id: 'n7',
                        name: '7',
                    }
            }, 
            {
                group: 'nodes',
                'data':{
                        id: 'n8',
                        name: '8',
                    }
            }, 

        ];

        var edgeData = [
                {
                    data: {id:'e1', source: 'n0', target: 'n1', weight: '4'}
                },
                {
                    data:{id:'e2', source: 'n0', target: 'n7', weight: '8'}
                }, 
                {
                    data: {id:'e3', source: 'n1', target: 'n2', weight: '8'}, 
                },
                {
                    data: {id:'e4', source: 'n1', target: 'n7', weight: '11'}, 
                }, 
                {
                    data: {id:'e5', source: 'n2', target: 'n3', weight: '7'}, 
                },
                {
                    data: {id:'e6', source: 'n2', target: 'n8', weight: '2'}
                },
                {
                    data:{id:'e7', source: 'n3', target: 'n5', weight: '14'}
                }, 
                {
                    data: {id:'e8', source: 'n3', target: 'n4', weight: '9'}, 
                },
                {
                    data: {id:'e9', source: 'n5', target: 'n4', weight: '10'}, 
                }, 
                {
                    data: {id:'e10', source: 'n5', target: 'n2', weight: '4'}, 
                },
                {
                    data: {id:'e11', source: 'n6', target: 'n8', weight: '6'}
                },
                {
                    data: {id:'e12', source: 'n6', target: 'n5', weight: '2'}
                },
                {
                    data:{id:'e13', source: 'n7', target: 'n6', weight: '1'}
                }, 
                {
                    data: {id:'e14', source: 'n8', target: 'n7', weight: '7'}, 
                }
            ];

        var services = {}; 

        services.graph = graph;
        services.mapData = mapData; 
        services.edgeData = edgeData;

        return services; 
    };