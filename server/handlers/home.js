module.exports = function(req, reply){
	reply.view("home", {
		title: "Welcome to the DecimatioNation"
	});
}