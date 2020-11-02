function add(e,f) {

    return e + f

}

let addition = add(6,4)

console.log(addition);



function multiply(ae,be) {

    let result = 0;

    let counter = 0;

    while (counter<be) {

        result = add (ae, result)

        counter++

    }

    return result;

}

console.log(multiply(6,4));





function power(x, y) {

    let result = 1;

    let counter = 0;

    while (counter<y) {

        result = multiply (x, result)

        counter++

    }

    return result;

}

    console.log(power(2,8))

    console.log(power(3,4))





    function factorial(d) {

        let result = 1;

        let counter = 0;

        while (counter<d) {

            result = multiply(d-counter, result)

            counter++

        }

        return result;

    }

    console.log(factorial(5))





    function fibonacci(x) {

        let total = 0;

        let result1 = 0; result2 = 1;

        if (x=== 1) {

        return 0;

    }

if (x=== 2) {

    return 1;

}

let counter = 2;

while (counter < x) {

    total = add(result1, result2)

    result1 = result2

    result2 = total

    counter += 1

}

return total

    }

    console.log(fibonacci(8))