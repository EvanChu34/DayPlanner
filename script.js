// Timeblocks go here -->
var daySlot = [
    {
        hourSlotID: "09 ",
        timeID: "9",
        plannedEvent:"",
        timeMed:"am"
    },
    {
        hourSlotID : "10 ",
        timeID: "10",
        plannedEvent:"",
        timeMed:"am"
    },
    {
        hourSlotID : "11 ",
        timeID: "11",
        plannedEvent:"",
        timeMed:"am"
    },
    {
        hourSlotID : "12 ",
        timeID: "12",
        plannedEvent:"",
        timeMed:"pm"
    },
    {
        hourSlotID : "01 ",
        timeID: "13",
        plannedEvent:"",
        timeMed:"pm"
    },
    {
        hourSlotID : "02 ",
        timeID: "14",
        plannedEvent:"",
        timeMed:"pm"
    },
    {
        hourSlotID: "03 ",
        timeID: "15",
        plannedEvent:"",
        timeMed:"pm"
    },
    {
        hourSlotID : "04 ",
        timeID: "16",
        plannedEvent:"",
        timeMed:"pm"
    },
    {
        hourSlotID : "05 ",
        timeID: "17",
        plannedEvent:"",
        timeMed:"pm"
    }
];

function getCurrentDate(){
    var currentDate = luxon.DateTime.local().toFormat('MMMM dd, yyyy')
    $("#currentDay").text(currentDate);
}

function saveEvent(){
    localStorage.setItem("daySlot", JSON.stringify(daySlot));
}

function displayEvent(){
    daySlot.forEach(function(_thisHour){
        $(`#${_thisHour.id}`).val(_thisHour.plannedEvent)
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

getCurrentDate();

daySlot.forEach(function(thisHour){

    var dayPlan = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(dayPlan);

    var timeSlot = $("<div>")
        .text(`${thisHour.hourSlotID}${thisHour.timeMed}`)
        .attr({
            "class": "col-md-2 hour"
    });


    var hourSlot = $("<div>")
        .attr({
            "class": "col-md=9 description p-0"
        });
    
    var plannedData = $("<textarea>");
    hourSlot.append(plannedData);
    plannedData.attr("id", thisHour.id);
    if (thisHour.time < luxon.DataTime_short){
        plannedData.attr({
            "class": "past",
        })
    }   else if(thisHour.time === luxon.Datatime_short){
        plannedData.attr({
            "class": "present"
        })
    }   else if(thisHour.time > luxon.Datatime_short){
        plannedData.attr({
            "class": "future"
        })
    }

    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    dayPlan.append(timeSlot, hourSlot, savePlan);


})

init();

$(".saveBtn").on("click", function(event){
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    daySlot[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    saveEvent();
    displayEvent();
})



