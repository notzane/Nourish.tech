function submitform(){
    console.log("submitform()");
    var event = {
        name : document.getElementById('name').value,
        date : document.getElementById('date').value,
        desc : document.getElementById('desc').value,
        type : document.getElementById('type').value,
        school : document.getElementById('school').value,
        link : document.getElementById('link').value,
        lat : document.getElementById('lat').value,
        lng : document.getElementById('lng').value
    };
    console.log(event);

    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/events", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    var data = JSON.stringify(event);
    console.log(data);
    xhr.send(data);
    

}
