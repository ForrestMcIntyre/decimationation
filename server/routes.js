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
      handler: require("./handlers/home")
   },
   {
      method: "GET",
      path: "/badges",
      handler: require("./handlers/badges")
   },
   {
      method: "GET",
      path: "/capsules",
      handler: require("./handlers/capsules")
   }
];

module.exports = routes;
