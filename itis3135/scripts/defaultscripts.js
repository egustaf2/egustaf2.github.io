function scriptTest()
{
    alert("Hey my Script is running!");
}

function dateAndTime()
{
    var current = new Date();
    var monthNumber = current.getMonth(); 
    var day = current.getDay();
    var year = current.getFullYear();
    var date = current.getDate();
    var hour = current.getHours();
    var minute = current.getMinutes();
    var dayOrNight;

    var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var dayOfWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

    if(hour >= 12)
    {
        hour = hour % 12;
        dayOrNight = "pm";
    }
    else
    {
        dayOrNight = "am";
    }

    let fullDateAndTime = "Today is " + hour + ":" + minute + dayOrNight + " on " + dayOfWeek[day] + ", " + date + " " + monthName[monthNumber] + " " + year;
    document.getElementById("dateTimeOutput").innerHTML = fullDateAndTime;
}

function welcome()
{
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let fullWelcome = "Gustafson Designs welcomes you, " + name + "! We're glad that you are " + feeling + "!";
    document.getElementById("welcomeOutput").innerHTML = fullWelcome;
 }

 function complementUs()
 {
    var complement = prompt("Say something we do that you like!");
    alert("Thank you for you for saying we " + complement + "! We try our best to make out customers happy.");
 }

 function totalPages()
 {
    var amountOfWebsites = prompt("How many websites do you want?");
    amountOfWebsites = parseFloat(amountOfWebsites);
    var amountOfPages = prompt("How many pages do you want each website to have?");
    amountOfPages = parseFloat(amountOfPages);
    var numberOfPages = amountOfWebsites*amountOfPages;
    numberOfPages = parseInt(numberOfPages);
    alert(numberOfPages + " pages are going to be created.");
 }

 function websiteCost()
 {
    var base = 100;
    var pages = 50;

    var numberOfPages = prompt("The base cost for a website is $100 and each added page  costs $50. How many pages do you want your website to have?")
    numberOfPages = parseInt(numberOfPages);
    var cost = base + pages * numberOfPages;
    alert("The cost of your website will be $" + cost);
 }

 