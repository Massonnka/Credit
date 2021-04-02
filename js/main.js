$(document).ready(function () {
    var token = '7bdd3052a9e7b69f3ea743967f01546d1fc387a5';
    $(".address").suggestions({
        token: token,
        type: "ADDRESS",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
    $(".job").suggestions({
        token: token,
        type: "PARTY",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
    $(".fio").suggestions({
        token: token,
        type: "NAME",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
    $(".fms").suggestions({
        token: token,
        type: "fms_unit",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
});