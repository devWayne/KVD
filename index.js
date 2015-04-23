var diff= require('./lib/diff');

var nodeTree= require('./lib/nodeTree');

var renderNode= require('./lib/renderNode');

var vnode = require('./lib/vnode');

var vDOM={
diff:diff,
nodeTree:nodeTree,
renderNode:renderNode,
vnode:vnode
}

window.vDOM=vDOM;

module.exports=vDOM;
