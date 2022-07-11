const mainSheet = new CSSStyleSheet()
mainSheet.replaceSync(`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800');
  :host { 
    --background: linear-gradient(270deg, #cfcfcf, #8b8b8b);
    --background-size: 200% 100%;
    --animation: 1.5s shine linear infinite;
  }
  * {
    box-sizing: border-box;
    margin: 0;
  }
  .media_card {
    font-family: 'Montserrat', helvetica, arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    position: relative;
    display: block;
    width: 800px;
    height: 350px;
    margin: 80px auto;
    overflow: hidden;
    border-radius: 10px;
    transition: all 0.4s;
    box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
    text-align:left;  
  }
  @media (pointer:none), (pointer:coarse) {
    .media_card {
      height: 303px;
    }
  }
  .media_card .info_section {
    position: relative;
    width: 100%;
    height: 100%;
    background-blend-mode: multiply;
    z-index: 2;
    border-radius: 10px;
  }
  .media_card .info_section .media_header {
    position: relative;
    padding: 25px;
    height: 40%;
  }
  .media_card .info_section .media_header h1 {
    color: black;
    font-weight: 400;
  }
  .media_card .info_section .media_header h4 {
    color: #555555;
    font-weight: 400;
  }
  .media_card .info_section .media_header .minutes {
    display: inline-block;
    margin-top: 10px;
    color: #555555;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  .media_card .info_section .media_header .empty-span {
    display: inline-block;
    margin-top: 15px;
    color: #555555;
    padding: 5px;
    margin-left:-14px;
  }
  .media_card .info_section .media_header .empty-space {
    display: inline-block;
    margin-top: 15px;
    padding: 5px;
  }
  .media_card .info_section .media_header .show-minutes {
    display: inline-block;
    color: #959595;
    margin-left: 10px;
  }
  .media_card .info_section .media_header .no-minutes {
    display: inline-block;
    color: #959595;
  }
  .media_card .info_section .media_header .locandina {
    position: relative;
    float: left;
    margin-right: 20px;
    height: 120px;
    box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
  }
  .media_card .info_section .media_desc {
    padding: 25px;
    height: 50%;
  }
  .media_card .info_section .media_desc .text {
    color: #545454;
    display: block;
    font-size: 0.86rem;
  }
  .media_card .info_section .media_social {
    height: 10%;
    padding-left: 15px;
    padding-bottom: 20px;
  }
  .media_card .info_section .media_social ul {
    list-style: none;
    padding: 0;
  }
  .media_card .info_section .media_social ul li {
    display: inline-block;
    color: rgba(0, 0, 0, 0.3);
    transition: color 0.3s;
    transition-delay: 0.15s;
    margin: 0 10px;
  }
  .media_card .info_section .media_social ul li:hover {
    transition: color 0.3s;
    color: rgba(0, 0, 0, 0.7);
  }
  .media_card .blur_back {
    position: absolute;
    top: 0;
    z-index: 1;
    height: 100%;
    right: 0;
    border-radius: 11px;
    left: 33%;
    background-repeat: no-repeat;
    background-position: center center;
  }
  @media screen and (min-width: 768px) {
    .media_header {
      width: 65%;
    }
    .media_desc {
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
    .media_card {
      width: 95%;
      margin: 70px auto;
      min-height: 240px;
      height: auto;
    }
    .blur_back {
      width: 100%;
      background-position: 50% 50% !important;
    }
    .media_header {
      width: 100%;
      margin-top: 85px;
    }
    .media_desc {
      width: 100%;
    }
    .info_section {
      background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);
      display: inline-grid;
    }
  }
  .skeleton {
    position: relative;
  }
  .skeleton .locandina {
    margin-right: 20px;
    background: var(--background);
    background-size: var(--background-size);
    animation: var(--animation);
    width: 80px;
  }
  .skeleton h1 {
    position: absolute;
    left: 125px;
    height: 32px;
    width: 200px;
    background: var(--background);
    background-size: var(--background-size);
    animation: var(--animation);
  }
  .skeleton h4 {
    position: absolute;
    left: 125px;
    top: 60px;
    width: 60px;
    height: 16px;
    background: var(--background);
    background-size: var(--background-size);
    animation: var(--animation);
  }
  .skeleton .text {
    position: absolute;
    left: auto;
    top: auto;
    width: 350px;
    height: 80px;
    background: var(--background);
    background-size: var(--background-size);
    animation: var(--animation);
  }
  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`)
const darkTheme = new CSSStyleSheet()
darkTheme.replaceSync(`
  // You could add a different set of colours here for the skeleton elements
  :host { 
    --background: linear-gradient(270deg, #cfcfcf, #8b8b8b);
    --media-header: #cee4fd;
    --media-header-h4: #9ac7fa;
    --media-header-minutes: #ffffff;
    --media-header-minutes-border: 1px solid rgba(255, 255, 255, 0.13);
  }
  .media_card .info_section .media_header h1 {
    color: white;
  }
  .media_card .info_section .media_desc .text {
    color: #cfd6e1;
  }
  .media_card .info_section .media_social ul li {
    color: rgba(255, 255, 255, 0.4);
  }
  .media_card .info_section .media_social ul li:hover {
    color: rgba(255, 255, 255, 0.8);
  }
  .media_card .info_section .media_header .show-minutes {
    color: #cee4fd;
  }
  .media_card .info_section .media_header .no-minutes {
    color: #cee4fd;
  }

  .media_card .info_section .media_social ul li i {
    font-size: 19px;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    .info_section {
      background: linear-gradient(to right, #0d0d0c 50%, transparent 100%);
    }
  }
  @media screen and (max-width: 768px) {
    .info_section {
      background: linear-gradient(to top, #141413 50%, transparent 100%);
    }
  }
`)
class Media_Details extends HTMLElement {
  static get observedAttributes() {
    return [
      'name',
      'theme',
      'type'
    ];
  }
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: 'open'
    })
    const sheets = [mainSheet]
    if(this.theme !== 'light') {
      sheets.push(darkTheme)
    }
    this.shadow.adoptedStyleSheets = sheets;
    
    // Song Option
       if (this.type === "song"){
    
     this.endPoint = `https://itunes.apple.com/search?term=${this.name}&entity=song`
  //  console.log(EndPoint)
    }
    
    this.shadow.innerHTML = `
      <div class="media_card skeleton">
        <div class="info_section">
          <div class="media_header">
            <img class="locandina"
                 src=""/>
            <h1></h1>
            <h4></h4>
            <span class="minutes"></span>
            <p class="show-minutes"></p>
          </div>
          <div class="media_desc">
            <p class="text"></p>
          </div>
        </div>
        <div class="blur_back"></div>
      </div>
    `
    this.card = this.shadow.querySelector('.media_card')
    this.locandina = this.shadow.querySelector('.locandina')
    this.h1 = this.shadow.querySelector('h1')
    this.h4 = this.shadow.querySelector('h4')
    this.minutes = this.shadow.querySelector('.minutes')
    this.showMinutes = this.shadow.querySelector('.show-minutes')
    this.text = this.shadow.querySelector('.text')
    this.blurBack = this.shadow.querySelector('.blur_back')

    const yearCheck = /\s\([0-9]{4}\)$/ // Checks to see if there is a year, in brackets, at the end of the name
    if(yearCheck.test(this.name)){
      let result = /\s\((?<year>[0-9]{4})\)$/.exec(this.name)
      this.year = result.groups.year
      this.mediaName = this.name.replace(/\s\([0-9]{4}\)$/, '')
    }else{
      this.mediaName = this.name
    }
    if(this.type === 'film'){
      this.endPoint = `https://api.themoviedb.org/3/search/movie?api_key=${TheMovieDB_APIKey}&language=en-US&query=${this.mediaName}`
      if(this.year){
        this.endPoint += `&year=${this.year}`
      }
    }
    if(this.type.toLowerCase() === 'tv'){
      this.endPoint = `https://api.themoviedb.org/3/search/tv?api_key=${TheMovieDB_APIKey}&language=en-US&query=${this.mediaName}`
      if(this.year){
        this.endPoint += `&first_air_date_year=${this.year}`
      }
      
      
     
    }
    this.getDetails()
  }

  populateCardExtras(data) {
    
    this.extraData = data // 🤞
    
    this.minutes.innerText = `${this.extraData.runtime} mins`
    const genres = this.extraData.genres.map(genre => genre.name).join(', ')
    //console.log(genres)
    this.showMinutes.innerText = genres

    let elem = this.h1;
    let rect = elem.getBoundingClientRect();
    console.log(elem, rect)



  }

  populateCard(data) {
    this.card.classList.remove('skeleton')
    this.data = data.results[0] // 🤞
    
        if(this.type === 'song'){
      

       
     var  CardBackgroundStyling = ` 
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
  
		var Movie = this.data.trackName
    var Description = this.data.collectionName
    //	var id = results[0].id
    //  console.log(id)
     var PosterPath = this.data.artworkUrl100
     var BackdropPath = this.data.artworkUrl100
     
  var Released_In_Year = this.data.releaseDate.split('-')[0]
     
     
     
          
          
          // CONSOLE LOG FOR TESTING
           console.log("Song Details: " + Movie,Description,Released_In_Year)
    }
    if(this.type === 'film'){
      fetch(`https://api.themoviedb.org/3/movie/${this.data.id}?api_key=${TheMovieDB_APIKey}`)
          .then(res => res.json())
          .then(data => this.populateCardExtras(data))
    }else{
      this.minutes.remove()
    }
    this.blurBack.style.background = `url(https://image.tmdb.org/t/p/w500/${this.data.backdrop_path})`
    this.blurBack.style.backgroundSize = 'cover'
    this.h1.innerText = (this.type === 'film')
        ? this.data.original_title
        : this.data.original_name
    this.h4.innerText = (this.type === 'film')
        ? this.data.release_date.replace(/\-[0-9]{2}/g, '')
        : this.data.first_air_date.replace(/\-[0-9]{2}/g, '')
    this.text.innerText = this.data.overview
    this.locandina.src = `https://image.tmdb.org/t/p/w500${this.data.poster_path}`
  }

  getDetails() {
      fetch(this.endPoint, {
        mode: "cors"
      })
          .then(res => res.json())
          .then(data => this.populateCard(data))
  }

  get name() {
    return this.getAttribute('name')
  }
  get theme() {
    return this.getAttribute('theme') || 'light'
  }
  get type() {
    return this.getAttribute('type') || 'film'
  }
}

window.customElements.define("media-element", Media_Details)
