module.exports = function jlxtrysch(string) {
    if (typeof string !== "string") throw new TypeError("jlxtrysch wants a string!");
    return console.log(`Hi, you entered ${string.replace(/\s/g, "")}`);
};
  
console.log(`
 _   _      _ _
| | | |    | | |
| |_| | ___| | | ___
|  _  |/ _ \ | |/ _ \
| | | |  __/ | | (_) |
\_| |_/\___|_|_|\___/
    ____  
    / ___| 
    \___ \ 
    ___) |
    |____/ 
            ____ 
            / ___|
            | |    
            | |___ 
            \____|
                    _   _ 
                    | | | |
                    | |_| |
                    |  _  |
                    | | | |
                    \_| |_/
`);