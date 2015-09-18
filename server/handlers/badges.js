module.exports = function(req, reply){
	reply.view("badges", {
		title: "Badge Breakdown"
	});
}
