let expr = '(1+2)/2-(2-1)'
// expr = '1+2/2-1'

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
    let left_par_num = 0
    for(let item of expr){
        if(item === '('){
            ++left_par_num
        }
        if(is_op(item)){
            while(whight[item] <= whight[stack_op.top()] && !stack_op.empty() && left_par_num <= 0){
                stack_expr.push(stack_op.pop())
            }
            stack_op.push(item)
        }else{
            if(item !== '(' && item !== ')'){
                stack_expr.push(item)
            }
        }
        if(item === ')'){
            while(!stack_op.empty()){
                stack_expr.push(stack_op.pop())
            }
            --left_par_num
        }
    }
    while(!stack_op.empty()){
        stack_expr.push(stack_op.pop())
    }

    return stack_expr.join(' ')
}


console.log(infix2suffix(expr))