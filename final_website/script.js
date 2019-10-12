
var diameter = [];
var songList;

var ballX = [];
var ballY = [];
var ballSpeedX = [];
var ballSpeedY = [];
var ballDiameter = [];
var songName = [];

var spotifyUrl = "https://api.spotify.com/v1/playlists/6UeSakyzhiEt4NB3UAd6NQ/tracks";
var musixUrl = "https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=jsonp&callback=callback&track_id=170774805&apikey=7d51e7af65a9d2b25fc2b490b2900fa1";
var findSongUrl	= [];	

trackID = [170774805, 169480359];
var i;

function setup() {

	getSongs();
	var canvas = createCanvas(600, windowHeight);
	// canvas.parent('sketch-holder');

	background(0);

	for (var i = 0; i<15; i++) {
	ballX.push(random(0, height));
		}

	for (var i = 0; i<15; i++) {
	ballY.push(random(0, height));
		}

		for (var i = 0; i<15; i++) {
	ballSpeedX.push(random(-5, 5));
		}

		for (var i = 0; i<15; i++) {
	ballSpeedY.push(random(-5, 5));
		}

	// 	for (var i = 0; i<15; i++) {
	// ballDiameter.push(diameter[i]);
	// console.log("ballDiameter is ", ballDiameter[i]);
	// 	}
	// ballX = random(0, width);
	// ballY =  random(0, height);
	// ballSpeedX = random(-10, 10);
	// ballSpeedY = random(-10, 10);	

	;


	
  }

function draw() {
	background(0);

for (var i = 0; i < 15; i++) {
 		ellipse(ballX[i], ballY[i], ballDiameter[i]*2);
 		fill('rgba(100%,0%,100%,0.5)')
 		text(songName[i], ballX[i]+2, ballY[i]+2 );
 		stroke(255);
 		textFont('Rigtheous');


   		ballX[i]+=ballSpeedX[i];
 		ballY[i]+=ballSpeedY[i];

 		if (ballY[i]+ballDiameter[i]/2 >= height || ballY[i]-ballDiameter[i]/2 <=0 ){
 			ballSpeedY[i] *=-1;
 		}

 		if (ballX[i]+ballDiameter[i]/2 >= width || ballX[i]-ballDiameter[i]/2 <=0){
 			ballSpeedX[i] *=-1;
		 }

	}

 
}


function getSongs() {
	$.ajax({
		url: spotifyUrl,
		method: 'GET',
		headers: { "Content-Type":"application/json","Accept": "application/json","Authorization": "Bearer BQD9PvdbTZC3WmW7O1dsrMKQEOS92LKixMm8kBF9WC6nBPKIJofVT0XHGqPdV7HvM8cKCc1eh_NqpEGso5MMxZFiPpqSrCfI-aL2fuBVgefA4DS0sC-hC3oSmxkIH4M1Fnb01aKn4V-NcH37TE11rLgCOQZlUq5vhw"},
		contentType: 'application/json',	
		beforeSend: function( xhr ) {
    		xhr.setRequestHeader( "Authorization", "Bearer BQD9PvdbTZC3WmW7O1dsrMKQEOS92LKixMm8kBF9WC6nBPKIJofVT0XHGqPdV7HvM8cKCc1eh_NqpEGso5MMxZFiPpqSrCfI-aL2fuBVgefA4DS0sC-hC3oSmxkIH4M1Fnb01aKn4V-NcH37TE11rLgCOQZlUq5vhw");
			}
			// headers: {"Authorization": "Bearer"}, 
		}).done(function(result) {

		
			// console.log(result); //logs results in inspector panel 
			// document.getElementById("headline").innerHTML= result.items[0].track.name;

			songList = result.items.length;
			 
			 var i
			 for (i=0; i<15; i++) {
			 diameter.push(result.items[i].track.popularity)	
			 console.log("diameter is ", diameter[i]);
			 ballDiameter.push(diameter[i]);
			console.log("ballDiameter is ", ballDiameter[i]);
			songName.push(result.items[i].track.name);
			 }



				}).fail(function(err) {
					throw err;
				});

}


			//  for ( var i=0; i<15; i++) {
			// 	findSongUrl.push("https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&q_track=" + songName[i] + "&quorum_factor=1&apikey=7d51e7af65a9d2b25fc2b490b2900fa1")
			// }


// function findSongs() {
// 		$.ajax({
// 				url: findSongUrl[i],
// 				method: 'GET',
// 				}).done(function(result) {

						
// 					console.log(result); //logs results in inspector panel 

// 						var trackBegin = result.search("track_id");
// 						var trackEnd = result.search("track_name");
// 						var trackSplice = result.slice(lyricsBegin, lyricsEnd);
// 						var trackSpaceFront = trackSplice.split(":").join("");
// 						var trackSpaceBack = trackSpliceFront.split(",").join("");
						
// 						console.log(trackSpliceBack);

// 						// trackID = trackSpaceBack;
// 						musixUrl = "https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=jsonp&callback=callback&track_id=" + trackID[i] + "&apikey=7d51e7af65a9d2b25fc2b490b2900fa1";

// 						i = i++;
// 				}).fail(function(err) {
// 					throw err;
// 				});

// 				}

		
	




			function showLyrics() {
				$.ajax({
					url: musixUrl,
					method: 'GET',
				}).done(function(result) {

						
					console.log(result); //logs results in inspector panel 

						var lyricsBegin = result.search("lyrics_body");
						var lyricsEnd = result.search("This Lyrics is");
						var lyricSplice = result.slice(lyricsBegin, lyricsEnd);
						var lyricSpace = lyricSplice.replace(/(\\n)/g, " ")
						document.getElementById("lyrics").innerHTML= lyricSpace;	
						console.log(lyricSpace);	
						// console.log(result);

				}).fail(function(err) {
					throw err;
				});

				}


// function toggle1() {
//   var button = document.querySelector('.toggle1');
//   var overlay = document.querySelector('.glass');
//   if (overlay.className === 'glass down') {
//     overlay.className = 'glass up';
//     button.innerText = 'CLOSE';
//   } else {
//     overlay.className = 'glass down';
//     button.innerText = 'ABOUT';
//   }

//   showLyrics();
// }





