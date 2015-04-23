var REGX_ClassId = /\.|#/;
var REGX_SplitClasId = /(\.|#)\w+/g;
var REGX_GetProperties = /\(.+\)/;
var REGX_SplitProperties = /\w+="\w+"/g;

function vnode(tag) {
    var vnode = {};
    var tagName, classId;
    tagName = tag.split(REGX_ClassId)[0];
    vnode['tagName'] = tagName;	

    classId = tag.match(REGX_SplitClasId);
    var properties = tag.match(REGX_GetProperties)[0].match(REGX_SplitProperties);
    vnode['propertyList'] = properties;
    var part, type, classList;
    classId.forEach(function(v, idx) {
        part = v;
        type = part.charAt(0);
        if (type === '.') {
            classList = classList || [];
            classList.push(part.substring(1));
        } else if (type === '#') {
            vnode['id'] = part.substring(1);
        }
    });

    vnode['classList'] = classList;
    return vnode;
}

module.exports=vnode;

