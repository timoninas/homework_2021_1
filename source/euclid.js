'use strict';

/**
 * Находит наибольший общий делитель алгоритмом Евклида.
 * @constructor
 * @param {number} args - Переменное число параметров.
 */
const euclid = (...args) => {
    let res = 0

    // Проверка на корректность входных данных
    args.forEach((item) => {
        if (!isFinite(item)) {
            res = NaN
        }
    })

    if (isNaN(res)) {
        return res
    }

    // Алгоритм Евклида
    args.forEach((item, index, array) => {
        if (index === 0) {
            res = array[0]
        } else {
            let a = item
            let b = res
            while (a !== b) {
                if (a > b) {
                    let tmp = a
                    a = b
                    b = tmp
                }
                b = b - a
            }
            res = a
        }
    });
    return res
}

