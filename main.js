let render = new Renderer()
let apiManager = new APIManager()


$("#DisplayUser").on("click", function() {
    render.renderMainUser()
    render.renderFrineds()
    render.renderQuote()
    render.renderpokemon()
    render.renderBacon()

})
$("#LoadUserData").on("click", function() {
    apiManager.getmainUser()
    apiManager.getfrineds()
    apiManager.getQuote()
    apiManager.getpokemon()
    apiManager.getBacon()
})