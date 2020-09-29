const http = require('http'),
    url = require('url'),
    fileServer = require('./fileServer.js'),
    qs = require('./namesQuery.js'),
    utils = require('./utils.js');


function handle_incoming_request(req, res) {
        console.log(req.url);
        // get the path of the file to served
        const path = url.parse(req.url).pathname;
        // get a query (true makes sure the query string is parsed into an object)
        const queryObj = url.parse(req.url,"true").query;
        switch (path) {
            case "/getNames" :
                qs.getNames(queryObj,res);
                break;
            case "/" :  //return default homepage
		// precede the given path with name of the subdirectory in which
            	// the client files are stored 
                fileServer.serve_static_file("public_html/names.html",res);
                break;
            default:
                fileServer.serve_static_file("public_html"+path,res);
                break;
        }    
            
         
}


const server = http.createServer(handle_incoming_request);

server.listen(80,function() {console.log("port 80")});
