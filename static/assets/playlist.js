
$(document).ready(function() {

    $("form").on("submit", function() {

        console.log("I CAME IN UTIL FILE");

        let user = $("form input");
        let username = {user: user.val()};

        $.ajax({
            type: "POST",
            url: "/playlist",
            data: username,
            success: function(data) {
            location.reload();
            }
        });

        return false;
    });

    $("li").on("click", function(){
        let item = $(this).text();
        console.log("item : "+item);
        $.ajax({
            type: "DELETE",
            url: "/playlist/"+item,
            success: function(data) {
                location.reload();
            }

        });
    });
});
