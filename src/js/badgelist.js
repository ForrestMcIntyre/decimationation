var container = $(".badges");
var tiers = ["locked","bronze", "silver", "gold", "platinum", "onyx"];
var badges = ["builder","connector", "engineer", "explorer", "guardian", "hacker", "illuminator", "innovator", "liberator", "mindcontroller", "pioneer", "purifier", "recharger", "recruiter", "seer", "sojourner", "specops", "translator", "trekker", "blank"];
var badgeNames = ["Builder", "Connector", "Engineer", "Explorer", "Guardian", "Hacker", "Illuminator", "Innovator", "Liberator", "Mind Controller", "Pioneer", "Purifier", "Recharger", "Recruiter", "Seer", "Sojourner", "Spec Ops", "Translator", "Trekker", "Blank (Template)"];
for (var i=0; i<badges.length;i++){
   var row = $("<div></div>");
   row.append('<h2>'+badgeNames[i]+"</h2>");
   for (var j=0; j<tiers.length;j++){
    var wrap = $('<div class="left parent"></div>')
    var badge = $('<div class="left badge"></div>');
    badge.addClass(badges[i]);
    badge.addClass(tiers[j]);
    wrap.append(badge);
    row.append(wrap);
   }
   row.addClass("badge-row");
   container.append(row);
}

var blocks = $(".badge");
blocks.on("click", function(){
  var $this = $(this);
  console.log("click!!!");
  $(".void").removeClass("void");
  $(".click").removeClass("click");
  $this.parent().addClass("void");
  $this.addClass("click");
});

var logo = $(".logo");
logo.on("mouseenter", function(){
  var $this = $(this);
  $this.addClass("hover");
  console.log("hover");
});
logo.on("mouseleave", function(){
  $(".hover").removeClass("hover");
  console.log("end hover");
});