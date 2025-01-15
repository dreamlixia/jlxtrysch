module.exports = function jlxtrysch(string) {
    if (typeof string !== "string") throw new TypeError("jlxtrysch wants a string!");
    return console.log(`Hi, you entered ${string.replace(/\s/g, "")}`);
};
  