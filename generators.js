/* function* strGenerator() {
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}

const str = strGenerator()
console.log(str.next())   //console.log(str.next().value)

console.log(str.next())

console.log(str.next())

console.log(str.next())

console.log(str.next()) // { value: 'o', done: false }

console.log(str.next()) // { value: undefined, done: true } */


/* function* numberGen(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}


const num = numberGen(7)

console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next()) */


/* const iterator = {
    gen(n = 10) {
        let i = 0

        return {
            next() {
                if (i < n) {
                    return { value: ++i, done: false }
                }
                return { value: undefined, done: true }
            }
        }
    }
}  */

/* const itr = iterator.gen()

console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next()) */
 

//  for of работает с символами (7 тип данных в js) 
/* for (let k of 'hello') {
    console.log(k)
}

for (let k of [1,1,2,3,4,5,5,6,7]) {
    console.log(k)
} */
// имитация генератора
/* const iterator = {
    [Symbol.iterator] (n = 10) {
        let i = 0

        return {
            next() {
                if (i < n) {
                    return { value: ++i, done: false }
                }
                return { value: undefined, done: true }
            }
        }
    }
}  

for (let k of iterator) {
    console.log(k)
}
*/

// реальный генератор
function* iter(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

for (let k of iter(7)) {
    console.log(k)
}