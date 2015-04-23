var REGX_ClassId = /\.|#/;
var REGX_SplitClasId = /(\.|#)\w+/g;
var REGX_GetProperties = /\(.+\)/;
var REGX_SplitProperties = /\w+="\w+"/g;

function parseTag(tag) {
    var parsedTag = {};
    var tagName, classId;
    tagName = tag.split(REGX_ClassId)[0];
    parsedTag['tagName'] = tagName;	

    classId = tag.match(REGX_SplitClasId);
    var properties = tag.match(REGX_GetProperties)[0].match(REGX_SplitProperties);
    parsedTag['propertyList'] = properties;
    var part, type, classList;
    classId.forEach(function(v, idx) {
        part = v;
        type = part.charAt(0);
        if (type === '.') {
            classList = classList || [];
            classList.push(part.substring(1));
        } else if (type === '#') {
            parsedTag['id'] = part.substring(1);
        }
    });

    parsedTag['classList'] = classList;
    return parsedTag;
}


function render(parsedTag){
	var el=document.createElement(parsedTag.tagName);
	for (var i=0; i<parsedTag.propertyList.length; i++){
		var part=parsedTag.propertyList[i];
		el.setAttribute(part.split('=')[0],fix(part.split('=')[1]));
	}
	return el

}

function renderNode(tag){
	return render(parseTag(tag));
}


function fix(str){
	return str.match(/\w+/)[0];	
}
module.exports = renderNode;
