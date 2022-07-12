const mainSheet = new CSSStyleSheet()
mainSheet.replaceSync(`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800');
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
    color: #555;
    font-weight: 400;
  }
  .media_card .info_section .media_header .minutes {
    display: inline-block;
    margin-top: 10px;
    color: #555;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  .media_card .info_section .media_header .empty-span {
    display: inline-block;
    margin-top: 15px;
    color: #555;
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
   
   .media_card .blur_back{
  left:0%;
  }
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
`)
const darkTheme = new CSSStyleSheet()
darkTheme.replaceSync(`
  .media_card .info_section .media_header h1 {
    color: white;
  }
  .media_card .info_section .media_header h4 {
    color: #9ac7fa;
  }
  .media_card .info_section .media_header .minutes {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.13);
  }
  .media_card .info_section .media_header .show-minutes {
    color: #cee4fd;
  }
  .media_card .info_section .media_header .no-minutes {
    color: #cee4fd;
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
  .media_card .info_section .media_social ul li i {
    font-size: 19px;
    cursor: pointer;
  }
  .collection-name{
  color:white;
  }
  .primary-genre-name{
  color:white;
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
const songTheme = new CSSStyleSheet();
songTheme.replaceSync(`
  .media_card {
    height: 170px;
  }
  .media_desc {
    display: none;
  }
  @media screen and (max-width: 768px) {
    .media_card {
      height: 240px;
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
    if(this.type === 'song') {
      sheets.push(songTheme)
    }
    this.shadow.adoptedStyleSheets = sheets;
    
    // Song Option
       if (this.type === "song"){
    
     this.endPoint = `https://itunes.apple.com/search?term=${this.name}&entity=song`
  //  console.log(EndPoint)
    }
    
    this.shadow.innerHTML = `
      <div class="media_card">
        <div class="info_section">
          <div class="media_header">
            <img class="locandina"
                 src=""/>
            <h1>The Matrix</h1>
            <h4>1999</h4>
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
   
    
    
           const genres = this.extraData.genres.map(genre => genre.name).slice(0, 3).join(', ')
    this.showMinutes.innerText = genres
 
    //console.log(genres)
    
    this.showMinutes.innerText = genres
  }

  populateCard(data) {
    
    this.data = data.results[0] // 🤞
    
    
    if(this.type === 'film'){
      fetch(`https://api.themoviedb.org/3/movie/${this.data.id}?api_key=${TheMovieDB_APIKey}`)
          .then(res => res.json())
          .then(data => this.populateCardExtras(data))
    }else{
      this.minutes.remove()
    }
    

    if (this.type === 'song'){
       this.showMinutes.remove()
      // console.log(this.data)
    this.blurBack.style.background = `url("https://image.tmdb.org/t/p/w500${this.data.backdrop_path}")`
    this.blurBack.style.backgroundSize = 'cover'
    this.h1.innerText = this.data.trackName
      
      
      this.h4.innerText = this.data.artistName
        
        //this.data.releaseDate.split('-')[0]
    this.locandina.src = this.data.artworkUrl100    
    this.blurBack.style.background =  `url("${this.data.artworkUrl100}")`
   // this.showMinutes.innerText = this.data.collectionName
  //  this.showMinutes.innerText += this.data.primaryGenreName
    //this.card.style.height='170px'
      
      
       const collectionName = document.createElement('p')
      collectionName.classList.add('collection-name')
      collectionName.innerHTML = this.data.collectionName
      this.h4.parentNode.appendChild(collectionName)
      const primaryGenreName = document.createElement('p')
      primaryGenreName.classList.add('primary-genre-name')
      primaryGenreName.innerHTML = this.data.primaryGenreName
      this.h4.parentNode.appendChild(primaryGenreName)
      /// Need to add mobile sizing `240px`
      
      // need to add proper classes too
      
      
    }else{
      // console.log(this.data)
    this.blurBack.style.background = `url("https://image.tmdb.org/t/p/w500${this.data.backdrop_path}")`
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
