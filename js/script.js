var count = 1;
var list = "";

while (count < 11){
	list += '<li> current count is: ' + count + '</li>';
	count += 1;
}

document.write("<h1>Loops</h1>");
document.write("<ol>"+ list + "</ol>");

var myItems = [
"question one",
"question two"
];

var secondList = "<ul>";
var i =0;

while (i < myItems.length)
{
	secondList += "<li>" + myItems[i] + "</li>";
};

document.write("<p>" + myItems[0] + "</p>");
