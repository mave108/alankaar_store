export const discountedPrice = (price, discount = 0) => {
    let safeDiscount = parseInt(discount) || 0;
    let safePrice = parseFloat(price) || 0;
    return (safePrice - (safePrice * safeDiscount / 100)).toFixed(2);
}

export const actualPrice = (price = 0) => {
    return price.toFixed(2);
}