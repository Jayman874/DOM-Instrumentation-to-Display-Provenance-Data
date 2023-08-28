setInterval(update, 5000)

async function update() {
    $.ajax({url: "http://localhost:3000/getStats", success: function(result){
        $('#stats').html(result);
    }});
}