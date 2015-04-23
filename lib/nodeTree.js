var renderNode = require('./renderNode');

function nodeTree(tag, children) {

    var node = renderNode(tag);
    if (children && children.length > 0) {
        for (var i = 0; i < children.length; i++) {
            var child = children[i]
            node.appendChild(renderNode(child));
        }
    }
    return node

}

module.exports = nodeTree;
