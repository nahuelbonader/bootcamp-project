export const errorsByStack = {
    'cart_not_found': {
        status: 404,
        msg: 'Carro no encontrado',
        devStack: `cart_not_found`
    },
    'cart_already_exists': {
        status: 409,
        msg: `Carro ya existe`,
        devStack: `cart_already_exists`
    }
}