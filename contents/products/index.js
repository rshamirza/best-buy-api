var products = {

    searchByName: function(name) {

        var myApiKey = "juydxp7yd382chpwcngaq4zq";
        
        name.replace(" ", "%20")
        
        $.get("http://api.remix.bestbuy.com/v1/products(name="+name+"*)?apiKey="+myApiKey+"&format=json", function(data) {
            $.get("/best-buy-api/products/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })
        })
    },

    display: function(id) {
        
        var myApiKey = "juydxp7yd382chpwcngaq4zq";

        $.get("http://api.remix.bestbuy.com/v1/products(sku="+id+")?apiKey="+myApiKey+"&format=json", function(data) {
            $.get("/best-buy-api/products/list2.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })
        })
    },
    load: function() {

        $.get("/best-buy-api/products/ui.jade", function(template) {
            var html = jade.render(template)
            $("#searchdiv").html(html)
        })
    }
}
