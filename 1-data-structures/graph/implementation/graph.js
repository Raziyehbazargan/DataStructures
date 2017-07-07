'use strict';
/*The first step in building a Graph class is to build a Vertex class to store the vertices of
a graph.The first step in building a Graph class is to build a Vertex class to store the vertices of
a graph. This class has the same duties that the Node class had with linked lists and binary
search trees.*/

function Vertex(label) {
  this.label = label;
  this.wasVisited = false;
}

function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push(" ");
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
}
/*When this function is called with two vertices, A and B, the function finds the adjacency
list for vertex A and adds B to the list, then it finds the adjacency list for B and adds A
to the list. Finally, the function increments the number of edges by 1.*/
function addEdge(v,w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

/*The showGraph() function displays the graph by showing a list of all vertices and the
vertices that are adjacent to them:*/
function showGraph() {
  for (var i = 0; i < this.vertices; i++) {
    for (var j = 0; j < this.vertices; j++) {
      if (this.adj[i][j] !== undefined) {
        console.log(this.adj[i][j])
      }
    }
  }
}
