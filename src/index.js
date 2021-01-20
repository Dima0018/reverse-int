module.exports = function reverse (n) {
    if(n<0){
        n = 0 - n;
    }
    let array = n.toString().split("");
    let res = "";
    for(let i =array.length-1; i>-1; i--){
        res += array[i]
    }
    return +res;
}
