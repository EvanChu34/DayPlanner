// Timeblocks go here -->
var DateTime = luxon.DateTime; //--> Luxon's date object
var localTime=DateTime.local(); // --> To get the current time
console.log(localTime.toString()) // --> Returns String ->2020-10-21T03:27:22.247+05:30

var daySlot = [
    {
        hourSlotID = "1",
        timeID= "9",
        plannedEvent="",
        timeMed="am"
    },
    {
        hourSlotID = "2",
        timeID= "10",
        plannedEvent="",
        timeMed="am"
    },
    {
        hourSlotID = "3",
        timeID= "11",
        plannedEvent="",
        timeMed="am"
    },
    {
        hourSlotID = "4",
        timeID= "12",
        plannedEvent="",
        timeMed="pm"
    },
    {
        hourSlotID = "5",
        timeID= "1",
        plannedEvent="",
        timeMed="pm"
    },
    {
        hourSlotID = "6",
        timeID= "2",
        plannedEvent="",
        timeMed="pm"
    },
    {
        hourSlotID= "7",
        timeID= "3",
        plannedEvent="",
        timeMed="pm"
    },
    {
        hourSlotID = "8",
        timeID= "4",
        plannedEvent="",
        timeMed="pm"
    },
    {
        hourSlotID = "9",
        timeID= "5",
        plannedEvent="",
        timeMed="pm"
    }
];

function getCurrentDate(){
    var currentDate = luxon.DateTime.local().toLocaleString(DateTime.DATE_MED)
    console.log(currentDate);
    $("#currentDay").text(currentDate);
}
getCurrentDate();


function saveEvent(){
    localStorage.setItem("daySlot", JSON.stringify("daySlot"));
}

function displayEvent(){
    daySlot.forEach(function(thisHour){
        $("{#thisHour.id}").val(thisHour.plannedEvent)
    })
}

function run(){
    var storedEvent = JSON.parse(localStorage.getItem(daySlot));

    if(storedEvent){
        daySlot = storedEvent;
    }
    saveEvent();
    displayEvent();
}

// time to add the boxes 
daySlot.forEach(function(thisHour){

    var dayPlan = $("<form>").attr({
        "class" : "row"
    });

    var timeSlot = $("<div>")
        .text("${thisHour.hour}${thisHour.timeMed}")
        .attr({"class": "col-md-2 hour"
    });

    var hourSlot = $("<div>")
        .attr({"class": "col-md=9 description p-0"
    });
    
    var plannedData = $("<textarea>");
    hourSlot.append(plannedData);
    plannedData.attr("id", thisHour.id);




    
})


// color coded work  --> 
// look on old code for the save button


