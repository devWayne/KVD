var vnode=require('./createElement');

function renderNode(vnode){
	var el=document.createElement(vnode.tagName);
	for (key in vnode.propertyList){
		var part=vnode.propertyList[key];
		if(typeof part=="string")el.setAttribute(key,part);
		else if(typeof part =="object"){
			var partStr=JSON.stringify(part);
			partStr=partStr.substring(1,partStr.length-1).replace(/"/g,"").replace(/,(?=[\w-])/g,";");
			el.setAttribute(key,partStr);
		}
	}
	if(vnode.text)el.innerText=vnode.text;
	return el;

}

function render(vnode,container) {
	
    var node = renderNode(vnode);

    var children =vnode.children;
    if (children && children.length > 0) {
        for (var i = 0; i < children.length; i++) {
            var child = children[i]
            node.appendChild(render(child));
        }
    }
    return node;

}

function fix(str){
	return str.match(/[\w:,]+/)[0];	
}

module.exports = render;

