var request = require("request");
// error can be potential error, can be problem the server goes down, 
// request time's out, out of wifi
console.log("Sunset in Hawaii is at ");
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(error, response, body){
    // 200 means it works
    if (!error && response.statusCode == 200){
        // body is string, JSON.parse is to convert body to java object
        var data = JSON.parse(body);
        console.log(data["query"]["results"]["channel"]["astronomy"]["sunset"]);
    }
});