function validator(expression) {
    count = 0
    for(var i = 0; i < expression.length; i++) {
        if(expression[i] == "("){
            count++
        } 
        if(expression[i] == ")"){
            count++
        }
        if(expression[i] == "{"){
            count++
        }
        if(expression[i] == "}"){
            count++
        }
        if(expression[i] == "["){
            count++
        }
        if(expression[i] == "]"){
            count++
        }else
            count--
    }
    if(count == 0){
        return true;
    }
    else 
        return false;
}
var a = validator([])
console.log(a);