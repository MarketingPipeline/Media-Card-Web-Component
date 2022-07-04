class Repository extends HTMLElement {
  constructor() {
    super();

    this.repoDetails = null;

    this.name = this.getAttribute("name");
    
    
    this.type = this.getAttribute("type");
    
    var EndPoint = ""
      var MovieName = this.name.split('(')[0]
    
    var Year = this.name.substring(
    this.name.indexOf("(") + 1, 
    this.name.lastIndexOf(")")
);
   
     if (this.type == undefined){
    
     EndPoint = `https://api.themoviedb.org/3/search/movie?api_key=${TheMovieDB_APIKey}&language=en-US&query=${MovieName}&year=${Year}`
    
    }
    
      if (this.type == "TV"){
    
     EndPoint = `https://api.themoviedb.org/3/search/tv?api_key=${TheMovieDB_APIKey}&language=en-US&query=${MovieName}&first_air_date_year=${Year}`
  //  console.log(EndPoint)
    }
       if (this.type == "song"){
    
     EndPoint = `https://itunes.apple.com/search?term=${this.name}&entity=song`
  //  console.log(EndPoint)
    }
    
  
    
    
    this.endpoint = EndPoint;
    this.getDetails = this.getDetails.bind(this);

    this.innerHTML = `<h1>Loading</h1>`;
  }

  async connectedCallback() {
    let repo = await this.getDetails();
    this.repoDetails = repo;
    this.initShadowDom();
  }

  initShadowDom() {
    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this.template;
  }

  get style() {
    
     if (this.type == "song"){
    
    var CardHeight_Desktop = `170px`
    
        var CardHeight_Mobile = `240px`
  //  console.log(EndPoint)
    } else {
      var CardHeight_Desktop = `350px`
       var CardHeight_Mobile = `303px`
    }
    
     var Style = this.getAttribute("theme")
    
       var Theme = `@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800');
* {
  box-sizing: border-box;
  margin: 0;
}
.movie_card {
  font-family: 'Montserrat', helvetica, arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  display: block;
  width: 800px;
  height: ${CardHeight_Desktop};
  margin: 80px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
  text-align:left;
}
.movie_card .info_section {
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
}
.movie_card .info_section .movie_header {
  position: relative;
  padding: 25px;
  height: 40%;
}
.movie_card .info_section .movie_header h1 {
  color: black;
  font-weight: 400;
}
.movie_card .info_section .movie_header h4 {
  color: #555;
  font-weight: 400;
}
.movie_card .info_section .movie_header .minutes {
  display: inline-block;
  margin-top: 15px;
  color: #555;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.movie_card .info_section .movie_header .empty-span {
    display: inline-block;
    margin-top: 15px;
    color: #555;
    padding: 5px;
    margin-left:-14px;
}
.movie_card .info_section .movie_header .empty-space {
    display: inline-block;
    margin-top: 15px;
    padding: 5px;
}
.movie_card .info_section .movie_header .show-minutes {
  display: inline-block;
  color: #959595;
  margin-left: 10px;
}
.movie_card .info_section .movie_header .no-minutes {
  display: inline-block;
  color: #959595;
}
.movie_card .info_section .movie_header .locandina {
  position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
}
.movie_card .info_section .movie_desc {
  padding: 25px;
  height: 50%;
}
.movie_card .info_section .movie_desc .text {
  color: #545454;
  
  font-size: 0.69vw;
}
.movie_card .info_section .movie_social {
  height: 10%;
  padding-left: 15px;
  padding-bottom: 20px;
}
.movie_card .info_section .movie_social ul {
  list-style: none;
  padding: 0;
}
.movie_card .info_section .movie_social ul li {
  display: inline-block;
  color: rgba(0, 0, 0, 0.3);
  transition: color 0.3s;
  transition-delay: 0.15s;
  margin: 0 10px;
}
.movie_card .info_section .movie_social ul li:hover {
  transition: color 0.3s;
  color: rgba(0, 0, 0, 0.7);
}
.movie_card .info_section .movie_social ul li i {
  font-size: 19px;
  cursor: pointer;
}
.movie_card .blur_back {
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;
  
}
@media screen and (min-width: 768px) {
  .movie_header {
    width: 65%;
  }
  .movie_desc {
    width: 50%;
  }
  .info_section {
    background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);
  }
  .blur_back {
    width: 80%;
    background-position: -100% 10% !important;
   
  }
}
@media screen and (max-width: 768px) {
  .movie_card {
    width: 95%;
    margin: 70px auto;
    min-height: ${CardHeight_Mobile};
    height: auto;
  }
  .blur_back {
    width: 100%;
    background-position: 50% 50% !important;
  }
  .movie_header {
    width: 100%;
    margin-top: 85px;
  }
  .movie_desc {
    width: 100%;
  }
  .info_section {
    background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);
    display: inline-grid;
  }
}
`

     
    if (Style == undefined){
    
      Theme= Theme
    
    } else {
      Theme = Theme
    }
    
    
    if (Style == "black"){
      
      Theme = `@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800');
* {
  box-sizing: border-box;
  margin: 0;
}
.movie_card {
  position: relative;
  display: block;
  width: 800px;
  height: ${CardHeight_Desktop};
  margin: 100px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  font-family: 'Montserrat', helvetica, arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-align:left;
}
.movie_card .info_section {
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
}
.movie_card .info_section .movie_header {
  position: relative;
  padding: 25px;
  height: 40%;
}
.movie_card .info_section .movie_header h1 {
  color: #fff;
  font-weight: 400;
}
.movie_card .info_section .movie_header h4 {
  color: #9ac7fa;
  font-weight: 400;
}
.movie_card .info_section .movie_header .minutes {
  display: inline-block;
  margin-top: 10px;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.13);
}
.movie_card .info_section .movie_header .show-minutes {
  display: inline-block;
  color: #cee4fd;
  margin-left: 10px;
}
.movie_card .info_section .movie_header .no-minutes {
  display: inline-block;
  color: #cee4fd;
  margin-left: 0px;
}
.movie_card .info_section .movie_header .empty-span {
    display: inline-block;
    margin-top: 15px;
    color: #555;
    padding: 5px;
    margin-left:-14px;
}
.movie_card .info_section .movie_header .empty-space {
    display: inline-block;
    margin-top: 15px;
    padding: 5px;
}
.movie_card .info_section .movie_header .show-minutes {
  display: inline-block;
      color: #cee4fd;
  margin-left: 10px;
}
.movie_card .info_section .movie_header .no-minutes {
  display: inline-block;
      color: #cee4fd;
}
.movie_card .info_section .movie_header .locandina {
  position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
}
.movie_card .info_section .movie_desc {
  padding: 25px;
  height: 50%;
}
.movie_card .info_section .movie_desc .text {
  color: #cfd6e1;
    font-size: 0.69vw;
}
.movie_card .info_section .movie_social {
  height: 10%;
  padding-left: 15px;
  padding-bottom: 20px;
}
.movie_card .info_section .movie_social ul {
  list-style: none;
  padding: 0;
}
.movie_card .info_section .movie_social ul li {
  display: inline-block;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.3s;
  transition-delay: 0.15s;
  margin: 0 10px;
}
.movie_card .info_section .movie_social ul li:hover {
  transition: color 0.3s;
  color: rgba(255, 255, 255, 0.8);
}
.movie_card .info_section .movie_social ul li i {
  font-size: 19px;
  cursor: pointer;
}
.movie_card .blur_back {
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;
    
}
@media screen and (min-width: 768px) {
  .movie_header {
    width: 60%;
  }
  .movie_desc {
    width: 50%;
  }
  .info_section {
    background: linear-gradient(to right, #0d0d0c 50%, transparent 100%);
  }
  .blur_back {
    width: 80%;
    background-position: -100% 10% !important;
  }
}
 .movie_header_dark_p {
    color:white;
  }
@media screen and (max-width: 768px) {
  .movie_card {
    width: 95%;
    margin: 70px auto;
    min-height:  ${CardHeight_Mobile};
    height: auto;
  }
  .blur_back {
    width: 100%;
  
    background-position: 50% 50% !important;
  }
  .movie_header {
    width: 100%;
    margin-top: 85px;
  }
  
  
  .movie_desc {
    width: 100%;
  }
  .info_section {
    background: linear-gradient(to top, #141413 50%, transparent 100%);
    display: inline-grid;
  }
}
#bright {
  box-shadow: 0px 0px 150px -45px rgba(255, 51, 0, 0.5);
}
#bright:hover {
  box-shadow: 0px 0px 120px -55px rgba(255, 51, 0, 0.5);
}
.bright_back {
  background: url("https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg");
}
#tomb {
  box-shadow: 0px 0px 150px -45px rgba(19, 160, 134, 0.6);
}
#tomb:hover {
  box-shadow: 0px 0px 120px -55px rgba(19, 160, 134, 0.6);
}
.tomb_back {
  background: url("https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png");
}
#ave {
  box-shadow: 0px 0px 150px -45px rgba(199, 147, 75, 0.7);
  margin-bottom: 200px;
}
#ave:hover {
  box-shadow: 0px 0px 120px -55px rgba(199, 147, 75, 0.7);
}
.ave_back {
  background: url("https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg");
}
`
    }
    return `
      <style>
  ${Theme}
      </style>
    `;
  }

  get template() {
    let repo = this.repoDetails;
    if (repo.total_results === 0) {
      return this.style + this.cardError(repo);
    } 
    
    
    
    
    
    if (repo.status_message) {
      return this.style + this.cardError(repo);
    } else {
      return this.style + this.cardTemplate(repo);
    }
  }

  async getDetails() {
    return await fetch(this.endpoint, { mode: "cors" }).then(res => res.json())
    
    // Need to make another fetch to get more details 
    
   // var T = "https://api.themoviedb.org/3/movie/343611?api_key=249f222afb1002186f4d88b2b5418b55";
  //}
      
    //async getMoreDetails() {
    //return await fetch(T, { mode: "cors" }).then(
   
      //res2 => res2.json());
      
    //  console.log(res2[0].runtime)
  }


  cardError({status_message, total_results, results }) {
    if (results == undefined){
      var Error = "Can't find song"
    }
    if (status_message == undefined){
      
      var Error = "Movie / TV Show Not Found"
    } else {
      
      var Error = status_message
    }
    
    return `
    
<div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina"  src=""/>
      <h1>Error: ${Error}</h1>
     
    </div>
    <div class="movie_desc">
      <p class="text">
      
      </p>
    </div>
  
  </div>
  <div class="blur_back" style="background:url(https://i.ytimg.com/vi/w6geNk3QnBQ/maxresdefault.jpg); background-size: cover;
  
     background-size:     cover;                      /* <------ */
    background-repeat:   no-repeat;
    background-position: center center; 
    left:33%;
  
    "   ></div>
</div>
    
    `;
  }

  cardTemplate({Count, page, results}) {
    console.log(results)  
    var CardBackgroundStyling = ` background-size: cover;
  
     background-size:     cover;                      /* <------ */
    background-repeat:   no-repeat;
    background-position: center center; 
    left:33%;`
    if (this.type == undefined){
     
		var Movie = results[0].title
    var Description = results[0].overview
    	var id = results[0].id
    //  console.log(id)
     var PosterPath = "https://image.tmdb.org/t/p/w500" + results[0].poster_path
     var BackdropPath = "https://image.tmdb.org/t/p/w500" +  results[0].backdrop_path
     
     var Released_In_Year = results[0].release_date.split('-')[0]
     
     
     //// NEED TO FETCH MOVIE RUN TIMES + GENRES
          //fetch(`https://api.themoviedb.org/3/movie/${results[0].id}?api_key=249f222afb1002186f4d88b2b5418b55`)
   // .then(function(response) {
     // return response.json();
   // })
    //.then(function(result) {
         //var RunTime = result.runtime
         
         // var Genres = result.genres
        // console.log(Genres)  
       //  console.log(RunTime)
            
            
     //  })
     
     var P_ClassType = "show-minutes"
     var Minutes = `<span class="minutes">136 min</span>`
 //   var Genre = results[0].genre_ids
    
   // var array = Genre + ""
    //console.log(array)
     
    // if (Genre = "28") {
       
     //  var GenreType = "f"
     //}
     
   /*  {"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]} */
     

     
	}
    
    
   
    
      if (this.type == "TV"){
        var Movie =  results[0].name
        var Description =  results[0].overview
         var PosterPath = "https://image.tmdb.org/t/p/w500" + results[0].poster_path
     var BackdropPath = "https://image.tmdb.org/t/p/w500" +  results[0].backdrop_path
     
     var Released_In_Year = results[0].first_air_date.split('-')[0]
        var Minutes = `<span class="empty-span"></span>`
        var P_ClassType = "no-minutes"
      }
    
     var Count = 0 
    for (var k in this.name) {
      Count = Count + 1
      
      
    
    
      
    }
    
       var Template = `
   
<div class="movie_card" id="movie_element_${Count}">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina"  src="${PosterPath}"/>
      <h1>${Movie}</h1>
      <h4>${Released_In_Year}</h4>
      ${Minutes}
      <p class="${P_ClassType}">Action, Science Fiction</p>
    </div>
    <div class="movie_desc">
      <p class="text">
        ${Description}
       
      </p>
    </div>
  
  </div>
  <div class="blur_back" style="background:url(${BackdropPath}); background-size: cover;
     left:33%;
     background-size:     cover;                      /* <------ */
    background-repeat:   no-repeat;
    background-position: center center; 
    
    "    ></div>
</div>
    `
       
        if (this.type == "song"){
       
       CardBackgroundStyling = ` 
    background-position: center center; 
    `
    // results[0].artworkUrl100}"/>
    //  <h1>${
    //        results[0].trackName}</h1></h1>
    //  <h4>${
    //        results[0].artistName}</h4>
    
    //  <p class="">${results[0].collectionName}</p>
   // </div>
   
  
 // </div>
 // <div class="blur_back" //style="background:url(${results[0].artworkUrl100}); 
///  
  
		var Movie = results[0].trackName
    var Description = results[0].collectionName
    //	var id = results[0].id
    //  console.log(id)
     var PosterPath = results[0].artworkUrl100
     var BackdropPath = results[0].artworkUrl100
     
  var Released_In_Year = results[0].releaseDate.split('-')[0]
     
     
     //// NEED TO FETCH MOVIE RUN TIMES + GENRES
          //fetch(`https://api.themoviedb.org/3/movie/${results[0].id}?api_key=249f222afb1002186f4d88b2b5418b55`)
   // .then(function(response) {
    // return response.json();
   // })
  //  .then(function(result) {
    //     var RunTime = result.runtime
         
      //    var Genres = result.genres
        // console.log(Genres)  
       //  console.log(RunTime)
            
            
     //  })
     
     var P_ClassType = "show-minutes"
     var Minutes = `<span class="minutes">Eminem</span>`
 //   var Genre = results[0].genre_ids
    
   // var array = Genre + ""
    //console.log(array)
     
    // if (Genre = "28") {
       
     //  var GenreType = "f"
     //}
     
   /*  {"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]} */
     Template = `
<div class="movie_card" id="movie_element_">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina"  src="${results[0].artworkUrl100}"/>
      <h1>${
            results[0].trackName}</h1></h1>
      <h4>${
            results[0].artistName}</h4>
    
      <p class="movie_header_dark_p">${results[0].collectionName}</p>
        <p class="movie_header_dark_p">${results[0].primaryGenreName}</p>
    </div>
   
  
  </div>
  <div class="blur_back" style="background:url(${results[0].artworkUrl100}); 
  
  
    background-position: center center; 
 
    "    ></div>
</div>
        
        `

     
	}
    
    
    return Template;
  }
}

window.customElements.define("motion-picture", Repository);
