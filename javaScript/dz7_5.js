function Transport(model, speed) {
    this.movement = true;
    this.speed = speed;
    this.model = model;

}

Transport.prototype.speedModel = function() {
    return this.speed + ' ' + this.model;
}

function Car() {
    Transport.apply(this, arguments);
    this.trafficJam = true;
    this.maximumSpeed = maximumSpeed;
}

function Airplane() {
    Transport.apply(this, arguments);
    this.flightAltitude = true;
}

function Ship() {
    Transport.apply(this, arguments);
    this.sailHeight = true
}

var a = new Transport('100', 'BMW');