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
    var str = $( "select option:selected" ).val() + ".jpg";
    $("#capture").css("background-image", "url(" + str + ")");
    // html("<img crossOrigin='Anonymous' src='" + str + "'>");
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