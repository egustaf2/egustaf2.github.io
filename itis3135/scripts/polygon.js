function alertUser()
{
    var num = prompt("The Elegant Goose would like you to pick a number betweem 1 and 10 to find the polygon!");
    validateNum(num);
}

function validateEntry(num)
{
    if(isNaN(num))
    {
        return false;
    }
    if(input < -10 || input > 10 || imput == 0 || input == null)
    {
        return false;
    }
    return true;
}

function getShape()
{
    while(true)
    {
        const polygons = ["henagon", "Digon", "Trigon", "Tretragon", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Enneagon", "Decagon"];
        let input = prompt("The Elegant Goose would like you to pick a number between 1 and 10: ", 1);
        if(!validateEntry(input))
        {
            continue;
        }
        else
        {
            alert(polygons[Math.abs(Math.round(input)) - 1]);
            break;
        }

    }
}
