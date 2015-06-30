var hapi = require('hapi');

var server = new hapi.Server();
server.connection({port:80});
server.start();

server.route({
   method: "GET",
   path: "/",
   handler: function(req, reply){
      reply("Hello World!");
      console.log(server.info);
   }
});
