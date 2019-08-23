$( "#create_image" ).click(function() {
    domtoimage.toJpeg(document.querySelector("#capture"), { quality: 1 })
    .then(function (dataUrl) {
        $("#download_naked").attr("href", dataUrl);
        $("#download_naked").attr("download", String(Date.now())+".png");
        document.getElementById("download_naked").click();
    });
});

$( "#img_type" )
  .change(function () {
    var str = $( "select option:selected" ).val() + ".png";
    $(".sticker").css("background-image", "url(stickers/" + str + ")");
    var color = "#fff";
    switch ($( "select option:selected" ).val()) {
        case '1':
            color = "#d09f6b";
            break;
        case '2':
            color = "#68a86d";
            break;
        case '3':
            color = "#de75bb";
            break;
        case '4':
            color = "#4788c4";
            break;
        default:
            color = "#4788c4";
            break;
    }
    $("#label_color").val(color);
    $(".naked_label").css("background-color", color);
  })

$('#text_for_img').on('input', function() {
    $('#text_img').html('<p>' + $(this).val() + '</p>');
    if ($('#text_img').height() > 600) {
    	var i = parseInt($('#text_img').css('font-size'));
    	while($('#text_img').height() > 600) {
    		$('#text_img').css('font-size', (i-1) + 'px');
    		i--;
    	}
    } else if ($('#text_img').height() < 600) {
    	var i = parseInt($('#text_img').css('font-size').replace('px', ''));
    	while($('#text_img').height() < 600 && i < 50) {
    		i++;
    		$('#text_img').css('font-size', i + 'px');
    	}
    }
});

$( "#label_color" )
  .change(function () {
    var str = $( "#label_color" ).val();
    $(".naked_label").css("background-color", str);
  })