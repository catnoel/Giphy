
	var tvShowArray = ["Friends", "New Girl", "Scandal", "Golden Girls", "Pretty Little Liars"];
	
	
	for( var i = 0; i < tvShowArray.length; i++ ){
		$("#tvshowsbuttons").append("<input type='button' value='" + tvShowArray[i] + "'/>");
	}

	$("#addtvshow").on("click", function(event){
		var newTVShowArray = $("#tvshow-input").val();
		$("#tvshowsbuttons").append("<input type='button' value='" + newTVShowArray + "'/>");
	})


	$("#addtvshow", ).on("click", function(event){
		event.preventDefault();

		var searchTerm = $("#tvshow-input").val();
		var api_key = "6715f30c51e54bcc874723760ed56357";
		var url = "https://api.giphy.com/v1/gifs/search" + "?" + "&api_key=" 
		+ api_key + "&q=" + searchTerm + "&limit=10";


		$.ajax({
			url: url,
			method: "GET"
		}).done(function(response){
			launchnewGifs(response);
		
			})
		
	});
	

	function launchnewGifs(response) {
		var gifs = response.data;
		$("#tvshows").empty();
			for(var i=0; i < gifs.length; i++) {
				var img = gifs[i].images.preview_gif.url;
				$("#tvshows").append("<p><img src='" + img + "'></img></p>");
				
			}
	}

	
//add hover function when mouse is over button
//add click listener to each button to have list of 10 gifs to show
	//add ratings on each gif
	//add click listener to each gif to move picture 
	//add click listener to each gif to stop moving when we click again


//use input form to have new tv shows append/join the array of shows

	$(":button").click (function(){

		var searchTerm = $(":button").val();
		var api_key = "6715f30c51e54bcc874723760ed56357";
		var url = "https://api.giphy.com/v1/gifs/search" + "?" + "&api_key=" 
		+ api_key + "&q=" + searchTerm + "&limit=10";
		console.log(searchTerm);

		$.ajax({
			url: url,
			method: "GET"
		}).done(function(response){
			launchnewGifs(response);
		
			})
	})



