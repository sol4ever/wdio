function CarsData(){
    this.carOpel = {
        brand: 'Opel',
        maxSpeed: '200',
        range: '1000',
        people: '5',
        doors: '3'
    },

    this.carSaab = {
        brand: 'Saab',
        maxSpeed: '100',
        range: '500',
        people: '2',
        doors: '5'
    }
}

var car = {
    car: new CarsData(),
}

export default car = car;