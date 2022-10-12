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