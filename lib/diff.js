function diff(a, b) {

    var diff;

    for (key in b) {
        if (!(key in a)) {
            diff = diff || {};
            diff[key] = b[key];
     	}
    }

    return diff;
}


module.exports = diff;
