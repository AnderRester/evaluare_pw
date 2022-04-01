class Tour {
    constructor(name, costOneDay, days, insurance) {
        this.name = name;
        this.costOneDay = costOneDay;
        this.days = days;
        this.insurance = insurance;
    }
    getName() {
        return this.name;
    }
    getCostOneDay() {
        return this.costOneDay;
    }
    getDays() {
        return this.days;
    }
    getInsurance() {
        return this.insurance;
    }
    getPrice() {
        return (this.costOneDay * this.days + this.insurance) + ` = ${this.costOneDay} * ${this.days} + ${this.insurance}`;
    }
    getInfoAboutTour() {
        console.log(this.name);
        console.log(this.costOneDay);
        console.log(this.days);
        console.log(this.insurance);
        console.log(this.getPrice());
    }
    increaseDays(addDays) {
        return this.days = this.days + addDays;
    }
    setTax(addPercent) {
        return ((this.costOneDay * this.days + this.insurance) * addPercent) / 100;
    }
    getPriceNetto(addPercent) {
        return `${this.costOneDay * this.days + this.insurance} + ${addPercent}% =`, (this.costOneDay * this.days + this.insurance) + this.setTax(addPercent);
    }
}
console.log("First Task");
var tour = new Tour('Turkey', 1500, 7, 750);
console.log(tour.name); //afișează 'Turkey'
console.log(tour.costOneDay); //afișează 1500
console.log(tour.days); //afișează 7
console.log(tour.insurance); //afișează 750
console.log(tour.getPrice()); //afișează 11250 = 1500*7+750

console.log("Second Task");
var tour_id1 = new Tour('Spain', 1800, 7, 750);
var tour_id2 = new Tour('Poland', 1200, 7, 750);

tour_id1.getInfoAboutTour();
tour_id2.getInfoAboutTour();

console.log("Third Task");
const showCheapestTour = (tour_id1, tour_id2) => {
    if (tour_id1.getPrice() < tour_id2.getPrice()) {
        console.log('The cheapest tour is:');
        tour_id1.getInfoAboutTour();
        console.log("Is cheapest by " + (tour_id1.getPrice() - tour_id2.getPrice()));
    } else if (tour_id1.getPrice() > tour_id2.getPrice()) {
        console.log('The cheapest tour is:');
        tour_id2.getInfoAboutTour();
        console.log("Is cheapest by " + (tour_id1.getPrice() - tour_id2.getPrice()));
    } else {
        console.log('The price is equal!');
        tour_id1.getInfoAboutTour();
        tour_id2.getInfoAboutTour();
    }
}

showCheapestTour(tour_id1, tour_id2);


console.log("Fourth Task");
console.log(tour.getName()); //afișează ' Turkey'
console.log(tour.getCostOneDay()); //afișează 1500
console.log(tour.getDays()); //afișează 7
console.log(tour.getInsurance()); //afișează 750
console.log(tour.getPrice()); //afișează 11250 = 1500*7+750


console.log("Fifth Task");
console.log(tour.getName()); //afișează ' Turkey'

console.log(tour.getCostOneDay()); //afișează 1500
console.log(tour.getDays()); //afișează 7
console.log(tour.getInsurance()); //afișează 750
console.log(tour.getPrice()); //afișează 11250 = 1500*7+750
tour.increaseDays(3); //mărește days cu 3
console.log();
console.log(tour.getPrice()); //afișează 15750 = 1500*10+750

console.log("Sixth task");

console.log(tour.getName()); //afișează ' Turkey'
console.log(tour.getCostOneDay()); //afișează 1500
console.log(tour.getDays()); //afișează 7
console.log(tour.getInsurance()); //afișează 750
console.log(tour.getPrice()); //afișează 11250 = 1500*7+750
tour.increaseDays(3); //mărește days cu 2
console.log(tour.getPrice()); //afișează 15750 = 1500*10+750
tour.setTax(5); //setează procentul agenției de turism la 5%
console.log(tour.getPriceNetto(5)); //afișează 15750 + 5% = 16537.5

console.log("Seventh task");

const arrayOfTours = []

arrayOfTours.push(tour);
arrayOfTours.push(tour_id1);
arrayOfTours.push(tour_id2);

console.log(arrayOfTours);

for (let i = 0; i < arrayOfTours.length; i++) {
    console.log(arrayOfTours[i].name); //afișează 'Turkey'
    console.log(arrayOfTours[i].costOneDay); //afișează 1500
    console.log(arrayOfTours[i].days); //afișează 7
    console.log(arrayOfTours[i].insurance); //afișează 750
    console.log(arrayOfTours[i].getPrice()); //afișează 11250 = 1500*7+750
}