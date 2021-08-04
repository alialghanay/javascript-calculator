String.prototype.replaceAt = function(index, many,replacement) {
    const arrOfStr = this.split("");
    arrOfStr.splice(index, many, replacement);
    const result = arrOfStr.join("");
    return result;
};