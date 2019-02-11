function shuffle(array) {
    const _array = array.slice(0)
    for (let i = 0; i < array.length -1; i++) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let temp = _array[i]
        _array[i] = _array[randomIndex]
        _array[randomIndex] = temp
    }

    return _array
}

export default function intializeDeck() {
    let id = 0
    const cards = ['fireflower', 'mushroom', 'star', '10-coin', '20-coin', '1upChest', 'fireflower', 'mushroom', 'star',].reduce((acc, type) => {
        acc.push({
            id: id++,
            type
        })
        acc.push({
            id: id++,
            type
        })
        return acc
    }, [])

    return shuffle(cards)
}