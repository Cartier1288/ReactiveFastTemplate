function condense(obj) {
    const condensed = {};
    for(const [key, value] of Object.entries(obj)) {
        if(typeof(value) == "string") {
            condensed[key] = value.replaceAll('${', '{');
        }
        else if(typeof(value) == "object") {
            for(const [vkey, vvalue] of Object.entries(condense(value))) {
                condensed[key + "." + vkey] = vvalue;
            }
        }
    }
    return condensed;
}

function condenseIntl(obj) {
    const condensed = {};
    for(const [key, value] of Object.entries(obj)) {
        if(typeof(value) == "string") {
            condensed[key] = { defaultMessage: value.replaceAll('${', '{') };
        }
        else if(typeof(value) == "object") {
            for(const [vkey, vvalue] of Object.entries(condenseIntl(value))) {
                condensed[key + "." + vkey] = vvalue;
            }
        }
    }
    return condensed;
}

module.exports = { condense, condenseIntl }