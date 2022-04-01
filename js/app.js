class Tour {
    constructor(name, costOneDay, days, insurance) {
        this.name = name;
        this.costOneDay = costOneDay;
        this.days = days;
        this.insurance = insurance;
    }
    getPrice() {
        return this.costOneDay * this.days + this.insurance;
    }
    getInfoAboutTour() {
        console.log(this.name);
        console.log(this.costOneDay);
        console.log(this.days);
        console.log(this.insurance);
        console.log(this.getPrice());
    }
}

var tour = new Tour('Turkey', 1500, 7, 750);
console.log(tour.name); //afișează 'Turkey'
console.log(tour.costOneDay); //afișează 1500
console.log(tour.days); //afișează 7
console.log(tour.insurance); //afișează 750
console.log(tour.getPrice()); //afișează 11250 = 1500*7+750

var tour_id1 = new Tour('Spain', 1800, 7, 750);
var tour_id2 = new Tour('Poland', 1200, 7, 750);

tour_id1.getInfoAboutTour();
tour_id2.getInfoAboutTour();