

function isParenthesisValid(str){
    const parenthesisMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    let stack = []
    for(let i of str){
        if(parenthesisMap[i]){
            let tempVar = stack.pop()
            if(tempVar === parenthesisMap[i]) continue
            else return false
        }
        stack.push(i)
    }
    if(!stack.length) return true
    else return false
}
console.log(isParenthesisValid("()"))