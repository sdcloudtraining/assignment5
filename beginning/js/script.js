$( () => {


    $("#empForm").submit((event) => {
        event.preventDefault();

        var id = $("#id").val();
        var name = $("#name").val();
        var ext = $("#ext").val();
        var email = $("#email").val();
        var selectDept = $("#selectDept").val();
     
            console.log ( `ID: ${id}`);
            console.log ( `Name: ${name}`);
            console.log ( `Extension: ${ext}`);
            console.log ( `Email: ${email}`);
            console.log ( `Department: ${selectDept}`);
    });
});

