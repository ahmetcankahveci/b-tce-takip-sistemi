export const formatPrice = (number, currency) => {
    let locale = 'en-US';

    switch (currency) {
        case 'EUR':
            locale = 'de-DE';
            break;
        default:
            break;
    }

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(number);
};