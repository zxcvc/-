let expr = [
    '(', '(', '10', '+', '(',
    '6', '-', '(',  '(', '9',
    '+', '3', ')',  '*', '-11',
    ')', ')', ')',  '/', '17',
    '-', '2', ')',  '+', '5'
]

Array.prototype.top = function(){
    return this[this.length-1]
}
Array.prototype.empty = function(){
    return this.length <= 0
}

const whight = {
    '+':1,
    '-':1,
    '*':2,
    '/':2,
}

function is_op(str){
    return !!whight[str]
}

function infix2suffix(expr){
    const stack_op = []
    const stack_expr = []
    const stack_left_par = []
    for(let i = 0; i < expr.length; ++i){
        if(expr[i] === '('){
            stack_left_par.push(i)
        }
        if(is_op(expr[i])){
            if(stack_left_par.empty()){
                while(!stack_op.empty() && whight[expr[stack_op.top()]] >= whight[expr[i]]){
                    stack_expr.push(stack_op.pop())
                }
            }else{
                while(!stack_op.empty() && stack_op.top() > stack_left_par.top()){
                    stack_expr.push(stack_op.pop())
                }
            }
            stack_op.push(i)
        }else{
            if(expr[i] !== '(' && expr[i] !== ')'){
                stack_expr.push(i)
            }
        }
        if(expr[i] === ')'){
            while(!stack_op.empty() && stack_op.top() > stack_left_par.top()){
                stack_expr.push(stack_op.pop())
            }
            stack_left_par.pop()
        }
    }
    while(!stack_op.empty()){
        stack_expr.push(stack_op.pop())
    }

    return stack_expr.map(v=>expr[v])
}


let res = infix2suffix(expr)
console.log(res)
