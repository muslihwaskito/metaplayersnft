/* multi youtu 2020-02-28
   kim ji hyun
*/

function youtubeset() {
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	var player;
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('isframe', {
	  videoId: '',
	  playerVars: {controls:'1',showinfo:'0',wmode:"opaque",rel:'0',autoplay:'0',loop:'0',mute:'1',listType:'playlist',playsinline:'1'},
	  events: { 'onStateChange': onPlayerStateChange }
  });
}
function onPlayerStateChange(event) {}
youtubeset(); 

$(window).bind("load", function() {
	$(".btn_videoPlay").click(function(event) {
		event.preventDefault();
		var popTarget= $(this).attr('href');
		$(popTarget).show();
		$(popTarget).addClass('open');

		var dataId = $(this).attr('data-id');

		player.loadVideoById(dataId);

		 setTimeout(function() {
			player.unMute();
		 }, 200);

		 $('.btn_videoClose, .dimmed').click(function(event){
			event.preventDefault();
			$(popTarget).hide();
			$(popTarget).removeClass('open');
			player.stopVideo();
		});
	});
});


//video
$('.character .cha_g a').click(function(){
	$('#popcha').addClass('open');

	cssAdd = $(this).attr('class');
	urlVideo = $(this).attr('data-id');
	$('#popcha video').attr('src', urlVideo);
	$('#popcha a').attr('href', urlVideo);
	$('#popcha .popup').addClass(cssAdd);

	var isVideo = document.getElementById("isVideo");
	 setTimeout(function() {
		isVideo.muted = false;
	 }, 200);
	return false;
});

$('.popCha_ui .btn_close,.popCha_ui .dimmed').click(function(){
	$('#popcha').removeClass('open');
	$('#popcha video').attr('src', '');
	$('#popcha a').attr('href', '');
	$('#popcha .popup').removeClass(cssAdd);
	isVideo.muted = true;

	return false;
});