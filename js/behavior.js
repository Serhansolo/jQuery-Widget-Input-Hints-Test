$(document).ready( function() {
    $('.hint').each(function() {
        var parentID = $(this).prev().find('input').attr('id');
        $(this).hint({hintFor: parentID});
    });
});