//This is the class that will manage all your APIs
const mainUser = {
    firstName: 0,
    lastName: 0,
    State: 0,
    City: 0,
    picture: 0
}
let about = ""
let text = ""
let pokemon = {}
let arrOfffriends = []
class APIManager {
    constructor() {
        this.data = {}
    }
    getmainUser = function() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?format=JSON',
            success: function(data) {
                mainUser.firstName = data.results[0].name.first
                mainUser.lastName = data.results[0].name.last
                mainUser.State = data.results[0].location.state
                mainUser.City = data.results[0].location.city
                mainUser.picture = data.results[0].picture.medium

            }

        })
    }
    getfrineds = function() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=6',
            success: function(data) {
                arrOfffriends = []
                for (let i = 0; i < data.results.length; i++) {
                    let friend = {}
                    friend.firstName = data.results[i].name.first,
                        friend.lastName = data.results[i].name.last
                    arrOfffriends.push(friend)
                }
            }
        });
    }
    getQuote = function() {
        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest',
            success: function(data) {
                text = data.quote;
            }
        })
    }
    getpokemon = function() {
        const pokeNumber = (Math.floor(Math.random() * 94) + 1);
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${pokeNumber}/`,
            success: function(data) {
                pokemon.imgdata = data.sprites.front_default
                pokemon.namepoke = data.name

            }
        })

    }
    getBacon = function() {
        $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?callback=?',
            success: function(data) {
                about = data[0]
            }
        })


    }
}