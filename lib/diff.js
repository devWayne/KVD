function diff(a, b) {
    return diffProps(a, b)
}



function diffProps(a, b) {
    var diff = {},
        aV, bV;

    for (var key in a) {
        if (!(key in b)) {
            diff[key] = undefined;
	     continue;
        }
        aV = a[key];
        bV = b[key];
        if (aV === bV) continue;
        else if (typeof aV == 'object' && typeof bV == 'object') {
            var objectDiff = diffProps(aV, bV);
            if (objectDiff) {
                diff = diff || {};
                diff[key] = objectDiff;
            }
        } else {
            diff[key] = bV
        }
    }
    for (var key in b) {
        if (!(key in a)) {
            diff = diff || {};
            diff[key] = b[key];
        }
    }
    return diff;

}

module.exports = diff;
