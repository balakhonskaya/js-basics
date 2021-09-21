
export default function checkDiscounts (orderSum, productsNumber, promoCode = 'null') {
    if (promoCode =='ДАРИМ300') {
        if (orderSum<=300) {
            orderSum=0;
        }
    else orderSum = orderSum-300;
        }
    if (productsNumber >=10 ) {
        orderSum = orderSum*95/100;
        }

    if (orderSum>50000) {
        orderSum = 50000 + (orderSum-50000)*80/100;
        }
    if (promoCode=='СКИДКА15' && orderSum>=20000) {
        orderSum = orderSum*85/100;
        }

    return orderSum;

}