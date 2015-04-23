var vnode=require('./vnode');

function render(parsedTag){
	var el=document.createElement(parsedTag.tagName);
	for (var i=0; i<parsedTag.propertyList.length; i++){
		var part=parsedTag.propertyList[i];
		el.setAttribute(part.split('=')[0],fix(part.split('=')[1]));
	}
	return el

}

function renderNode(tag){
	return render(vnode(tag));
}


function fix(str){
	return str.match(/\w+/)[0];	
}
module.exports = renderNode;
