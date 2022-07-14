export const randomNumber: Function = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const isNonEmptyAll: Function = (ar: Array<any>): Boolean => {
    return ar.every(item => (item !== undefined && item !== null && item !== ''));
}
