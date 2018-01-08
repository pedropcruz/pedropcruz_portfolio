const variables = {
    colors:{
      primaryColor: '#22313F',
      secondaryColor: '#E4F1FE'
    },
    value: {
        bv0: getBaseValue(1),
        bv1: getBaseValue(2),
        bv2: getBaseValue(3),
        bv3: getBaseValue(4),
        bv4: getBaseValue(5),
        bv5: getBaseValue(6),
        bv6: getBaseValue(7),
        bv7: getBaseValue(8),
        bv8: getBaseValue(9),
        bv9: getBaseValue(10),
        bv10: getBaseValue(11),
        bv11: getBaseValue(12),
    },
    fonts: {
        Montserrat: "Montserrat",
        Raleway: "Raleway",
        MontserratMedium: "MontserratM"
    }
};

export function getBaseValue(number) {
    return (number * 4).toString() + 'px';
}

export default variables;