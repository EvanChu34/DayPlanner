// Timeblocks go here -->
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
    $("#currentDay").text(currentDate);
}
getCurrentDate();


function saveEvent(){
    localStorage.setItem("daySlot", JSON.stringify(daySlot));
}

function displayEvent(){
    daySlot.forEach(function(_thisHour){
        $("#${_thisHour.id}").val(_thisHour.plannedEvent)
    })
}

function init(){
    var storedEvent = JSON.parse(localStorage.getItem("daySlot"));

    if(storedEvent){
        daySlot = storedEvent;
    }
    saveEvent();
    displayEvent();
}


daySlot.forEach(function(thisHour){

    var dayPlan = $("<form>").attr({
        "class" : "row"
    });
    $(".container").append(dayPlan);

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
    // color for boxes 
    if(thisHour.time < DataTime_short){
        plannedData.attr({
            "class":"past"
        })
    }   else if(thisHour.time === Datatime_short){
        plannedData.attr({
            "class":"present"
        })
    }   else if(thisHour.time > Datatime_short){
        plannedData.attr({
            "class":"future"
        })
    }



    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    timeSlot.append(dayPlan, hourSlot, savePlan);


})

init();

$(".saveBtn").on("click", function(event){
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    daySlot[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    saveEvent();
    displayEvent();
})



