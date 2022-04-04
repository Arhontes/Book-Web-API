showInPopup = (url, title) => {
    $.ajax({
        type: "GET",
        url: url,
        success: function (responce){
            $("#form-modal .modal-body").html(responce);
            $("#form-modal .modal-title").html(title);
            $("#form-modal").modal('show');
    }
    })
}


jQueryAjaxPost = form => {
    try {
        $.ajax({
            type: 'POST',
            url: form.action,
            data: new FormData(form),
            contentType: false,
            processData: false,
            success: function (response) {
                if (response.isValid) {
<<<<<<< HEAD
                    $("#view-all").html(response.html);
=======
                    $("#view-all").html(responce.html);
>>>>>>> cc7d309b6ebbc55b734b46580f3d4db390ef25c5
                    $("#form-modal .modal-body").html('');
                    $("#form-modal .modal-title").html('');
                    $("#form-modal").modal('hide');
                }
                else
<<<<<<< HEAD
                    $("#form-modal .modal-body").html(response.html);
=======
                    $("#form-modal .modal-body").html(responce.html);
>>>>>>> cc7d309b6ebbc55b734b46580f3d4db390ef25c5
            },
            error: function (err) {
                console.log(err)
            }
        })


    } catch (e) {
        console.log(e)

    }
    //to prevent default form submit event
    return false;
}