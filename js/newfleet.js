$('#newFleetForm').submit(async e => {
    e.preventDefault();
    
    var url = 'https://supply.team22.softwareengineeringii.com/addFleet';
    var username = document.getElementById('accountName').value;
    var fleet = {'username': username};
    form = document.getElementById('newFleetForm');
    fields = form.querySelectorAll('input, select');
    // console.log(form);
    console.log(fields);

    fields.forEach((e, i) => {
        // console.log(e.id);
        fleet[`${e.id}`] = e.value;
    });
    console.log(fleet);

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify(fleet)
    }).then(res => {
        if (res.status == 200) {
            alert('Fleet added!');
        } else {
            alert('Something went wrong');
        }
    }).catch(err => {
        console.log('Error: ', err);
    });
})