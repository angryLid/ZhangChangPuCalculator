import { expect, test} from "vitest"
import { combine, divide, algo } from "./algo";

test('combine', () => {
    expect(combine([1, 2, 3], 0).sort()).toStrictEqual([
        [],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]
    ].sort())

    expect(combine([2, 2, 3, 3], 0).sort()).toStrictEqual([
        [],[2],[2],[3], [3], [2,2],[2,3],[2,3], [2, 3], [2, 3], [3, 3], [2,2,3], [2,2,3],[2,3,3],[2,3,3],[2,2,3,3]
    ].sort())

    expect(combine([])).toStrictEqual([])

    expect(combine([2, 3, 5, 7, 7], 2).sort()).toStrictEqual([
        [2,3],[2,5],[2,7],[2,7],[3,5],[3,7],[3,7],[5,7],[5,7],[7,7],
        [2,3,5],[2,3,7],[2,3,7],[2,5,7],[2,5,7],[2,7,7],[3,5,7],[3,5,7],[3,7,7],[5,7,7],
        [2,3,5,7],[2,3,5,7],[2,3,7,7],[2,5,7,7],[3,5,7,7],
        [2,3,5,7,7]
    ].sort())
})

test('divide' , () => {
    expect(divide([1,2, 3, 4])).toStrictEqual([
       
        [[1, 4], [2, 3]],
    ])

    expect(divide([2, 3, 4, 4, ])).toStrictEqual([
       
    ])

    expect(divide([4, 7, 7, 10, 11])).toStrictEqual([
       
    ])
    expect(divide([4, 7, 7, 10])).toStrictEqual([
       [[4, 10], [7, 7]]
    ])

    expect(divide([2,2, 3, 3])).toStrictEqual([
        [[2,3],[2,3]]
     ])
})

test('algo', () => {
    expect(algo([2, 3, 4,4,4, 7,9, 10, 11,11]).length).toEqual(615)
})