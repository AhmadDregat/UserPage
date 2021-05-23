    class Renderer {
        renderMainUser = function() {
            let source = $("#mainUser").html()
            const template = Handlebars.compile(source);
            $(".user-container").empty();
            let newHtml = template(mainUser);
            $(".user-container").append(newHtml);
        }
        renderFrineds = function() {
            const source = $("#friendUsers").html();
            const template = Handlebars.compile(source);
            let newHtml = template({ arrOfffriends })
            $(".friends-container").empty()
            $(".friends-container").append(newHtml)
        }
        renderQuote = function() {
            const source = $("#QuoteInfo").html();
            const template = Handlebars.compile(source);
            let newHtml = template({ text })
            $(".quote-container").empty()
            $(".quote-container").append(newHtml)
        }
        renderpokemon = function() {
            let source = $("#pokemonInfo").html()
            const template = Handlebars.compile(source);
            $(".pokemon-container").empty();
            let newHtml = template(pokemon);
            $(".pokemon-container").append(newHtml);

        }
        renderBacon = function() {
            const source = $("#AboutmeInfo").html();
            const template = Handlebars.compile(source);
            let newHtml = template({ about })
            $(".meat-container").empty()
            $(".meat-container").append(newHtml)
        }

    }