// var EasyStar=function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){var o={},r=e(1),i=e(2),s=e(3);const u=0,a=1;t.exports=o,o.js=function(){var t,n,e,c=1,l=1.4,h=!1,p={},f={},d={},y={},v=!0,T=[],g=Number.MAX_VALUE,x=!1;this.setAcceptableTiles=function(t){t instanceof Array?e=t:!isNaN(parseFloat(t))&&isFinite(t)&&(e=[t])},this.enableSync=function(){h=!0},this.disableSync=function(){h=!1},this.enableDiagonals=function(){x=!0},this.disableDiagonals=function(){x=!1},this.setGrid=function(n){t=n;for(var e=0;e<t.length;e++)for(var o=0;o<t[0].length;o++)f[t[e][o]]||(f[t[e][o]]=1)},this.setTileCost=function(t,n){f[t]=n},this.setAdditionalPointCost=function(t,n,e){d[t+"_"+n]=e},this.removeAdditionalPointCost=function(t,n){delete d[t+"_"+n]},this.removeAllAdditionalPointCosts=function(){d={}},this.setDirectionalCondition=function(t,n,e){y[t+"_"+n]=e},this.removeAllDirectionalConditions=function(){y={}},this.setIterationsPerCalculation=function(t){g=t},this.avoidAdditionalPoint=function(t,n){p[t+"_"+n]=1},this.stopAvoidingAdditionalPoint=function(t,n){delete p[t+"_"+n]},this.enableCornerCutting=function(){v=!0},this.disableCornerCutting=function(){v=!1},this.stopAvoidingAllAdditionalPoints=function(){p={}},this.findPath=function(n,o,i,u,a){var l=function(t){h?a(t):setTimeout(function(){a(t)})};if(void 0===e)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(void 0===t)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(0>n||0>o||0>i||0>u||n>t[0].length-1||o>t.length-1||i>t[0].length-1||u>t.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(n===i&&o===u)return void l([]);for(var p=t[u][i],f=!1,d=0;d<e.length;d++)if(p===e[d]){f=!0;break}if(f===!1)return void l(null);var y=new r;y.openList=new s(function(t,n){return t.bestGuessDistance()-n.bestGuessDistance()}),y.isDoneCalculating=!1,y.nodeHash={},y.startX=n,y.startY=o,y.endX=i,y.endY=u,y.callback=l,y.openList.push(A(y,y.startX,y.startY,null,c)),T.push(y)},this.calculate=function(){if(0!==T.length&&void 0!==t&&void 0!==e)for(n=0;g>n;n++){if(0===T.length)return;if(h&&(n=0),0!==T[0].openList.size()){var o=T[0].openList.pop();if(T[0].endX===o.x&&T[0].endY===o.y){T[0].isDoneCalculating=!0;var r=[];r.push({x:o.x,y:o.y});for(var i=o.parent;null!=i;)r.push({x:i.x,y:i.y}),i=i.parent;r.reverse();var s=T[0],a=r;return void s.callback(a)}var p=[];o.list=u,o.y>0&&p.push({instance:T[0],searchNode:o,x:0,y:-1,cost:c*m(o.x,o.y-1)}),o.x<t[0].length-1&&p.push({instance:T[0],searchNode:o,x:1,y:0,cost:c*m(o.x+1,o.y)}),o.y<t.length-1&&p.push({instance:T[0],searchNode:o,x:0,y:1,cost:c*m(o.x,o.y+1)}),o.x>0&&p.push({instance:T[0],searchNode:o,x:-1,y:0,cost:c*m(o.x-1,o.y)}),x&&(o.x>0&&o.y>0&&(v||_(t,e,o.x,o.y-1)&&_(t,e,o.x-1,o.y))&&p.push({instance:T[0],searchNode:o,x:-1,y:-1,cost:l*m(o.x-1,o.y-1)}),o.x<t[0].length-1&&o.y<t.length-1&&(v||_(t,e,o.x,o.y+1)&&_(t,e,o.x+1,o.y))&&p.push({instance:T[0],searchNode:o,x:1,y:1,cost:l*m(o.x+1,o.y+1)}),o.x<t[0].length-1&&o.y>0&&(v||_(t,e,o.x,o.y-1)&&_(t,e,o.x+1,o.y))&&p.push({instance:T[0],searchNode:o,x:1,y:-1,cost:l*m(o.x+1,o.y-1)}),o.x>0&&o.y<t.length-1&&(v||_(t,e,o.x,o.y+1)&&_(t,e,o.x-1,o.y))&&p.push({instance:T[0],searchNode:o,x:-1,y:1,cost:l*m(o.x-1,o.y+1)}));for(var f=!1,d=0;d<p.length;d++)if(O(p[d].instance,p[d].searchNode,p[d].x,p[d].y,p[d].cost),p[d].instance.isDoneCalculating===!0){f=!0;break}f&&T.shift()}else{var s=T[0];s.callback(null),T.shift()}}};var O=function(n,o,r,i,s){var u=o.x+r,c=o.y+i;if(void 0===p[u+"_"+c]&&_(t,e,u,c,o)){var l=A(n,u,c,o,s);void 0===l.list?(l.list=a,n.openList.push(l)):o.costSoFar+s<l.costSoFar&&(l.costSoFar=o.costSoFar+s,l.parent=o,n.openList.updateItem(l))}},_=function(t,n,e,o,r){if(y[e+"_"+o]){var i=b(r.x-e,r.y-o),s=function(){for(var t=0;t<y[e+"_"+o].length;t++)if(y[e+"_"+o][t]===i)return!0;return!1};if(!s())return!1}for(var u=0;u<n.length;u++)if(t[o][e]===n[u])return!0;return!1},b=function(t,n){if(-1===n)return o.BOTTOM;if(-1===n)return o.BOTTOM_LEFT;if(0===n)return o.LEFT;if(1===n)return o.TOP_LEFT;if(1===n)return o.TOP;if(1===n)return o.TOP_RIGHT;if(0===n)return o.RIGHT;if(-1===n)return o.BOTTOM_RIGHT;throw new Error("These differences are not valid: "+t+", "+n)},m=function(n,e){return d[n+"_"+e]||f[t[e][n]]},A=function(t,n,e,o,r){if(void 0!==t.nodeHash[n+"_"+e])return t.nodeHash[n+"_"+e];var s=E(n,e,t.endX,t.endY);if(null!==o)var u=o.costSoFar+r;else u=0;var a=new i(o,n,e,u,s);return t.nodeHash[n+"_"+e]=a,a},E=function(t,n,e,o){if(x){var r=Math.abs(t-e),i=Math.abs(n-o);return i>r?l*r+i:l*i+r}var r=Math.abs(t-e),i=Math.abs(n-o);return r+i}},o.TOP="TOP",o.TOP_RIGHT="TOP_RIGHT",o.RIGHT="RIGHT",o.BOTTOM_RIGHT="BOTTOM_RIGHT",o.BOTTOM="BOTTOM",o.BOTTOM_LEFT="BOTTOM_LEFT",o.LEFT="LEFT",o.TOP_LEFT="TOP_LEFT"},function(t,n){t.exports=function(){this.isDoneCalculating=!0,this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(t,n){t.exports=function(t,n,e,o,r){this.parent=t,this.x=n,this.y=e,this.costSoFar=o,this.simpleDistanceToTarget=r,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(t,n,e){t.exports=e(4)},function(t,n,e){var o,r,i;(function(){var e,s,u,a,c,l,h,p,f,d,y,v,T,g,x;u=Math.floor,d=Math.min,s=function(t,n){return n>t?-1:t>n?1:0},f=function(t,n,e,o,r){var i;if(null==e&&(e=0),null==r&&(r=s),0>e)throw new Error("lo must be non-negative");for(null==o&&(o=t.length);o>e;)i=u((e+o)/2),r(n,t[i])<0?o=i:e=i+1;return[].splice.apply(t,[e,e-e].concat(n)),n},l=function(t,n,e){return null==e&&(e=s),t.push(n),g(t,0,t.length-1,e)},c=function(t,n){var e,o;return null==n&&(n=s),e=t.pop(),t.length?(o=t[0],t[0]=e,x(t,0,n)):o=e,o},p=function(t,n,e){var o;return null==e&&(e=s),o=t[0],t[0]=n,x(t,0,e),o},h=function(t,n,e){var o;return null==e&&(e=s),t.length&&e(t[0],n)<0&&(o=[t[0],n],n=o[0],t[0]=o[1],x(t,0,e)),n},a=function(t,n){var e,o,r,i,a,c;for(null==n&&(n=s),i=function(){c=[];for(var n=0,e=u(t.length/2);e>=0?e>n:n>e;e>=0?n++:n--)c.push(n);return c}.apply(this).reverse(),a=[],o=0,r=i.length;r>o;o++)e=i[o],a.push(x(t,e,n));return a},T=function(t,n,e){var o;return null==e&&(e=s),o=t.indexOf(n),-1!==o?(g(t,0,o,e),x(t,o,e)):void 0},y=function(t,n,e){var o,r,i,u,c;if(null==e&&(e=s),r=t.slice(0,n),!r.length)return r;for(a(r,e),c=t.slice(n),i=0,u=c.length;u>i;i++)o=c[i],h(r,o,e);return r.sort(e).reverse()},v=function(t,n,e){var o,r,i,u,l,h,p,y,v,T;if(null==e&&(e=s),10*n<=t.length){if(u=t.slice(0,n).sort(e),!u.length)return u;for(i=u[u.length-1],y=t.slice(n),l=0,p=y.length;p>l;l++)o=y[l],e(o,i)<0&&(f(u,o,0,null,e),u.pop(),i=u[u.length-1]);return u}for(a(t,e),T=[],r=h=0,v=d(n,t.length);v>=0?v>h:h>v;r=v>=0?++h:--h)T.push(c(t,e));return T},g=function(t,n,e,o){var r,i,u;for(null==o&&(o=s),r=t[e];e>n&&(u=e-1>>1,i=t[u],o(r,i)<0);)t[e]=i,e=u;return t[e]=r},x=function(t,n,e){var o,r,i,u,a;for(null==e&&(e=s),r=t.length,a=n,i=t[n],o=2*n+1;r>o;)u=o+1,r>u&&!(e(t[o],t[u])<0)&&(o=u),t[n]=t[o],n=o,o=2*n+1;return t[n]=i,g(t,a,n,e)},e=function(){function t(t){this.cmp=null!=t?t:s,this.nodes=[]}return t.push=l,t.pop=c,t.replace=p,t.pushpop=h,t.heapify=a,t.updateItem=T,t.nlargest=y,t.nsmallest=v,t.prototype.push=function(t){return l(this.nodes,t,this.cmp)},t.prototype.pop=function(){return c(this.nodes,this.cmp)},t.prototype.peek=function(){return this.nodes[0]},t.prototype.contains=function(t){return-1!==this.nodes.indexOf(t)},t.prototype.replace=function(t){return p(this.nodes,t,this.cmp)},t.prototype.pushpop=function(t){return h(this.nodes,t,this.cmp)},t.prototype.heapify=function(){return a(this.nodes,this.cmp)},t.prototype.updateItem=function(t){return T(this.nodes,t,this.cmp)},t.prototype.clear=function(){return this.nodes=[]},t.prototype.empty=function(){return 0===this.nodes.length},t.prototype.size=function(){return this.nodes.length},t.prototype.clone=function(){var n;return n=new t,n.nodes=this.nodes.slice(0),n},t.prototype.toArray=function(){return this.nodes.slice(0)},t.prototype.insert=t.prototype.push,t.prototype.top=t.prototype.peek,t.prototype.front=t.prototype.peek,t.prototype.has=t.prototype.contains,t.prototype.copy=t.prototype.clone,t}(),function(e,s){return r=[],o=s,i="function"==typeof o?o.apply(n,r):o,!(void 0!==i&&(t.exports=i))}(this,function(){return e})}).call(this)}]);
// var easystar = new EasyStar.js();

// This file is for creating mazes with different size
var mazes = require('./src/customMazes');
var PF = require('pathfinding');

var calculateDistance = function(userData) {
    var initialDist;
    console.log('User Data : ', userData);
    userData.level = userData.level.toString();
    if ( userData.level === '1' ) {
        initialDist = 29;
    } else if ( userData.level === '2' ) {
        initialDist = 150;
    } else if ( userData.level === '3' ) {
        initialDist = 458;
    } else if ( !userData.level ) {
        initialDist = 50;
        console.log('Error with maze level calculation');
    }
    var maze = JSON.parse(JSON.stringify(mazes[userData.level]));
    var firstPosition = {
        x: Math.floor(userData.p1.x / 4 + .4),
        y: Math.floor(userData.p1.z / 4 + .4)
    };
    var secondPosition = {
        x: Math.floor(userData.p2.x / 4 + .4),
        y: Math.floor(userData.p2.z / 4 + .4)
    };

    // console.log('secondPosition : ', secondPosition);

    maze[firstPosition.x][firstPosition.y] = '1';
    maze[secondPosition.x][secondPosition.y] = '2';
    var columnLength = maze.length;
    var rowLength = maze[0].length;
    // console.log('columnLength :', columnLength);
    // console.log('rowLength :', rowLength);

    for ( var i = 0; i < columnLength; i++ ) {
        for ( var j = 0; j < rowLength; j++ ) {
            if ( maze[i][j] === ' ' ) {
                maze[i][j] = 0;      
            } else if ( maze[i][j] === '1' ) {
                maze[i][j] = 0;
            } else if ( maze[i][j] === '2' ) {
                maze[i][j] = 0;
            } else {
                maze[i][j] = 1;
            }
        }
    }

    var newRow = [];
    for ( var i = 0; i < rowLength; i++ ) {
        newRow.push(1);
    };

    for ( var i = 0; i < rowLength - columnLength; i++ ) {
        maze.push(newRow);
    }

    // console.log(maze.length === maze[0].length);
    // console.log('new columnLength',)
    var grid = new PF.Grid(rowLength, rowLength, maze);
    // var grid = new PF.Grid(columnLength, rowLength);
    // // console.log('grid : ', grid);
    // console.log(maze);
    var finder = new PF.BiBestFirstFinder();
    // console.log(firstPosition);
    // console.log(secondPosition);

    for ( var i = 0; i < rowLength; i++ ) {
        for ( var j = 0; j < rowLength; j++ ) {
            if ( maze[i][j] === 0 ) {
                grid.setWalkableAt(i, j, true);        
            } else {
                grid.setWalkableAt(i, j, false);
            }
        }
    }
    // var path = finder.findPath(0,1,10,12,grid);
    var path = finder.findPath(firstPosition.x, firstPosition.y, secondPosition.x, secondPosition.y, grid);

    // 54, 2, 2
    // 54, 2, 12
    // 0, 2, 12
    // 0, 2, 2

    for ( var i = 0; i < path.length; i++ ) {
        maze[path[i][0]][path[i][1]] = 7;
    }
    // console.log('Does path exist ? ', path.length !== 0);
    // console.log(path.length);

    // console.log(path.length);
    // console.table(robotPaths(maze));
    // JSON.stringify(robotPaths(maze));
    // console.log(robotPaths(maze).join("\",\""))
    // var solutionPath = null;
    // // console.log(robotPaths(maze));
    // // console.log(maze)
    // var newRow = [];
    // for ( var j = 0; j < maze[0].length; j++ ) {
    //     newRow.push('x');
    // }
    // var columnLength = maze.length;
    // var rowLength = maze[0].length;
    // for ( var i = 0; i <= rowLength - columnLength; i++ ) {
    //     maze.push(newRow);
    // }
    // easystar.setGrid(maze);
    // easystar.setAcceptableTiles([' ']);

    // easystar.findPath(firstPosition.x, firstPosition.y, secondPosition.x, Math.round(secondPosition.y / 2),  function( path ) {
    //     if (path === null) {
    //         console.log("Path was not found.");
    //     } else {
    //         // console.log("Path was found. The first Point is " + path[0].x + " " + path[0].y);
    //         solutionPath = path;
    //         var solvedMaze = JSON.parse(JSON.stringify(maze));
    //         for ( var i = 0; i < solutionPath.length; i++ ) {
    //             solvedMaze[solutionPath[i].x][solutionPath[i].y] = '@';
    //         }
    //         console.log(solvedMaze);
    //     }
    // });
    // easystar.calculate();
    var percentage = 100 - (path.length / initialDist) * 100;
    // console.log('Path Length : ', path.length);
    // console.log('Initial Distance : ', initialDist);    
    return percentage < 0 ? 0 : percentage; 
};

module.exports = calculateDistance;