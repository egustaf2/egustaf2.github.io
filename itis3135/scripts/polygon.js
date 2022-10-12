function getPolygon()
{
    var enterNumber = prompt("The Elegant Goose would like you to pick a number betweem 1 and 10 to find the polygon!");
    validateEntry(enterNumber);
}

function validateEntry(number)
{
    if(isNaN(number))
    {
        alert("Invalid Entry. Please pick a number between 1 and 10 to find the polygon!");
        getPolygon();
    }
    else
    {
        numberOfSides = Math.trunc(number);
        if(numberOfSides < 1 || numberOfSides > 10)
        {
            alert("Invalid Entry. Please pick a number between 1 and 10 to find the polygon!");
            getPolygon();
        }
        else
        {
            getShape(numberOfSides);
        }
    }
}

function getShape(sides)
{
    var polygons = new Array("monogon", "bigon", "triangle", "quadrilateral", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon");
    var message = "A polygon with " + sides + " sides is called a " + polygons[sides - 1] + ".";
    document.getElementById("polygonName").innerHTML = message;
}
