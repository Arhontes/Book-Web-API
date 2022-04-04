
$(function () {
    $("#loaderbody").addClass('hide');

    $(document).bind('ajaxStart', function () {
        $("#loaderbody").removeClass('hide');
    }).bind('ajaxStop', function () {
        $("#loaderbody").addClass('hide');
    });
});

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
                    $("#view-all").html(response.html);
                    $("#form-modal .modal-body").html('');
                    $("#form-modal .modal-title").html('');
                    $("#form-modal").modal('hide');
                    $.notify('submitted successfully', { globalPosition: 'top center', className:'success'})
                }
                else
                    $("#form-modal .modal-body").html(response.html);

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

jQueryAjaxDelete = form => {
    if (confirm('Are you sure to delete this record?')) {
        try {
            $.ajax({
                type: 'POST',
                url: form.action,
                data: new FormData(form),
                contentType: false,
                processData: false,
                success: function (response) {
                   
                        $("#view-all").html(response.html);
                    $.notify('delete successfully', { globalPosition: 'top center', className:'success' })
                },
                error: function (err) {
                    console.log(err)
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
    //to prevent default form submit event
    return false;
}