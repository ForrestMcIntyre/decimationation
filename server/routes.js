var routes = [
   {
      method: "GET",
      path: "/assets/{param*}",
      handler: {
         directory: {
            path: "build"
         }
      }
   },
   {
      method: "GET",
      path: "/",
      handler: function(req, reply){
         reply("Hello World!");
      }
   },
   {
      method: "GET",
      path: "/badges",
      handler: require("./handlers/badges")
   }
];

module.exports = routes;
