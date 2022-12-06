# Media-Card-Web-Component

<div align="center">
<a href="https://github.com/MarketingPipeline/Media-Card-Web-Component"> <img height="300px" src="https://user-images.githubusercontent.com/86180097/177226706-2948933e-d3fc-4940-9f62-fab83bea48fe.png"/> </a> 
</div>  
    
<p align="center">
  <b>Show off your favourite movies, tv shows & songs on your web page!</b>

  <br>
  <small> <b><i>Show your support!</i> </b></small>
  <br>
   <a href="https://github.com/MarketingPipeline/Media-Card-Web-Component">
    <img title="Star on GitHub" src="https://img.shields.io/github/stars/MarketingPipeline/Media-Card-Web-Component.svg?style=social&label=Star">
  </a>
  <a href="https://github.com/MarketingPipeline/Media-Card-Web-Component/fork">
    <img title="Fork on GitHub" src="https://img.shields.io/github/forks/MarketingPipeline/Media-Card-Web-Component.svg?style=social&label=Fork">
  </a>
   </p>  


A custom web element to easily show off your favorite movies, TV shows & songs!


## Example and usage

You can view a demo of this Web Component in use [here.](https://marketingpipeline.github.io/Media-Card-Web-Component/demo)





	
 <br>
<details><summary>How to use <b>Media Card</b>:</summary>
 <br>		
 
	
<br>	 
<br>	 
	
<details><summary>How to show a <b>Book</b>:</summary>
	
### Usage
	 
   
```html
 <media-card book="Animal Farm"></media-card>
```

   include this [script](https://github.com/MarketingPipeline/Media-Card-Web-Component/blob/main/dist/media-card-wc.min.js) at in your HTML document.
         
    <script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/Media-Card-Web-Component@v1.0.3/dist/media-card-wc.min.js" type="module"></script> 



     


	   
	
<b><i>Note:</b></i> You can show as books as you want! You can also use a ```author``` attribute for a more accurate result. 
	
 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	
</details> 




<br>		
 
	
<br>	 
<br>	 
	
<details><summary>How to show a <b>Movie</b>:</summary>
	
### Usage
	 
   
```html
 <media-card name="The Mask (1994)"></media-card>
```

Note: For movies & TV show a API Key is required from TheMovieDB, songs do NOT require a API key.

After getting your API key (if required) place it in your HTML document like so 

```js
<script>
 var TheMovieDB_APIKey = "YOUR API KEY HERE"
 </scrip>
```





   include this [script](https://github.com/MarketingPipeline/Media-Card-Web-Component/blob/main/dist/media-card-wc.min.js) at the <b>bottom</b> of your HTML document.
         
    <script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/Media-Card-Web-Component@v1.0.3/dist/media-card-wc.min.js" type="module"></script> 



     


	   
	
<b><i>Note:</b></i> You can show as many movies as you want!
	
 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	
</details>
 <br>		
 
	
<br>	 
<br>	 
	
<details><summary>How to show a <b>TV Show</b>:</summary>
	
### Usage
	 
   
```html
 <media-card name="The Twilight Zone (1959)" type="TV"></media-card>
```

Note: To display TV show(s) - you will require a API key from TheMovieDB.

After getting your API key place it in your HTML document like so 

```js
<script>
 var TheMovieDB_APIKey = "YOUR API KEY HERE"
 </scrip>
```





   include this [script](https://github.com/MarketingPipeline/Media-Card-Web-Component/blob/main/dist/media-card-wc.min.js) at the <b>bottom</b> of your HTML document.
         
    <script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/Media-Card-Web-Component@v1.0.3/dist/media-card-wc.min.js" type="module"></script> 



     


	   
	
<b><i>Note:</b></i> You can show as many TV show's as you want

 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	
</details>


 <br>		
 
	
<br>	 
<br>	 
	
<details><summary>How to show a <b>Song</b>:</summary>
	
### Usage
	 

```html
 <media-card name="The Beatles In My Life" type="song"></media-card>
```

Note: You do NOT need a API key to display songs.








   include this [script](https://github.com/MarketingPipeline/Media-Card-Web-Component/blob/main/dist/media-card-wc.min.js) at the <b>bottom</b> of your HTML document.
         
    <script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/Media-Card-Web-Component@v1.0.3/dist/media-card-wc.min.js" type="module"></script> 



     


	   
	
<b><i>Note:</b></i> You show as many song's as you want

 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	
</details>

####                                                                                                                    Options


<table>
<tr>
<th>Attribute</th>
<th>Meaning</th>
<th>Default</th>
<th>Required</th>
</tr>
<tr>
<td>name</td>
<td>The movie, TV show or song name you would like to show</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>


<tr>
<td>type</td>
              <td>Type of Media to show details for - options:<code>TV, Song</code>, by default movie type will be shown.</td>
<td><code>Movie</code></td>
<td>No</td>
</tr>

<tr>
<td>theme</td>
<td>Set a different color theme - options <code>dark</code></td>
<td><code>light</code></td>
<td>No</td>
</tr>




</table>
	
	
</details>










## Contributing ![GitHub](https://img.shields.io/github/contributors/MarketingPipeline/Media-Card-Web-Component)

Want to improve this project? Create a pull request with detailed changes / improvements! If approved you will be added to the list of contributors of this awesome project!

See also the list of
[contributors](https://github.com/MarketingPipeline/Media-Card-Web-Component/graphs/contributors) who
participate in this project.

## License ![GitHub](https://img.shields.io/github/license/MarketingPipeline/Media-Card-Web-Component)

This project is licensed under the GPL-3.0 License - see the
[LICENSE.md](https://github.com/MarketingPipeline/Media-Card-Web-Component/blob/main/LICENSE) file for
details.
