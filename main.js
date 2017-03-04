// The player class
var Player = function(playerName) {
    // attributes 
    this.name = playerName;
    this.level = 1;
    
    this.str = 0;
    this.wis = 0;
    this.dex = 0;
    this.int = 0;
    this.con = 0;
};

Player.prototype.getName = function() {
    return this.name;
};

Player.prototype.getLevel = function() {
    return this.level;
};

Player.prototype.getStr = function() {
    return this.str;
}
Player.prototype.getWis = function() {
    return this.wis;
};

Player.prototype.getDex = function() {
    return this.dex;
};

Player.prototype.getInt = function() {
    return this.int;
};


Player.prototype.getCon = function() {
    return this.con;
};

Player.prototype.rollStats = function() {
    this.str = parseInt((Math.random() * 100) % 10) + 1;
    this.wis = parseInt((Math.random() * 100) % 10) + 1;
    this.dex = parseInt((Math.random() * 100) % 10) + 1;
    this.int = parseInt((Math.random() * 100) % 10) + 1;
    this.con = parseInt((Math.random() * 100) % 10) + 1;
};

function test() {
    var testPlayer = new Player("Testossaurus");
    testPlayer.rollStats();
    document.getElementById("name").innerHTML = testPlayer.getName();
    document.getElementById("level").innerHTML = testPlayer.getLevel();
    document.getElementById("str").innerHTML = testPlayer.getStr();
    document.getElementById("wis").innerHTML = testPlayer.getWis();
    document.getElementById("dex").innerHTML = testPlayer.getDex();
    document.getElementById("int").innerHTML = testPlayer.getInt();
    document.getElementById("con").innerHTML = testPlayer.getCon();
}