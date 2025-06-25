// Dada la siguiente problemática: ¿puede un número X formarse
// usando la suma de 2 elementos de un array?
// Ejemplo 1
// Input: nums = [1,4,3,9], requiredSum = 8
// Output: False
// Ejemplo 2
// Input: nums = [1,2,4,4], requiredSum = 8
// Output: True

// Desarrolle (en pseudo código o su lenguaje de preferencia):
// 1. Un algoritmo que resuelva el problema asumiendo que la máquina en donde va a correrse el
// programa tiene recursos infinitos, que el tiempo de ejecución no importa y que lo más
// importante es realizar el desarrollo en el menor tiempo posible.
// 2. Un algoritmo que resuelva el problema asumiendo que los recursos son un bien preciado,
// que el tiempo de ejecución si importa y que el tiempo de desarrollo no es importante.
// Ante cualquier duda o ambigüedad en el enunciado, es libre de hacer todas las suposiciones
// necesarias, siempre y cuando las especifique.


const sum = (array, requiredSum) => {
    //camino 1
    // for (let i = 0; i < array.length; i++) {
    //     const arrItemI = array[i];
    //     for (let j = 0; j < array.length; j++) {
    //         const arrItemJ = array[j];
    //         if (arrItemI + arrItemJ === requiredSum) {
    //             return true
    //         }
    //     }
    // }

    //camino 2

    const item = new Map()

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const diff = requiredSum - element
        if (item.has(diff)) {
            return true
        }
        item.set(element, i)
    }
    return false




}

const dataResult = sum([1,2,4,4], 8)
console.log("🚀 ~ dataResult:", dataResult)
