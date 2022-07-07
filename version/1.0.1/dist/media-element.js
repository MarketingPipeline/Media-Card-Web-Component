// Media-Element.js Version 1.0.1 built by github.com/MarketingPipeline
// Source code can be found at the github link above.
class Media_Details extends HTMLElement{constructor(){super(),this.mediaElementDetails=null,this.name=this.getAttribute("name"),this.type=this.getAttribute("type");var n="",i=this.name.split("(")[0],e=this.name.substring(this.name.indexOf("(")+1,this.name.lastIndexOf(")"));null==this.type&&(n=`https://api.themoviedb.org/3/search/movie?api_key=${TheMovieDB_APIKey}&language=en-US&query=${i}&year=${e}`),"TV"==this.type&&(n=`https://api.themoviedb.org/3/search/tv?api_key=${TheMovieDB_APIKey}&language=en-US&query=${i}&first_air_date_year=${e}`),"song"==this.type&&(n=`https://itunes.apple.com/search?term=${this.name}&entity=song`),this.endpoint=n,this.getDetails=this.getDetails.bind(this),this.innerHTML="<h1>Loading</h1>"}async connectedCallback(){let n=await this.getDetails();this.mediaElementDetails=n,this.initShadowDom()}initShadowDom(){this.attachShadow({mode:"open"}).innerHTML=this.template}get style(){if("song"==this.type)var n="170px",i="240px";else n="350px",i="303px";var e=this.getAttribute("theme"),o=`@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800');\n* {\n  box-sizing: border-box;\n  margin: 0;\n}\n.movie_card {\n  font-family: 'Montserrat', helvetica, arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  position: relative;\n  display: block;\n  width: 800px;\n  height: ${n};\n  margin: 80px auto;\n  overflow: hidden;\n  border-radius: 10px;\n  transition: all 0.4s;\n  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);\n  text-align:left;\n}\n.movie_card .info_section {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-blend-mode: multiply;\n  z-index: 2;\n  border-radius: 10px;\n}\n.movie_card .info_section .movie_header {\n  position: relative;\n  padding: 25px;\n  height: 40%;\n}\n.movie_card .info_section .movie_header h1 {\n  color: black;\n  font-weight: 400;\n}\n.movie_card .info_section .movie_header h4 {\n  color: #555;\n  font-weight: 400;\n}\n.movie_card .info_section .movie_header .minutes {\n  display: inline-block;\n  margin-top: 15px;\n  color: #555;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.movie_card .info_section .movie_header .empty-span {\n    display: inline-block;\n    margin-top: 15px;\n    color: #555;\n    padding: 5px;\n    margin-left:-14px;\n}\n.movie_card .info_section .movie_header .empty-space {\n    display: inline-block;\n    margin-top: 15px;\n    padding: 5px;\n}\n.movie_card .info_section .movie_header .show-minutes {\n  display: inline-block;\n  color: #959595;\n  margin-left: 10px;\n}\n.movie_card .info_section .movie_header .no-minutes {\n  display: inline-block;\n  color: #959595;\n}\n.movie_card .info_section .movie_header .locandina {\n  position: relative;\n  float: left;\n  margin-right: 20px;\n  height: 120px;\n  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);\n}\n.movie_card .info_section .movie_desc {\n  padding: 25px;\n  height: 50%;\n}\n.movie_card .info_section .movie_desc .text {\n  color: #545454;\n  \n    display: block;\n  font-size: 0.86rem;\n}\n.movie_card .info_section .movie_social {\n  height: 10%;\n  padding-left: 15px;\n  padding-bottom: 20px;\n}\n.movie_card .info_section .movie_social ul {\n  list-style: none;\n  padding: 0;\n}\n.movie_card .info_section .movie_social ul li {\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.3);\n  transition: color 0.3s;\n  transition-delay: 0.15s;\n  margin: 0 10px;\n}\n.movie_card .info_section .movie_social ul li:hover {\n  transition: color 0.3s;\n  color: rgba(0, 0, 0, 0.7);\n}\n.movie_card .info_section .movie_social ul li i {\n  font-size: 19px;\n  cursor: pointer;\n}\n.movie_card .blur_back {\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  height: 100%;\n  right: 0;\n  background-size: cover;\n  border-radius: 11px;\n  \n}\n@media screen and (min-width: 768px) {\n  .movie_header {\n    width: 65%;\n  }\n  .movie_desc {\n    width: 50%;\n  }\n  .info_section {\n    background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);\n  }\n  .blur_back {\n    width: 80%;\n    background-position: -100% 10% !important;\n   \n  }\n}\n@media screen and (max-width: 768px) {\n  .movie_card {\n    width: 95%;\n    margin: 70px auto;\n    min-height: ${i};\n    height: auto;\n  }\n  .blur_back {\n    width: 100%;\n    background-position: 50% 50% !important;\n  }\n  .movie_header {\n    width: 100%;\n    margin-top: 85px;\n  }\n  .movie_desc {\n    width: 100%;\n  }\n  .info_section {\n    background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);\n    display: inline-grid;\n  }\n}\n`;return"black"==e&&(o=`@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800');\n* {\n  box-sizing: border-box;\n  margin: 0;\n}\n.movie_card {\n  position: relative;\n  display: block;\n  width: 800px;\n  height: ${n};\n  margin: 100px auto;\n  overflow: hidden;\n  border-radius: 10px;\n  transition: all 0.4s;\n  font-family: 'Montserrat', helvetica, arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  text-align:left;\n}\n.movie_card .info_section {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-blend-mode: multiply;\n  z-index: 2;\n  border-radius: 10px;\n}\n.movie_card .info_section .movie_header {\n  position: relative;\n  padding: 25px;\n  height: 40%;\n}\n.movie_card .info_section .movie_header h1 {\n  color: #fff;\n  font-weight: 400;\n}\n.movie_card .info_section .movie_header h4 {\n  color: #9ac7fa;\n  font-weight: 400;\n}\n.movie_card .info_section .movie_header .minutes {\n  display: inline-block;\n  margin-top: 10px;\n  color: #fff;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid rgba(255, 255, 255, 0.13);\n}\n.movie_card .info_section .movie_header .show-minutes {\n  display: inline-block;\n  color: #cee4fd;\n  margin-left: 10px;\n}\n.movie_card .info_section .movie_header .no-minutes {\n  display: inline-block;\n  color: #cee4fd;\n  margin-left: 0px;\n}\n.movie_card .info_section .movie_header .empty-span {\n    display: inline-block;\n    margin-top: 15px;\n    color: #555;\n    padding: 5px;\n    margin-left:-14px;\n}\n.movie_card .info_section .movie_header .empty-space {\n    display: inline-block;\n    margin-top: 15px;\n    padding: 5px;\n}\n.movie_card .info_section .movie_header .show-minutes {\n  display: inline-block;\n      color: #cee4fd;\n  margin-left: 10px;\n}\n.movie_card .info_section .movie_header .no-minutes {\n  display: inline-block;\n      color: #cee4fd;\n}\n.movie_card .info_section .movie_header .locandina {\n  position: relative;\n  float: left;\n  margin-right: 20px;\n  height: 120px;\n  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);\n}\n.movie_card .info_section .movie_desc {\n  padding: 25px;\n  height: 50%;\n}\n.movie_card .info_section .movie_desc .text {\n  color: #cfd6e1;\n   font-size: 0.86rem;\n}\n.movie_card .info_section .movie_social {\n  height: 10%;\n  padding-left: 15px;\n  padding-bottom: 20px;\n}\n.movie_card .info_section .movie_social ul {\n  list-style: none;\n  padding: 0;\n}\n.movie_card .info_section .movie_social ul li {\n  display: inline-block;\n  color: rgba(255, 255, 255, 0.4);\n  transition: color 0.3s;\n  transition-delay: 0.15s;\n  margin: 0 10px;\n}\n.movie_card .info_section .movie_social ul li:hover {\n  transition: color 0.3s;\n  color: rgba(255, 255, 255, 0.8);\n}\n.movie_card .info_section .movie_social ul li i {\n  font-size: 19px;\n  cursor: pointer;\n}\n.movie_card .blur_back {\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  height: 100%;\n  right: 0;\n  background-size: cover;\n  border-radius: 11px;\n    \n}\n@media screen and (min-width: 768px) {\n  .movie_header {\n    width: 60%;\n  }\n  .movie_desc {\n    width: 50%;\n  }\n  .info_section {\n    background: linear-gradient(to right, #0d0d0c 50%, transparent 100%);\n  }\n  .blur_back {\n    width: 80%;\n    background-position: -100% 10% !important;\n  }\n}\n .movie_header_dark_p {\n    color:white;\n  }\n@media screen and (max-width: 768px) {\n  .movie_card {\n    width: 95%;\n    margin: 70px auto;\n    min-height:  ${i};\n    height: auto;\n  }\n  .blur_back {\n    width: 100%;\n  \n    background-position: 50% 50% !important;\n  }\n  .movie_header {\n    width: 100%;\n    margin-top: 85px;\n  }\n  \n  \n  .movie_desc {\n    width: 100%;\n  }\n  .info_section {\n    background: linear-gradient(to top, #141413 50%, transparent 100%);\n    display: inline-grid;\n  }\n}\n#bright {\n  box-shadow: 0px 0px 150px -45px rgba(255, 51, 0, 0.5);\n}\n#bright:hover {\n  box-shadow: 0px 0px 120px -55px rgba(255, 51, 0, 0.5);\n}\n.bright_back {\n  background: url("https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg");\n}\n#tomb {\n  box-shadow: 0px 0px 150px -45px rgba(19, 160, 134, 0.6);\n}\n#tomb:hover {\n  box-shadow: 0px 0px 120px -55px rgba(19, 160, 134, 0.6);\n}\n.tomb_back {\n  background: url("https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png");\n}\n#ave {\n  box-shadow: 0px 0px 150px -45px rgba(199, 147, 75, 0.7);\n  margin-bottom: 200px;\n}\n#ave:hover {\n  box-shadow: 0px 0px 120px -55px rgba(199, 147, 75, 0.7);\n}\n.ave_back {\n  background: url("https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg");\n}\n`),`\n      <style>\n  ${o}\n      </style>\n    `}get template(){let n=this.mediaElementDetails;return 0===n.total_results||n.status_message?this.style+this.cardError(n):this.style+this.cardTemplate(n)}async getDetails(){return await fetch(this.endpoint,{mode:"cors"}).then((n=>n.json()))}cardError({status_message:n,total_results:i,results:e}){if(null==e)var o="Can't find song";if(null==n)o="Movie / TV Show Not Found";else o=n;return`\n    \n<div class="movie_card" id="bright">\n  <div class="info_section">\n    <div class="movie_header">\n      <img class="locandina"  src=""/>\n      <h1>Error: ${o}</h1>\n     \n    </div>\n    <div class="movie_desc">\n      <p class="text">\n      \n      </p>\n    </div>\n  \n  </div>\n  <div class="blur_back" style="background:url(https://i.ytimg.com/vi/w6geNk3QnBQ/maxresdefault.jpg); background-size: cover;\n  \n     background-size:     cover;                      /* <------ */\n    background-repeat:   no-repeat;\n    background-position: center center; \n    left:33%;\n  \n    "   ></div>\n</div>\n    \n    `}cardTemplate({Count:n,page:i,results:e}){console.log(e);if(null==this.type)var o=e[0].title,t=e[0].overview,a=(e[0].id,"https://image.tmdb.org/t/p/w500"+e[0].poster_path),r="https://image.tmdb.org/t/p/w500"+e[0].backdrop_path,s=e[0].release_date.split("-")[0],d="show-minutes",c='<span class="minutes">136 min</span>';if("TV"==this.type)o=e[0].name,t=e[0].overview,a="https://image.tmdb.org/t/p/w500"+e[0].poster_path,r="https://image.tmdb.org/t/p/w500"+e[0].backdrop_path,s=e[0].first_air_date.split("-")[0],c='<span class="empty-span"></span>',d="no-minutes";n=0;for(var l in this.name)n+=1;var p=`\n   \n<div class="movie_card" id="movie_element_${n}">\n  <div class="info_section">\n    <div class="movie_header">\n      <img class="locandina"  src="${a}"/>\n      <h1>${o}</h1>\n      <h4>${s}</h4>\n      ${c}\n      <p class="${d}">Action, Science Fiction</p>\n    </div>\n    <div class="movie_desc">\n      <p class="text">\n        ${t}\n       \n      </p>\n    </div>\n  \n  </div>\n  <div class="blur_back" style="background:url(${r}); background-size: cover;\n     left:33%;\n     background-size:     cover;                      /* <------ */\n    background-repeat:   no-repeat;\n    background-position: center center; \n    \n    "    ></div>\n</div>\n    `;if("song"==this.type){" \n    background-position: center center; \n    ";o=e[0].trackName,t=e[0].collectionName,a=e[0].artworkUrl100,r=e[0].artworkUrl100,s=e[0].releaseDate.split("-")[0],d="show-minutes",c='<span class="minutes">Eminem</span>';p=`\n<div class="movie_card" id="movie_element_">\n  <div class="info_section">\n    <div class="movie_header">\n      <img class="locandina"  src="${e[0].artworkUrl100}"/>\n      <h1>${e[0].trackName}</h1></h1>\n      <h4>${e[0].artistName}</h4>\n    \n      <p class="movie_header_dark_p">${e[0].collectionName}</p>\n        <p class="movie_header_dark_p">${e[0].primaryGenreName}</p>\n    </div>\n   \n  \n  </div>\n  <div class="blur_back" style="background:url(${e[0].artworkUrl100}); \n  \n  \n    background-position: center center; \n \n    "    ></div>\n</div>\n        \n        `}return p}}window.customElements.define("media-element",Media_Details);