const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    it('returns an array', () => {
        expect(shuffleArray([])).toEqual([])
    })

    it('returns an array of the same length', () => {
        expect(shuffleArray([1, 2, 3])).toHaveProperty('length', 3)
    })
})