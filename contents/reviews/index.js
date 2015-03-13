var reviews = {

    searchBySku: function(sku) {

        var myApiKey = "juydxp7yd382chpwcngaq4zq";
        
        sku.replace(" ", "%20")
        
        $.get("http://api.remix.bestbuy.com/v1/reviews(sku="+sku+")?apiKey="+myApiKey+"&format=json", function(data) {
            $.get("/best-buy-api/reviews/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })
        })
    },

    display: function(id) {

        var myApiKey = "juydxp7yd382chpwcngaq4zq";
        
        $.get("http://api.remix.bestbuy.com/v1/reviews(id="+id+")?format=json&apiKey="+myApiKey+"&format=json", function(data) {
            $.get("/best-buy-api/reviews/list2.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })
        })
    },
    
    load: function() {

        $.get("/best-buy-api/reviews/ui.jade", function(template) {
            var html = jade.render(template)
            $("#searchdiv").html(html)
        })
    }
}
