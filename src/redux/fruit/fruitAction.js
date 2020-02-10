import { BUY_FRUIT } from './fruitType'

export const buyFruit = (number = 1) => {
    return {
        type: BUY_FRUIT,
        payload: number
    }
}