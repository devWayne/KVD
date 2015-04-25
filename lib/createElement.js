var REGX_ClassId = /\.|#/;
var REGX_SplitClasId = /(\.|#)\w+/g;
var REGX_GetProperties = /\(.+\)/;
var REGX_SplitProperties = /\w+="[\w:,]+"/g;

function createElement(option, children) {
    var tag = option.tag
    var vnode = {};
    var tagName, classId;
    tagName = tag.split(" ")[0].split(REGX_ClassId)[0];
  
    vnode['tagName'] = tagName;
    vnode['text']=tag.split(" ")[1]||'';

    classId = tag.match(REGX_SplitClasId);

    var properties = {};
    for (key in option) {
        if (key != 'tag') {
            properties[key] = option[key];
        }
    }
    //var properties = tag.match(REGX_GetProperties)[0].match(REGX_SplitProperties);
    vnode['propertyList'] = properties;
    var part, type, classList;

    if (classId!=null) {
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
    }

    vnode.children=children
    return vnode;
}

module.exports = createElement;
