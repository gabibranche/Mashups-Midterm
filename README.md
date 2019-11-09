# Mashups-Midterm
This Repo has all the files concerning my Mashups Midterm Project. Enjoy!


## Mashups Midterm Documentation


**Description:**

For my Midterm I wanted to use two music APIs, and create a data visualization of music based on their popularity. 
My initial idea was to use the Spotify API to manipulate ellipses based on the popularity of the song. However, since we were required to use two APIs I decided to add the feature of being to access the song lyrics as well. 

**The Process:**

*Using Spotify:*

1.	I tried to figure out how to use the Spotify API (see Spotify test website). This took a great deal of time because the Spotify API does not only have an API key but also an OATH Token which needs updating regularly. 
2.	I had to figure out how to access multiple track IDs. In the end I decided to access a Billboard Playlist and use the songs in that playlist for my array of track IDs.
3.	Once I understand how to use the Spotify API and what data it gives me, I used the data in the popularity index to change the diameter of the bubbles (ellipses).
4.	Within the bubbles I place the name of the songs using the Track name from the JSON file.

*Using the MusixMatch API:*

1.	I accessed the MusixMatch API and applied it to my test website (see MusixMatch test website). Again, this took time not because of the token but because the data retrieved came in a string rather than in a JSON format which meant it required parsing. 
2.	One I accessed the API I formatted the information in a way that allowed me to extract the lyrics in a presentable format (free of extra information and “\n”).
3.	Initially I wanted to have the lyrics come up once hovering over the bubble however due to technical and time constraints I resorted to using a button which would generate the lyrics.

*The layout of the Website*

1.	I used P5 to generate ellipses and randomized speeds and directions. With the help of Jack, I was able to generate an array of ellipses that I could then replace he diameter with the popularity index from Spotify.
2.	I wanted to have the bubbles play the song when you hover of the bubbles however again using the hover function was outside the scope of this project also adding the fact that the songs mainly work with Spotify premium. Instead I embedded the playlist so that the user can listen to the playlist while they see the song data visualization. (To get the entire playlist the user needs Spotify Premium)
3.	The button is placed below the playlist to generate the lyrics.

**Challenges and how I overcame them:**

There were many challenges I came across while executing this website, some of which I fixed and others which I would like to work on in the future.

- Generating the Spotify token – I went to the Unix lab where the lab monitor helped me debug and we discovered the token needs frequent updating. While building the website I would refresh my token to continue coding
  -	***In the future I would like to insert code that can allow the OATH token to update whenever the website it refreshed. Hopefully this is possible within the policies of the Spotify API***

- The MusixMatch API was not being accessed despite having the correct code. I honestly don’t know how I fixed this. I just tried different things till it worked.

- The window layout was not to my satisfaction but the div tags were not overlaying the way in which I wanted them to.
  - I intend to ask Jack for help as I was instructed after fall break.
  - The Musixmatch API was not able to link to the Spotify API. 
  - The tracks within the various APIs have different track IDs. To fix this I stored the name of the track from the Spotify API and used the track search API from MusixMatch to generate the track ID specific to the latter API. 
  - This track ID was stored then I could use the track lyrics API from Musixmatch by inserting the stored IDs to call the lyrics. 
  - However, my code for this was stopped by the fact that Musixmatch APIs return strings. 
  - To overcome this, I parsed the data to store only the ID but it still didn’t work.
  - For sake of presentation I did this manually as an example of how it would work in reality. 
  - Given the track ID from the search API I was able to manually insert it into the Get lyrics API. 
  - This worked and I was able to get to the point where once the button was pressed the lyrics of one of the songs in the visualization was displayed
  - ***This is definitely the hardest part of the project and I intend to fix this by finding a JSON parser/reader. I will also consult Jack for help. Once the file is parsed and the IDs accurately stored, I believe it will work as I desire.***
- Finally, I replaced the hover function with a button and an embedded playlist as I was able to debug this within the time constraint and make sure the functioned as planned. 
  - ***I still want it to have a hover function to display more information about the song such has artist and album and to play the song. However, I quite like the idea of having an input section where the user can input one of the songs presented and generate the lyrics to the right of the window. I hope that having the song inputted will overcome the barrier of having to link the two APIs on a back end.***


**Looking beyond:**

Another feature I think would be fun to have but I would only look at once my fundamental functions are fixed – I would want to program the ellipses to change the songs over time such that some float out and a replaced with other songs in the array. The array is playlist is longer than 15 songs, however since it is a public playlist as the billboard changes, the list length changes which crashes the code. I chose to kill two birds with one stone by limiting the array to the top 15 songs on the billboard which also prevent the visualization from looking cluttered and unreadable.


**Conclusion:**

This project provided a great insight to using APIs in building a website. Althougth my website is not the most advanced and requires a great deal of debugging, I am happy that I took the challenge of using two very complex and different APIs. I learned many skills and overcame many challenges in the process and hope to have a complete robust website by the end of the semester.






