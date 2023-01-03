function validateUserName(name = null) {
    if(typeof name == 'string'){
        name = name.trim();
        if(name.length > 0) return name;
    } 
    return "Admiral";
}

module.exports = validateUserName;