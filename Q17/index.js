let months = {
'January': 31,
'February':28,
'March':31,
'April':30,
'May':31,
'June ':30,
'July' :31,
'August ':31,
'Semptember ':30,
'October ': 31,
'November ':30,
'December':31
};

const randomProperty = (months) => {
    const Months = Object.keys(months);
    if (Months.length > 0) {
        const index = Math.floor(Months.length * Math.random());
        
      	const month = Months[index];
        const days = months[month];
        return {index, month, days}
    }
    return null;
};
const property = randomProperty(months)

console.log(`month: ${property.month}`);
console.log(`days:   ${property.days}  `);
