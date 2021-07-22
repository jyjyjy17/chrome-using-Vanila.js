const player = {
    name : "nico",
    points :10,
    fat : true,
    sayHello: function(){
        console.log("hello!");
    },
};

console.log(player);
console.log(player.fat);

function sayHello(nameOfPerson,age){
    console.log("Hello! I'm " + nameOfPerson);
}
sayHello("nico");

player.sayHello(); 