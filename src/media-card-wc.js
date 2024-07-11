/**!
 * @license Media-Card-Web-Component - A web component that allows you to easily fetch / show off details from 
   your favorite anime, movies, TV shows, songs & books!
 * VERSION: 2.0.1
 * LICENSED UNDER MIT LICENSE
 * MORE INFO CAN BE FOUND AT https://github.com/MarketingPipeline/Media-Card-Web-Component/
*/
import "https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?version=4.8.0features=Array.prototype.map,fetch,Promise";
import "https://unpkg.com/construct-style-sheets-polyfill";

const mainSheet = new CSSStyleSheet()
mainSheet.replaceSync(`/*compress*/
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
    margin: 80px auto;
    overflow: hidden;
    border-radius: 10px;
    transition: all 0.4s;
    box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
    text-align: left;  
    height: fit-content;
    max-width: 800px;
  }
  @media (pointer:none), (pointer:coarse) {
    .media_card {
      min-height: 303px;
    }
  }
  .info_section {
    position: relative;
    background-blend-mode: multiply;
    height: 100%;
    width: 100%;
    z-index: 2;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
  .media_header {
    position: relative;
    padding: 25px;
    height: 40%;
    display: flex;
    flex-direction: row;    
  }
  h1 {
    color: black;
    font-weight: 400;
  }
  h4 {
    color: #555;
    font-weight: 400;
  }
  .minutes {
    display: inline-block;
    margin: .5rem 0;
    color: #555;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  .show-minutes {
    display: inline-block;
    color: #959595;
    margin-top: .5rem;
  }
  .minutes ~ .show-minutes {
    margin-top: unset;
  }
  .locandina {
    position: relative;
    float: left;
    margin-right: 20px;
    height: 120px;
    box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
  }
  .locandina-holding {
    margin-right: 20px;
    background: var(--background);
    background-size: var(--background-size);
    animation: var(--animation);
    width: 80px;
    height: 120px;
    display: none;
  }
  .media_desc {
    padding: 25px;
    height: 50%;
  }
  .text {
    color: #545454;
    display: block;
    font-size: 0.86rem;
  }
  
  
  .text:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 50%;
    width: 100%;
    height: 40px;
    border-bottom: 8px solid #fff;
    background: linear-gradient(to top, white, rgba(255, 255, 255, 0));
}
  
  .blur_back {
    position: absolute;
    top: 0;
    height: 100%;
    right: 0;
    width: 100%;
    border-radius: 11px;
    background-repeat: no-repeat;
    background: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUDBAgFBQYFBQgIBgYGBwgIBwcHBwcGBgYGBgUIBgUFBQUHChALBwgOCQUFDRUNDhEREx8TBwsWGBYSGBASEx4BBQUFBwYHBQgIBRIIBQgSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEv/AABEIAtAFAAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQIDBwgGBQT/xABJEAEAAgACBQcIBwcDAwQCAwAAAQIDEQQFEiGRBgcTMUFRUhciNVNhcpKxFTJCcXOBoTM0NrLB0eEUVGIII/AkQ2OCRPEWJSb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AtsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJARsV7o4QbFe6OEJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAITkiJWBUMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEzls+3t+4ECInats17OvPuItFreb9WO/xAR5qekh93kHyfvr7WFdEvE1wZic7RExlEe17zlfzR4Gr9BtpOg3xMTEpHnRbfGfbl7AalySms2274Voymlpic4ynOC0TX63aCBOXh6yf17QQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmYm9cuqI7e2UItPinZrG/PvBaYm1fNjLLtjrmH1uSvJ3H17pFMLRaT0UWibWjd1TvW5HcncXX2m10fBidiMpmYzjzY63R3Izkxg6i0WMHBiLX65tlEWzmN8ZgnklyewNTaLSlKx0mzEWtlG1Fst8Zvt4tYtE7cRNZjLZnfExPfDJMRKJ3V82M/YDTfOpzdRba1lq2J7bXrGURFpnuhpzErel7YWNE1vWcsp7ZdiYla3patoi1ZjKYnq+5p/nb5vIvWdYaDWc6xNr1rGUZ/kDTUztZ1+raOrLtXj6sVt1x1+1GJSYvsXzrfDnKd2Wcm/fn+U94AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAImZrluzz/AEWr/wAfO7/YrbPqr29fsKxsV6+rfPtgEzG19Xs3z7IfZ5J8ncbXWlUwsGs2wItEziRE5Tv3wckNQY2vdLjB0es1pnG1aImYmvbm6O5F8mMHUmiU0fCrE2iM5vllOc9cAnkfyawNTaNSuFSsYmzGd8srb43w+91duZEd8pyBMAAhjvSts6XiLRbriYzjLuZJY8W9cKlsXFmK1rGc2ndERHbINS86XN3F9vTtX12c85vWsRGTTOPg2wb2wr/WrMxPsbY5zucu97YurtX1nZiZrbFrOcTHe1Le9r3m95m1rb5meuQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1Mt+1Gfd7JBGUn2su3uVrNqz505T2TPd3L1z+t9r9cgERCK4kWrNcu39URnWOsFskEZ7PWZABkZABkZABkZABkZABkZABkZABkZABkZABkZAEed9VH2vYmnX5u72f1AE2mIvFezLr7IkkEAfqAnJWtZttbt0fojf3xGXAGWsTWtuzd19z6nJfk/pGuNKwsLBpacOLxt4kRnW1ZnevyR5P4+vdIjBwc9ikxt2yma2q6M5E8nMPUmiVwqVjb2YzmI3yC/JHk1gal0alMGta4uzEWvEb7bup97Pd3HXH/m4rn2gZ9mQkAzER9zHi4laVm95itaxOczOUQBpGPTBpbFxbRSleu0zlEfe0lzt84Fsa86Bq7EmuHvreaznF9/XuRzs84cY3Sat0LOK5zF5ic4tMT17mqsOYt5998+3rBMbVrWtefOt159cyj5Ge1b2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIz/AP32AkzLTs+37kxAGz0vmzOWW/Od35LYGHfSsWuDgxNsWZiN0ZzNc8upODhW0i9cHCibWtaIyjfMTM9e7sb15r+b6ug1pp2nRFseaxNfZWY3RMA8Fic2elW0euLTzZtWJmMpzzmH4PJtrG2e+cvul0xsxlEREZR1bt0LRHsjgDmavNrrDvnhKfJvrDvn4ZdMbMd0GXs/QHM/k31h3z8Mnk31h3z8MumMvZ+hl7P0BzP5N9Yd8/DJ5N9Yd8/DLpjL2foZez9Acz+TfWHfPwyeTfWHfPwy6Yy9n6GXs/QHM/k31h3z8Mnk31h3z8MumMvZ+hl7P0BzP5N9Yd8/DJ5N9Yd8/DLpjL2foZez9Acz+TfWHfPwyeTfWHfPwy6Yy9n6GXs/QHM/k31h3z8Mnk31h3z8MumMvZ+hl7P0BzP5N9Yd8/DJ5N9Yd8/DLpjL2foZez9Acz+TfWHfPwyeTfWHfPwy6Yy9n6GXs/QHM883GsK785mO7Kc49rNrTm60zQtVW07fbEi2WxETNtnvydI7MZ9UZ/dCt8Ot6zW9YmJiYmMomJiQcdxGznTFrMXifqzutn9w23zr83Nq4ttZ6siKxETNqxvmZnfM5NR4udLWpePOrOUx259oJJz+zOU/I7vb+iJy+rPV29mQLRaa5bO6J+vPZL6nJjUGLrjTcPR8HDt0drxF75TNZiZ682bkjybx9d40aPo8bOFMxW0zG6Yz7JdG8juTmFqTQsPR6VjpIrEXtlE5z7JA5G8ltH1Fo9cLR6xGJNYjEv4p9j72W/NMRwIgEROfYsiyYAEbSmNi1w6za8xWtYmZmZyjKPaCMbFrhVtfFtFKVjOZmYisfnLSvOxy/vi3nQdW32cPKYvMTnFrR25wxc7POJ/qcLF1foMzWsW2bT2zaJyzzhqqttrz75zae/Od4GJ521e87V7Tnn171tiJrH3Mced2SyRPm7IFq+b5qIhOaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJRvrWNr6s9UdsfemSlNnO1u3q37okFqzFa+b9ad0Z9kmBg4mkXro9KzfFtaI82JtERM7pnJ+nU2rMXWGNXR9HibYtpiM4iZrEz1Tm3tzX8330LlpWnRW+k2rlPVasRPV90g/PzXcgMLQsGul6dTa0ucp/4xXrjd3tmbOWWW6IjKO6IgyyjKsRH6REIr/x6v6gnC+qurSYnqWAAAAAAAAAAAAAAAAAAAABGW8hF0bwRi0res0vETW0TExO+JiWmOdfm7rg0xNZarrO7O16/WtNp68o7m6o/VjvWL+ZeItExO6YziYBx3G3hW2LxsW6rRaNmdr2Zvrck+T2JrrTaaPStuitaItbKYrln1xLcPOBzW4WtbzpGhRsYueeWezXPPOXseRfJ3D1ToOFg7NemisRe2UTO1Eb8pBHIzkxg6k0WuFhRG1sxnPXOf3vQVz6+xMSjf7MgTCURKQJQmWHSMamFS18WdmtIzmZ3RlG8E4t60pN8WYrWuczMzERER7WlOdvl/e+LbV+rbR0eWVp7Zt1Tvg51ucSuk0vq/V8zFYnzrR5tpmN0747Gpom1rTi2mbWntmc53gtaNraviztWtOc7898lbbX3It/yKT9mAWz81VO+v5oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALRO7uE7rebnvAtHVJnH5kVngrFprad0bwXFAFxQBcUAXFAE/yx196Zyt9T6sfW74hjrMVt17p6/YyXita+bO6esDOPs9T9eo9W4utdKromDEzEzEWnKd1ZnriWTk/qbSNbaRh6PotNqk2iLW6pis9rorkJyQwNQ6PXOsWx7RETaYibRP3gxc3XIrA1Do1bbO1j2rvm0Raa/dM9r2FPzz/RGHE9ff2dkL5xnl2gi9c05JJBW3Vu6yts/6/emYY8W9aUta8xWsdc55boBki0Gcd7U/L3nSpoWkRomrpjEmM4vMxvi0d0vOV53tKrlXYpuBvvOO8zjvaE8r+leroeV/SvV0BvvOO8zjvaE8r+leroeV/SvV0BvvOO8zjvaE8r+leroeV/SvV0BvvOO8zjvaE8r+leroeV/SvV0BvvOO8zjvaE8r+leroeV/SvV0BvvOO8zjvaE8r+leroeV/SvV0BvvOO8zjvaE8r+leroeV/SvV0BvvOO8zaE8r+leronyv6X6uoN8zn2ZZIvfLLJoSed3Sq5bVa5Pc8gOcbC1ts4OkTFcSfy3g2Fv2vZkux5farv/ALL1kEWWAFZrn2zH3bk5JAMkZJARO5G2mYY8W9cKtsW8xWtazMz1RFY3zIJxsSKUte8xWtYmZmZyiIiM5aR51+cS+Li31boMx0XVN43Wmeqd8HOxzgzpFr6u1ff/ALVZmJxKzs2t2TEzHY1RSIm82tM2tOcznvnMFrZ1tN7b7WmZnPfO9WudZ9n9Vtrb+6CbAi0RZMqgLTMFMrfciJ+5Oc27o+4ETHX3QiJn8uxMRH1c5zlP1fN7gQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWn2dQSDJo1I0jGwsHOYnEtEcWydE5pr6Ro9MXat50Q1zqf0hof4kfN1jye/ccD3Y+QNMeRvE8d+J5G8Tx34t7gNEeRvE8d+J5G8Tx34t7yjMGifI3ieO/E8jeJ478W9szMGifI3ieO/E8jeJ478W9szMGiJ5mb7M5WtMz+hHM3fKK2tZvgB5TkFyQwdRaLWtYi2NlGdpiM4l6ievf1di5MApEdufX2diaxvz7VskSCSURLFpWNXR6Wxbzs0rG/PqiAWxLRSs3vOUViZmerdDTPOnzjbdcTV+rZi2+YtaJytExOUwpztc4UXm2haqxNqsxle9ZymtuqatR5TNpxbzM2tOcz2zM9oL4lpvM3xo862+Z67Zq7v/ADtLRO1W31o7ifuA3G4ANxuADcbkTACdxuQmoG43LK7gNxuADcbgA3JjJCJma/VjP+kAZR9rqZNAx76DjRpGizMWjflG7qVy8O/v9iIja+r2dfsgG+Oanl9XT8GmhabMV0iOqJnfNezrbOjLdaO3hOblDkhqTStZaXhW1fNq1reJnFpnEzETvq6l1RhXwdFwsLFmbXrSsTM9czEbwfrzSiUgAAAAracvu7fueQ5wNT6TrjR/9PomJfCpbOJtSZrMxPe9hMIiMurdANC6LzM4uFntYl8TPOdq05znK8czV9ubbd43dTfGZmDRMczeJH2rZInmaxPHdvfMzBonyN4njvxPI3ieO/FvbMzBoe3M1ibP178U15mcTZ+vfNveDvBzzr7mtvq3QdI0202mMGszv7oa9wrbVK2dR86E/wD+a1l+BPzhyxof7Gn5/MGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkJB+jVHpDQ/wASvzdYcnv3HB92P6OT9UekND/Er83WHJ79xwPdj5A+gAABmAGYAAAAABmAixEvy6z0/C0LBtpGkXilKx1zOUTOW6IA03SsPQsG+NjWitaxM5zujdGeTSPOPzm202t9B0CMqZzE4lZnflul83nP5dYus9KvouiXmmjxu3TnWctzX8U82d+zMzvnvntBaKTaZvlnNpzmf+S3X9bsM5rXzZ/yiPN9oJi0/VQm3nZbO5GfEAM+KZjZ9mYIAt5v1twCc/uUmdrq3y/Rg6v0jG/ZYVrZ9WUTvBiz+5E+x9KvJnWNt9dExJj7pfpwOSGsrV2v9LiVnuykHw8j8n3b8ktZV/8Aw8Sfyl+fE5P6xp9bQ8ThIPljLjaNiYVpri0mto64mJzie5izAExCJ7Pb1e0BExPZH+FpjitT7XZu3z3e0GOY2K9fVvn7u59jkjqHG17pdcHR6zFd21aInKa9qOTWoNI11pGHg6PS1sOLxNsSImazXPe6S5H8mcDU2i0pg0rGLsxtXy3znG+AV5E8l8HUWiVwcKIm/XNsspznrh6GqsTPX+id/WBbq9q0Iz7cjPiCQREwCQAAAAAAAAMwEJQDzXOj/DWsfwJ+cOWND/ZV/P5up+dH+GtY/gT84csaH+yr+fzBlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCQfo1R6Q0P8AEr83WHJ79xwfd/o5P1R6Q0P8SvzdYcnv3HB92PlAP3wlEJAlXP2JmHh+dvWmlas1ZbH0HE6O0WiIntgHuIhERPe5gpzja737WlTu3RuPKNrv/dTH5A6gynvMp73MHlE13/u/0PKJrv8A3f6A6fynvMp73MHlE13/ALv9Dyia7/3f6A6fynvVms9XVHb7XMPlE13/ALqeB5RddVtEV0qYjPfu64B0prTTsPQdHvj40xWtKzO+YiJyjPJz3zlcv766vbRdHia6NW05RE+bMxOWe58/X3LbTtZ6JXRNIxZtszna3VFonrh5a1dmsbP1ZnPLtzntAplSvnb7TxWraLV2bQi1Nq0bXVuXxKR9nuBSEookBEZV83rmeqfClaIrb6vm5def2pBETs/WjOeye5W0x9e87MR1Z9qcGl8XaphUnFt2RWM5hsfkBzaYms9jSNZRNMGMp6O8TWZjuB4PV+h4unWiuj4Vr59tYzj73tdQc02l6ds4uNiThV3Ts2iY3dzdOouSehasrH+lworMR977le6u6Aa81DzWaJomX+oiuPMZdkxv/N6vQeTOh6NlsYVYmPZD7aMoBjpg0pEbNYyj2QyRl3foikSnMCfuYb4NJ+tWJ/KGWYnvTEA8/pnI/QNI2r4uBW1rTMzujrl5HlDzT4Ol5/6S9dHz7MpnLg2bHmo75y3wDnPXnNhpmrtu1bTpFK5/ViZjJ4rTMK+i3mmlUmkxPmzaMspdgWiLxMWjOJjfGWebzHKTkPoOtqTt4cVvv872z9wOYYxdrP7Wf2uyPa+1yQ5PY2u9I/0+Dns0mJveIma2rPY9Rrfmw0jB1nTR9Hif9Pa8RMxEzWKzPXm3LyL5LaPqLR60waxGNsxF7x9oEciOTWFqTRK4WHEdJllaY65eijf2Imu/Mic5BMZpMzMBSd+/qnslfNgx8WtKzi4sxSleubTlALXxa0rN8SYrWvXaZyj7zBvW/n0mJr2TG+Le2Gk+d7l3iY1/o/VmJsVnOLXic6zMT15w8rovOJrLR9FjRcLGmLUrEbfZMx2g6ayMnL8c4muv93PA8ouuv93PAHUGRlPe5f8AKLrr/dzwT5RNd/7v9AdP5T3kOYPKJrv/AHf6HlF13/u5B0/MIivtcwTzi67/AN3PBEc4mu9ulf8AVzlNqxPtiZ3wDp+sT35/0WmHwuRGmX0vV+Hi407VrViZnvmY3y+7IEAA81zo/wANax/An5w5Y0P9lX8/m6n50f4a1j+BPzhyxof7Kv5/MGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkJB+jVHpDQ/xK/N1hye/ccH3f6OT9UekND/ABK/N1hye/ccH3f6A/fCUQkBrrn19C29+GxZa759fQtvegHPee196M5+0UTAAAAABWI2vO6gBN57vq9nsk+z/wAu9ACJzstCAEZ7Jn50V/XshM/qiszas9kdvfM+wCZ872d/ZD9+qtS42tcamFotZmZmIm0RnWPvyZNQakx9a41dF0eNquJMZzEZxXf2z2OjOQnJHR9SaLh7Fc8aaxtzO/zst+QPic3XN7h6ppGNptYxce0RMduzb2w2DFa5RWIyiOqIjLJaIytPtIid/cCZ3G4hjxO21t8R2R1gvGffuSpg3i1c4ziPbuyY8TTMKn18XDj771r85BmzlEZdz4un8qtD0W2zbFpb3b1l8zF5wtBpbZ2s/wA4B69LyGFzg6DfdnMfnGT6+g8odE0uvmY2HX2WvWJ+YPrwMWHpOHfKKYlLzPVs2rPyllkEVtnn7EZeH8/anZTkB+SMuuU5JgEVglJIIhGe/JMMWNi1pW2JiWitaxnnMxERl7ZBbExIpE2vMVrEZzM7oiI9rSnOvzh10jCxdX6FtV2Zmtpz3WtE9ecJ52OcK9sWdX6st5kxMXndnNo3TlMNTYlrXta+LOdrTnP3gjbti1m85zee3rRW35d/tTXE4JmQRkZAAAASEgjKUW822H79fmvZTF68P36/MHUvNzn9E4W14Y/leleb5u/ROD7lf5XpARMCUA81zo/w1rH8CfnDljQ/2Vfz+bqfnR/hrWP4E/OHLGh/sq/n8wZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQkH6NUekND/Er83WHJ79xwfd/o5P1R6Q0P8SvzdYcnv3HB93+gP3wlEJAlrvn19C296GxJa759fQtvegHPVEwiiYAAAAAAAAAEyif0BMZfa6mTQtFxdN0imj6PGeJaYy3ZxlmxXtWuXXlMxHtzluXmT5IbGzrPS6+fG/DiYziaz1TOYPVc1XJOupNCzxqxOPjZWmZjOYnLfl3PbV7cuueCJiLfl1dy0zG4E/eZk5dSm1ltb4iI65ndEfmC0fo+TrvXmj6qpfG0m8ZREzsxMTbd2ZPIc43OPhaprbR9EmL4++O+sW9ktG6911pOtcW2kaRe0TfPzYmYjgDZfK7nbnFps6q82JnKdqMtzXOtOUOlawvM42JaInw2mr5NIjYiv2onetEAri52t52JiTPttaURM99vzmWSEYk+b7QRFb2+1MfnK0Tan/uYkfde0MdoztFKzO1PBeKR9XOc+3PqzB9vU3KzTtW3ri6PiTNKde3M2mY/Ntrmv5wr66vbC0itptFojOKzs5/e0/yW1Fja60umj4NZ6KZiLzMTHb2S6P5EclcDUWixhYVY27RE3mYiZ2o7pB6Ks8J6lle3esAAASSjMGPHxK4VLXvMVrWJmZmcoyiM2kudbnDrpdL6u1fMxWLZWmN1ptHXvjsff57tcadouDODokRGBbLO0ZxbOY3xm0XvttX67WmZnPfvnrApM1t0tpm1p375z3yi1Zv51lcpr9/6LAjPZTEJzMwQAAAASEgmymL14fv1+a9lMXrw/fr8wdTc3fonB9yv8r0jzfN36Jwfcr/K9IAhKAea50f4a1j+BPzhyxof7Kv5/N1Pzo/w1rH8CfnDljQ/2Vfz+YMoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABISD9GqPSGh/iV+brDk9+44Pux8ocn6o9IaH+JX5usOT37jg+7/AEB++EohIEtd8+voW3vQ2JLXfPr6Ft70A56omEUTAAAAAAAAGQFZ81ETwLx5vm96MWPNinbIPvcjdRzrbWWFo9YmaTMTM9mcTm6g1bosaLouDo9IiuxSsboy6oiGtOYLUdcLQbabix/3dvKszG/ZmM21st4IgnJP9ETPHsBM5S1Zzs8vsPQqYurNEt/35ia3mN01t7Jh6bnG5T/QWiWtu6TFrPR798z1ObNY6ZbTdLxtL0n62PMzv35Tn2Aw2xL4tpxca03tMzOdp2p6/ai1Y2tvf93YrEeKfNZK32fqxFo9vYCme1bPLKJSmcredWfy7IQARnn1eaETn5vUBlNfq5ff2vq8mdQ4+u9Ipg6LWZw84i9sspiYnfvW5K6hvr3TaaJo0Tas77W3xll173R/Inkvg6h0SuDgRFrzlN7TEZxbLfESCeSHJvB1PomHWlY6WKRtTlGe1lv3vvR53ncE2+ZsgmM0ozASIIBMoTKAfI5V6pprLQcXBvETMVmYnKJnOKy5W1toVtC0vFwcXOsxe2Xu57nX/XEx2TnwaI5+tQU0fG+kMKNms5ROUZRtT1g1jEbtrtQisW821YzrlC0ggAAAAAAkJBPYpi9eH79fmvZTF68P36/MHU3N36Jwfcr/ACvSPN83fonB9yv8r0gCEoB5rnR/hrWP4E/OHLGh/sq/n83U/Oj/AA1rH8CfnDljQ/2Vfz+YMoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABISD9GqPSGh/iV+brDk9+44Pu/wBHJ+qPSGh/iV+brDk9+44Pux8oB++EohIEtd8+voW3vQ2JLXfPr6Ft70A56omEUTAAAAAAACYlCLAvXzvOZdT6POlabh4Ub524nLvjNgicvNeq5pNA/wBXygpTLOsVz9mcA6J5LaHXRdX4FKVimdKzMRuznZje+qx4Vdmla+GIjhuZAGLScWMHCvi36qxM/kyvKc6WtP8AQak0q9ZyvNJy7waW53OUE611h0VZma4F5iIzziIeImk598d3cyTizi2tpF99sTOZ+9WLTb7pBORAAiY8P3lc7diZibebXtRMbNei6st+ffHcC+7Z83f3+yO19TkvqHG11pFcLRazbCzjavEb4mJ3wryT1Fja902uiaPWdndNrxE/V7XR/Ibkrg6i0SuDSIm85TNssrROW+AW5F8mcDU2jUrSlYxZiM75RFs5jfGb0Nu/r/qjLLr3x8k9f3QC0AAjL8kZJlS+JFK2vedmlYmZmd0Zd4K4+JGFS2LeYrSkTNpnsrHXLxer+cLR9L1xi6twbVtWkxFbdszM5PF863OLN74urNB+rXOs3rM52id29q3UelW0LWGDpecxacSJtPbMZ57wdeWz3R1xOW9akZPl8ldYRrDV+DpWee1H39UQ+rMAQ8bzuatjTtSYuFWsWvFomN2+IjPN7LN+bWODGNo+LS0ZxNLccpByDFLYV71tM+baYy7sky+lyr0WdF1lj4VoyzvaY+7OXzAAAAAAACQkE2UxevD9+vzX7FMXrw/fr8wdTc3fonB9yv8AK9I83zd+icH3K/yvSAISgHmudH+GtY/gT84csaH+yr+fzdT86P8ADWsfwJ+cOWND/ZV/P5gygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEhIP0ao9IaH+JX5usOT37jg+7/AEcn6o9IaH+JX5usOT37jg+7/QH74SiEgS13z6+hbe9DYktd8+voW3vQDnqiYRRMAAAAAAAGQmAVjt2t26W1v+n3Q4tjTpUx50Zxn7GqcT+jdn/T9hbOiWv/AMpgG3Eq5LANRf8AUBrKK4OHotZz26zEx+bbrQHPribWnYVe6Zj9Qa10ePMilo3ZLRMb693V7SsqTHnAtHy/RNY2vq71axN7WrWNnZ658S1POzrFtmK9vZIExP3Zb5+59Pk3qLSdd6RTB0fDtam1G1iRGcTXPfErckOT+Pr3S/8AT6PM7NcptaIzi1e2HRvIXkzhak0SmFSsdJlvmIynf1gtyL5L4GpNGrXCrXpprG1eIytOcb4ei3kbysArl2fr3J2eCwAZoqx40xSu3eYrWsTMzO6IjvmQNIxq4VLYuLaKUpEza0zlFY75aY52+cCb/wDotWYkzXOa2vSfrR3q87HOLt9Jq3QonZ31ves5xb27mpcOZv59p3+0EYm1a842LM2vac5z680YttuLbtmaxMx7ZTMzNvYjEnarbduyn8wdGcx+nRjcntHwrTneu1nHbEPeUhqT/p+xv/T9F3VltyQSraM8698T+qZMgc189+if6XX1NmMotSZ4vGNj/wDULh//ANzg2/8AiiWuIAAAAAAAJCQTZTF68P36/Ne31VMXrw/fr8wdTc3fonB9yv8AK9I83zd+icH3K/yvSAISgHmudH+GtY/gT84csaH+yr+fzdT86P8ADWsfwJ+cOWND/ZV/P5gygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEhIP0ao9IaH+JX5usOT37jg+7Hyhyfqj0hof4lfm6w5PfuOD7v9AfvhKISBLXfPr6Ft70NiS13z6+hbe9AOeqJhFEwAAAAAAACawCt+v8AJvHmAvE6Fav/AClo3GndNm6P+nq3/p7b+227tBuGUoSA545742dZU++fm6HaG5/NCtTS8HF66znP3bwavnrhOW125e3uIhNY8XVPX7ATeJrWN+6PrT2TD6PJnUmNrjS8PB0fDt0W3EWtETNdmZ372TkvqDH11pUaNo+cUziJtlnWYme90byH5MYWotCw8GsRbGiMrXiM85BbkXyW0fUmj1pg0iuNNY27x1znHU9BNd+afmVgERO/q3LIkgEiNrfkriYlaVm15itYjOZndWPzBTFvGFWcTFvFaV3zMzlER7Zab52OcC17ToOrMTKu+uJNZzi059e5i51+cTpoxdW6DM1jOa3mJzi0xOWcTDUeHa21Nr52tbt3zvBfEmbWti407Vrb5me9MRFojKVItM51mNy9cq/VgDsVmfNnd2StmpiT5tvukG5f+n6s+dPZsy3LLVXMDosxoEaR9m0TENqROYCUVjIiwNCf9Q9o+lsCP/ij5NZw2J/1BWz17g1zz/7fBrsAAAAAAAkJBPYpi9eH79fmvZTF68P36/MHU3N36Jwfcr/K9I83zd+icH3K/wAr0gCEoB5rnR/hrWP4E/OHLGh/sq/n83U/Oj/DWsfwJ+cOWND/AGVfz+YMoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABISD9GqPSGh/iV+brDk9+44Pu/0cn6o9IaH+JX5usOT37jg+7/AEB++EohIEtd8+voW3vQ2JLXfPr6Ft70A56omEUTAAAAAAABImAU2fstl8w2sui1nGiTOVZrM8WtqfWff5vNM/0Wu8PSM8o3V4yDqhLDomJGLg4d46rVrPGIZgGtOfXV3S6ttpFY87DpO/u3tlvh8t9W21hqnStFrltXpOXs3A5Q0Xzor2Zdcz1S+xya1Hja403D0fR626KbxGLbKZrNZnsll1PyR0vWGs8TVuFGzXCvs3tMTFcs+90ZyI5M4OpNCpg0rE42zHSW3Tnb2SDHyM5KYGpMGtKVjbyiJnr3vSRnnn2GcZ5dxOefsAiN+ayIlIEohMseNetKWvedmtYmZmZyjKPaBi4laVm95itY67WmIiI++Wl+dvnAvtzq/Vt8qTExeY352jtiYTzq84lNIwsTVur5mIz2bW6pm0Tl1x2NR2ibW6W0za075znOcwWmZtacbFnatM5z271IttW2uyEx9W2farSfNmoL2lVM51yQArsbeVK9dt0e2ZWfb5DaqtrLWWDSkbUYd6zaOvdmDfnNDoX+k5PaNS0ZX359/Zk9fV+fVui10bR6YNIyitY/KcmeI35gux2nZpa3dEzwiV3y+VOnRoWgYuN1ebMcYBzpzq6dOm692884pExwl5iX69d6V/qNLx8Xrnbn9Zl+MAAAAAAAkJBNlMXrw/fr817KYvXh+/X5g6m5u/ROD7lf5XpHm+bv0Tg+5X+V6QBCUA81zo/w1rH8CfnDljQ/2Vfz+bqfnR/hrWP4E/OHLGh/sq/n8wZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQkH6NUekND/Er83WHJ79xwfd/o5P1R6Q0P8SvzdYcnv3HB92PlAP3wlEJAlrvn19C296GxJa759fQtvegHPVEwiiYAAAAAAAMxMSCt7bP1WTBxZwcWl6boi0TPFSI85Fuqag6k5uta11lqrDxaznsRFZ9kxV6ObcI62jOYPX06LadWYs+biWm2+W8439XVP6gittr6vUm1ItWaz1ST+iwPnat1PgaFiYuLg1iLY052nKM5n2S+hWuSQEZJyAET1bkUmcvOTZjvetKWvadmtYmZmd2VYjOQTfErWs3mYrWM5mZ3RlHXvaZ51+cK23fVugzHRTGVrR9abRunfHYrzrc4VcattX6utOUTlNo3W2o3TvjsaimJveb4tptac53zn1gtXO1r4t5ztaZnfv60ZdplNrbPYjEj7IJMiAE5x9rq7UxHb9mervVRMT2/V7fZAJv/AMN9p6o65mW8uYzkvTRdH+k8WJjFxq5TFo3R+Utfc1fJS2utOri3iegwLROcxlFq5/q6R0PRqaPhVwcKsVpWIiIjdAM0wiYSSCM2vOfTW8aJqW+FhT/3rWru/wCMtgY14pS156q1meEZubudzlD9K6wtSk50puy7M6zkDxex9u3XbfP3ykvE2rHsiCAAAAAAACQkE2UxevD9+vzX7FMXrw/fr8wdTc3fonB9yv8AK9I83zd+icH3K/yvSAISgHmudH+GtY/gT84csaH+yr+fzdT86P8ADWsfwJ+cOWND/ZV/P5gygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEhIP0ao9IaH+JX5usOT37jg+7/AEcn6o9IaH+JX5usOT37jg+7/QH74SiEgS13z6+hbe9DYktd8+voW3vQDnqiYRRMAAAAAAAImu0lEzP2Iz7/ALgWt51lLfV/NalZ+zvntTlteb29oM+rdPxNB0jDxsLdaLRvicvNz3uoeSGvMPWercLGwZ2rUpWL+y2zGbmvk3qPH11pFMLQqTesWiLT3ZTvdJ8jNQV1PoNcCmc2tWJvE9lst8A+7WZmN68MO353m769s90s0AAAgMlMa8YVLXt1ViZkDFxIpWb3mK1rEzMzuyhpnnX5xLbd9W6vmJrllN43Wmcspjd2MXO/y+teJ1boUzW1bTNprnEzHVvlqfa6XPFxZmbznnM75A2rTtXv51rTM79/WrhTtTtW6+pNfOr3q13+wF4zzMTNE19slY8UgQJxJ2fd/Vl0fRcTTrVwtCrN79WWU9YMFp2azbLPLs65l6Tm+5J4uvtIndMYVZjbmYmMq+zN63kFzY6RfGwdK1lSaViYmazvrMd0w3Xq7VuBoNNjRcKuHuiJ2Yis2+/IH5OS2ocHU+i00fR4jOtYiZyiLT9768IrXiiPb1SC5KJnJ+LW+sMPV+j30jSLRWtYnLPtmIziAeZ50OUlNVaDemcRe8TGWe/K0ObJtt4uJe85ze8zGe/dM5vQc4mvra61nfSK2mcKM4iufm7u3J54E7ezWfvQZAAAAAAABISCbKYvXh+/X5r2UxevD9+vzB1Nzd+icH3K/wAr0jzfN36Jwfcr/K9IAhKAea50f4a1j+BPzhyxof7Kv5/N1Pzo/wANax/An5w5Y0P9lX8/mDKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASEg/Rqj0hof4lfm6w5PfuOD7sfKHJ+qPSGh/iV+brDk9+44Pu/0B++EohIEtd8+voW3vQ2JLXfPr6Ft70A56omEUTAAAAAAEfWmvbHXHcAmM/sojzrTXtjr9i1M9/3SCsVyr1zn39v3PqcltR42vdNpo+j1mKzlnaInPLtRyb1DpOuNIpgaPhzam1G1iRHZnvh0nyN5L4Gp9FpTCpWMbZjavllbOY3wDHyG5KYOodFrhYcRbEmIm1soiYnLfD0mXb1f1N/X/wCSmAVjL7PV2rwrMdkdqeoEkkSAiFMSNrOkxnWd0+2F5lE2B4vlVzd6Hra03tlgXmfrViM59ky1/rfmevS9raLiWvXs7pb0vXMz4A5h07kHp+jXmtcK1o37+9863JjTqWy6GZj83VuLg1v9asW++GGdAwbb5wq5/cDlf/8AjWnbWXQTwl9fVXN3p2l5bWHasbvydIxq/A9VT4WbDw60jKkbMeyMgaW1RzNbd630rGtTLLOvXGfc2Rya5H6JqmmVMOt7R9qYjaz73o7ZpiARllERXdHygpHtz/olFe0Dt+5Fo6/Z1fes/NrHTsLQsLpdJvGHSO2d0Avi40YWFbGxsqVpEzOfVEQ0Jzw8tbazvOg6JbLApb61Z65jdMP286XOJ/qL30LV988LfHSVndeJ66tW77Zzb60zM8e0FIjZ/wDOuVla12fasAAAAAAAAASEgnsUxevD9+vzXspi9eH79fmDqbm79E4PuV/lekeb5u/ROD7lf5XpAEJQDzXOj/DWsfwJ+cOWND/ZV/P5up+dH+GtY/gT84csaH+yr+fzBlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCQfo1R6Q0P8SvzdYcnv3HB93+jk/VHpDQ/xK/N1hye/ccH3Y+UA/fCUQkCWu+fX0Lb3obElrvn19C296Ac9UTCKJgAAAAA68+z/AJd5EcEzHnTX7Ne3skEZeblXzbRvm3fHc+vyU1Fja90qui6LE1rExNrxGcTXthj5O6h0jXWl4eDo9bRTajavETNZrM73SHInkpgai0etcKI6Wa+daI3743wCvITkxh6k0StKxHSZb5iMpzmN70tJmeuMkzCK22uzICkT2rIzMwSx4k92/LsXzYsW9MKtsXEmKVrvm0zlGXfIGLixhUm991YjOZnqrD8+r9ZYGmzeujYlcSafWiJz2fvag53OX972nQdWXmKb4ves5xb27muNS8pdO1VpFcbRce0ReYnFiJmdqO6QdZRCWqOR/OnTG2cLTomszlG3acoz72xtA1zoul5To+Ph3ziPNiYmYB9CYn71oRH6ACYRtFQSAAjP9BFpisTM+bHeBnxK9u7/AC+XrHX+h6JS1sXHw4tSJ82bRtTPdk1fyz51ppng6vzrac4jErOcRPeDZHKjlRo2p8K1sa9ekiJypM5TM9zRPL/l3ja7m2DTPCwomct/m5PLa211pOsMa2Lp17aRNp3TOeVZ735JrtViufUBXBiuFG151s5n25orM/cmJ2ct+a8xtT7MgUgTP/FAAAAAAAAABISCbfVUxevD9+vzXspi9eH79fmDqbm79E4PuV/lekeb5u/ROD7lf5XpAEJQDzXOj/DWsfwJ+cOWND/ZV/P5up+dH+GtY/gT84csaH+yr+fzBlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCQfo1R6Q0P8SvzdYcnv3HB93+jk/VHpDQ/xK/N1hye/ccH3f6A/fCUQkCWu+fX0Lb3obElrvn19C296Ac9UTCKJgAAFpqpE/Z7l9mfszG9Sa/Zzyy657JBM5d+7tnsh9Xk1qDH11pFdH0fOKxMZ3yzrNZ9qnJzUeNrbS8LR9FpbYm8Ri3ymazWZ73SHIvkngak0etcKsbeUZz178gW5C8l8LUWhYeDWKzj5efeI3zn2PRRG/r3lYnrIrvzBaIAkERCJTEqYt60rN72itY65mYisR98gYl60rNrzlWImZtO6sR7Zaa51ecKMSmPq3QpmsRnW9onOLT37kc7vL6+39H6tvlWYmLzE5xaYnsmGorRM2ti4s7VrTnM555yBhWtatpvOdp7+1FYj7O7v9qv1rexaYmoJz/KOD92q9caTq+8TouJNMvbMvwANi6k51tJ0XL/VzbGruyiOx63VnPJo2Ls0xcG9Z3RnnENGSm1Y7wdL6JzgaDixFrWrTPvmM4fsw+WmhXnZ6WnxQ5ZmfbPGWSt7V+rNuMg6jx+Weg0/92k//aH4dK5w9BwqzO1FvutDmq0Wv9aZ4yrav2bTM/nIN26z558Cm3TCwL5xMxFs84+94zXnOhpmnbtHtbCpv3PDVna83uTNYqD9Wm6djaXe19KvNpme+Yfj2Y37uszSBHm+b2fOCYjanZ6gBNcqo3/VAAAAAAAAAAAAkJBNlMXrw/fr817KYvXh+/X5g6m5u/ROD7lf5XpHm+bv0Tg+5X+V6QBCUA81zo/w1rH8CfnDljQ/2Vfz+bqfnR/hrWP4E/OHLGh/sq/n8wZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQkH6NUekND/Er83WHJ79xwfd/o5P1R6Q0P8SvzdYcnv3HB93+gP3wlEJAlrvn19C296Gw5a6595n6Ft70A58omEVy2f+W5fZ2ctqY37wVExkZbOe1IIrNdrLKc5657H1OTGoMfXulxomi1mK1tEWtl5uU9uZyZ1Jia40vDwcGsxSbRF5mJiJjPsl0fyH5K4GotGiuDXLFvWNu075z9kgnkLyXwtRaFTCrETjbMRe+6c59kvRxl1dyJnv8AyWyBXf7MkkQdQJJU2+zt/RFr7FZtiTFYjtmYiIj75BGNi1pWbXnZrETMzO6sZe1pvnU5xa4tMTVur5mI3xeY65tE9kx2J52+cOaWtq/V9omkxMXtHXNo7phqCLWta2Nec7WmZnPf1giLWxbTe85275nPenLxIj633rZwClZ85a0TU3GcAgTuNwIyj7REQncRMAisG1s+b2prlUnICLITuTnAK0TcjJOcApCU7jcCBO43AgTuNwIE7jcCBO43AgTuNwIE7jcCBO43AglO4nICymL14fv1+a0TFkY2WeH79fmDqXm79E4PuV/lekeb5u/ROD7lf5XookFkJQDzXOj/AA1rH8CfnDljQ/2Vfz+bqfnR/hrWP4E/OHLGh/sq/n8wZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQkH6NUekND/Er83WHJ79xwfdj5Q5P1R6Q0P8SvzdYcnv3HB93+gP3wlEJBEw1/z2YGJpGqrYWDE2tnHZm2BZjxsCmLXZvEWr3TET8wcjRqLStrfh2y92V7aj0n7OHfOPZLrGdX4HqsP4K/2R9G6P6mnwwDlKup9Kr14dvyrL9epuSGmay0itMKkxnMfWiax1+11FXV+B6rD3f8Kz/RkwtEwqTtUw6VmO2tYr8gfB5F8mMLVGhYVdiOnikbc5RPnex6KN++VpktGYEJRGUbkgK4mWXnLIkFJiK1nuiJn27t7T/Oxyvx9IpfVmr63i0zvtFbVzy3T50Nxdnsflvq/Av53Q4drd80rM8cgcpRqXSt9sWlrXtvmZi1pz+9H0JpV7fs7RH3S6wrq/Ar/7WH8FZ/oiursH1WH8MA5RnUmlVmK9Hb4ZVnUmlert8MusI1fgdmFh5+7H9k/R2B6rD+Cv9gcnfQmlert8M/2PoTSvV2+Gf7Osfo/A9TT4an0fgepp8NQcnfQmlert8M/2PoTSvV2+Gf7Osfo/A9TT4an0fgepp8NQcnfQmlert8M/2PoTSvV2+Gf7Osfo/A9TT4an0fgepp8NQcnfQmlert8M/wBj6E0r1dvhn+zrH6PwPU0+Gp9H4HqafDUHJ30JpXq7fDP9j6E0r1dvhn+zrH6PwPU0+Gp9H4HqafDUHJ30JpXq7fDP9j6E0r1dvhn+zrH6PwPU0+Gp9H4HqafDUHJ30JpXq7fDP9j6E0r1dvhn+zrH6PwPU0+Gp9H4HqafDUHJ30JpXq7fDP8AY+hNK9Xb4Z/s6x+j8D1NPhqfR+B6mnw1Byd9CaV6u3wz/Y+hNK9Xb4Z/s6x+j8D1NPhqfR+B6mnw1Byd9CaV6u3wz/Y+hNK9Xb4Z/s6x+j8D1NPhqfR+B6mnw1Byd9CaV6u3wz/Y+hNK9Xb4Z/s6x+j8D1NPhqfR+B6mnw1Byd9CaV6u3wz/AGPoTSvV2+Gf7Osfo/A9TT4an0fgepp8NQcnfQmlert8M/2PoTSvV2+Gf7Osfo/A9TT4an0fgepp8NQcnfQmlert8M/2PoTSvV2+Gf7Osfo/A9TT4an0fgepp8NQcnfQmlert8M/2PoTSvV24S6x+j8D1NPhqfR+B6rD+Cv9gcnRqTStr9nb4ZRiak0rbp/27fXr9me91l9H4HqsP4Kq31dgeqw/gr/YHyeb/Bvg6swqYkZTs13ZZfZffrE5+xFKxWuzSIiO6IyiGQBCc0A81zo/w1rH8CfnDljQ/wBlX8/m6n50f4a1j+BPzhyxof7Kv5/MGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkJB+jVHpDQ/xK/N1hye/ccH3f6OT9UekND/Er83WHJ79xwfdj5QD98JRCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgAEJQDzXOj/AA1rH8CfnDljQ/2Vfz+bqfnR/hrWP4E/OHLGh/sq/n8wZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAETPWlNvq9W8GbVHpDQvxI+brHk/u0HB92Pk5M1fi9DpWBjTGfR3ieEt06s518HB0fDwrYUTasRGeeQNswmZatjndwM8uiicu3OeoxOd/AjPLCiax25z/cG0szNrjktzmRrnTf9Jo+BnXLPpImZiPY2Hh226ROWzPyBkmRER+aYAAAzM1M+vJF7xWk2tOzFYmZnqiIjrBaLRnMdsLNc6+5ztH0HS76PSK36Ocpvn9Z+TyvYHq4+KQbRGrvK9gerj4pI53sD1UcZ/uDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaI1d5XsD1Ucf8nlewPVRx/yDaKM2r/K9geqjjP8ActzvYGU/9qJ/+0g9Vznznyb1j+DP9HLGhT/2a/n825+VnObg6y1TpeiUw4rbGpNY359bTWj0mtI7InPKO7eDIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiM9+/JKZnq2d/9AK0nztqWOI87qZs93m75+THbKvbAF6+GM5jr9lX0eT2ocbXGkUwdEw7ThzaNq0RM12c9+a/JXUWPrbS4wdHz2ZmItaImazWet0fyE5LYWodCrhUiLY32rxG+c+wGPkTyN0XUOj16LDrOPlG1eIynOY3w9RNfyTWCYBWc14RYBIiZVviVpWb2mK1iM5mZyiI9oKYlq4VbYt7RWtc5tM7oiPa05zt8v7bU6FqzEyjOa3tSc4vH5J51+cTdjas0HOvXW94nOLe3c09W1pzvi52tbt9oF5ti3ti40za1t8zPXMq7Mdy9Zm31t4CmzHcRWO5cBXYNhkAY9g2GQBj2DYZAGPYNhkAY9g2GQBj2DYZAGPYNhkAY9g2GQBj2DYZAGPYNhkAY9g2GQBj2DYZAGPYNhkAY9g2GQBj2DYZAGPYNhkAY9g2GQBj2DYZAGPYNhkAY9g2GQBjikInL6uW5lVkEVpG1WvV3rW65jPOI6vYgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ8zLZnff9BPm187ftdnskFbzsfV3W+1PZMPocntS4uttJwsHR8O01m8Re8RM1mszv3rcnNX11jpVdHvatIvaIta05Vyme90lyE5OaPqjQsOmj7N7bO/ErlatvukFeRXJPR9RaPWuFWOl2Y2rR25w9JvnfG42t+Xd29kl8/s7u8E171laTmsBKEyx4l60iZvOVYiZmZ3ViI9oGJetKze8xWsRnMzMRWI75lpznc5e2rb6P1ZiZROdbzWYmLT37kc6XONXFpi6s0HOOut7RvzmJ7JjsafttTfbvM2tO/fOe8FsS1rzOLiztWnfPfmr0m3bq3QnZ821rK4fVILbaEZbP5pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAReI832pNn7XcBFprtRSZrPs3S2TzV84GLoN8PVunWzwM4rTPriZntmWtpmfrV7N6Lzt5TvraO7dOYOwtG0imNSuLhWi9bZTE1mLdf3M0y0DzTcvZ1dixomsrTbAtlXDnrmLTu3zPY3voWk00nCrjYUxaloziYnMGb7uotmictncjEvFaza0xWtYmZmd0ZQCOliKza8xWI65mYrWMvbLT/O3zgXpM6Dq28bExMXndnNonsmOxXnW5w6XpfVug2nti9uqdqM4nKY7Gnb0ti3m97Ta079857wX2pta2Nec7XnOZnfvlW31otxMPzrbPcTHXUEzPAiUQAnNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJi2Xm96AExOx+e4rnvQmAR9bK0bpj9PubI5sOcHE1ffD1fpUxbRptEVtO++1acu3sa2xM9raMOvnRek76zEx98A7Cw8et6VxazXYmsTnnHVMZtPc7fOHbCxbat1fMTWa5WtG6211Tvh4TA5e6bhaP8A6KszNcss85zy7nnNJvfGxZxsWZtaZnrnMFb3m97YuLMza0zO/fvlGU7W1XqKRtfWTnP/AJ3AmnWX+aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPxJz8KVQLWnwxn39qZ8363Anzu1Gz7cwTfzvq7i0TXItO1l2IzmwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMAsK9JXxV4wdJXxV4wCwr0lfFXjB0lfFXjALCvSV8VeMHSV8VeMA//9k=");
    
  }
  .collection-name,
  .primary-genre-name {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .media_card {
      min-height: 350px;
    }
    h1 {
      width: 174%;
    }
    .media_header {
      max-width: 50%;
    }
    .info_section {
      height: 100%;
      position: absolute;
    }
    .media_desc {
      width: 50%;
    }
    .info_section {
      background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);
    }
    .blur_back {
      width: 100%;
      background-size: cover;
      background-position: center center;
      width: 80%;
      left: 33%;
    }
  }
  @media screen and (max-width: 768px) {
    .text:after {
      right: 0% !important;
    }
    .media_card .blur_back{
      left:0%;
    }
    .media_card {
      width: 95%;
      margin: 70px auto;
      min-height: 240px;
    }
    .blur_back {
      width: 100%;
      background-size: cover;
      background-position: center top;
      left: unset;
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
      height: unset;
    }
  }
  .skeleton {
    position: relative;
  }
  .skeleton .locandina,
  .skeleton .minutes{
    display: none;
  }
  .skeleton .locandina-holding {
    display: block;
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
  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
/*endcompress*/`)
const darkTheme = new CSSStyleSheet()
darkTheme.replaceSync(`/*compress*/
  h1 {
    color: white;
  }
  h4 {
    color: #9ac7fa;
  }
  .minutes {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.13);
  }
  .show-minutes {
    color: #cee4fd;
  }
  .text {
    color: #cfd6e1;
  }
   .text:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 50%;
    width: 100%;
    height: 40px;
    border-bottom: 8px solid black;
    background: linear-gradient(to top, black, rgba(255, 255, 255, 0));
}
  
  .collection-name,
  .primary-genre-name {
    color: #cfd6e1;
  }
  @media screen and (min-width: 768px) {
    .text:after {
      right: 0% !important;
      background: linear-gradient(to top, black, rgba(255, 255, 255, 0));
    }
    .info_section {
      background: linear-gradient(to right, #0d0d0c 50%, transparent 100%);
    }
  }
  @media screen and (max-width: 768px) {
    .text:after {
      right:0%;
      background: linear-gradient(to top, black, rgba(255, 255, 255, 0));
    }
    .info_section {
      background: linear-gradient(to top, #141413 50%, transparent 100%);
    }
  }
/*endcompress*/`)
const songAndBookTheme = new CSSStyleSheet();
songAndBookTheme.replaceSync(`/*compress*/
  .media_desc {
    display: none;
  }
  .collection-name, 
  .primary-genre-name {
    display: block;
  }
  @media screen and (min-width: 768px) {
    .media_card {
      min-height: 170px;
    }
  }
  @media screen and (max-width: 768px) {
    .media_card {
      min-height: 240px;
    }
  }
/*endcompress*/`)
class Media_Card extends HTMLElement {
  static get observedAttributes() {
    return [
      'name',
      'author',
      'theme',
      'type',
      'episode',
      'season'
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
    if(this.type === 'song' || this.type === 'book') {
      sheets.push(songAndBookTheme)
    }

    this.shadow.adoptedStyleSheets = sheets;
    this.createCard();
    this.card = this.shadow.querySelector('.media_card')
    this.locandina = this.shadow.querySelector('.locandina')
    this.locandinaHolding = this.shadow.querySelector('.locandina-holding')
    this.h1 = this.shadow.querySelector('h1')
    this.h4 = this.shadow.querySelector('h4')
    this.minutes = this.shadow.querySelector('.minutes')
    this.showMinutes = this.shadow.querySelector('.show-minutes')
    this.text = this.shadow.querySelector('.text')
    this.blurBack = this.shadow.querySelector('.blur_back')
    this.collectionName = this.shadow.querySelector('.collection-name')
    this.primaryGenreName = this.shadow.querySelector('.primary-genre-name')
    
if (this.type){
        if (this.type !== "tv"  && this.type !== "book" && this.type !== "song" && this.type !== "film"  && this.type !== "episode"){
        this.populateError({
        status_message: `Please provide a valid type attribute.`
      })
      return;
    }  
}
    
  if (!this.name){
    this.populateError({
        status_message: `Please provide an ${this.type} name.`
      })
    return;
  }  
    

      
      
    if(typeof TheMovieDB_APIKey === 'undefined' && (this.type === 'tv' || this.type === 'film')){
      this.populateError({
        status_message: 'Please provide an API Key'
      })
      return;
    }

    const yearCheck = /\s\([0-9]{4}\)$/ // Checks to see if there is a year, in brackets, at the end of the name
    if(/\s\([0-9]{4}\)$/.test(this.name)){
      let result = /\s\((?<year>[0-9]{4})\)$/.exec(this.name)
      this.year = result.groups.year
      this.mediaName = this.name.replace(/\s\([0-9]{4}\)$/, '')
    }else{
      this.mediaName = this.name
    }

    if(this.type === 'film' || this.type === 'tv'){
      this.endPoint = `https://api.themoviedb.org/3/search/${this.type === 'film' ? 'movie' : 'tv'}?api_key=${TheMovieDB_APIKey}&language=en-US&query=${this.mediaName}`
      if(this.year){
        this.endPoint += `&${this.type === 'film' ? 'year' : 'first_air_date_year'}=${this.year}`
      }
     
    }

    if(this.type === 'episode'){
      
      
      if (this.episode && this.season){
            this.endPoint = `https://api.themoviedb.org/3/search/tv?api_key=${TheMovieDB_APIKey}&language=en-US&query=${this.mediaName}`
    

      } else {
        if (!this.episode){
    this.populateError({
        status_message: `Please provide an ${this.type} number.`
      })
    return;
  }  
      
    if (!this.season){
    this.populateError({
        status_message: `Please provide an TV season number.`
      })
    return;
  }  
      
        
        
      }
          
 

    }
    
        if(this.type === 'song'){
      // this.endPoint = `https://itunes.apple.com/search?term=${this.name}&entity=song`
      this.endPoint = `https://search-itunes.vercel.app?term=${this.name}&entity=song` // for testing
    }



    if(this.type === 'book'){
      this.endPoint = `https://openlibrary.org/search.json?title=${this.name}&limit=1`
      if(this.author){
        this.endPoint = `https://openlibrary.org/search.json?title=${this.name}&limit=1&author=${this.author}`
      }
    }

    this.getDetails()
  }

  populateCardExtras(data) {
    this.extraData = data // 🤞
    if(this.type === 'film' && this.extraData.runtime) {
      this.minutes.innerText = `${this.extraData.runtime} mins`
    } else {
      this.minutes.remove()
    }
  if (this.type != "episode"){
      this.showMinutes.innerText = this.extraData.genres.map(genre => genre.name).join(', ')
  }
    
    if (this.type === "episode"){
    //  console.log( this.extraData)
        this.showMinutes.innerText = `Season ${this.extraData.season_number}`
        
      this.text.innerText = this.extraData.overview;
      this.h1.innerText = this.extraData.name;
      this.h4.innerText = `Episode #${this.extraData.episode_number}`
       if (this.extraData.still_path == null){
          this.locandina.src = `https://www.movienewz.com/img/films/poster-holder.jpg`
        } else{
          this.locandina.src = `https://image.tmdb.org/t/p/w500${this.extraData.still_path}`
        }
    }
  }

  async populateError(error) {
    this.card.classList.remove('skeleton')
    this.h1.innerText = 'Error'
    this.locandinaHolding.style.display = 'block'
    this.locandina.remove()
    this.minutes.remove()
    if(error.errors){
      this.h4.innerText = error.errors.join(', ')
    } else {
      this.h4.innerText = error.status_message
    }
  }

  emptyResults(data) {
    return (typeof data.total_results !== 'undefined' && data.total_results === 0)
        ? true
        : (typeof data.resultCount !== 'undefined' && data.resultCount === 0) ?
            true
            : data.numFound === 0
  }

  populateCard(data) {
  
    this.card.classList.remove('skeleton')
    if(this.emptyResults(data)){
      this.populateError({
        status_message: `Unable to find media`
      })
    } else {

      
      if (this.type === 'tv' || this.type === 'film' || this.type === "episode") {
        this.data = data.results[0] // 🤞
      if (this.type === "episode"){
this.extraEndPoint = `https://api.themoviedb.org/3/tv/${this.data.id}/season/${this.season}/episode/${this.episode}?api_key=${TheMovieDB_APIKey}`
        
      } else {
          this.extraEndPoint = `https://api.themoviedb.org/3/${this.type === 'film' ? 'movie' : 'tv'}/${this.data.id}?api_key=${TheMovieDB_APIKey}`
      }
      
        this.getExtraDetails()
        if(data.results[0].backdrop_path !== null){
          // We don't need to add the default image again - just add the new one if it exists.
          this.blurBack.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${data.results[0].backdrop_path}')`
        }
        this.h1.innerText = (this.type === 'film')
            ? this.data.original_title
            : this.data.original_name
        this.h4.innerText = (this.type === 'film')
            ?  this.data.release_date != (null) ? this.data.release_date.replace(/\-[0-9]{2}/g, '') : ""
        
            : this.data.first_air_date != (null) ? this.data.first_air_date.replace(/\-[0-9]{2}/g, '') : ""
        this.text.innerText = this.data.overview
        if (this.data.poster_path == null){
          this.locandina.src = `https://www.movienewz.com/img/films/poster-holder.jpg`
        } else{
          this.locandina.src = `https://image.tmdb.org/t/p/w500${this.data.poster_path}`
        }
      }
      if (this.type === 'song') {
        this.data = data.results[0] // 🤞
        this.minutes.remove()
        this.showMinutes.remove()
        this.h1.innerText = this.data.trackName
        this.h4.innerText = this.data.artistName
        this.locandina.src = this.data.artworkUrl100
        this.blurBack.style.background = `url("${this.data.artworkUrl100}")`
        this.collectionName.innerHTML = this.data.collectionName
        this.primaryGenreName.innerHTML = this.data.primaryGenreName
      }
      
      if (this.type === 'book') {
        this.data = data.docs[0] // 🤞
        this.h1.innerText = this.data.title
        this.h4.innerText = this.data.author_name.join(', ')
        if(this.data.cover_i) {
          this.locandina.src = `https://covers.openlibrary.org/b/id/${this.data.cover_i}-M.jpg`
          this.blurBack.style.background = `url("https://covers.openlibrary.org/b/id/${this.data.cover_i}-S.jpg")`
        }else{
          this.locandina.remove()
          this.locandinaHolding.remove()
        }
        if(this.data.number_of_pages_median) {
           this.minutes.innerText = `${this.data.number_of_pages_median} pages`
        } else {
          this.minutes.remove()
          this.showMinutes.remove()
        }
      }
     
    }
  }
   createCard(){
    const mediaCard = document.createElement('div');
    mediaCard.classList.add('media_card', 'skeleton');
    
    const infoSection = document.createElement('div');
    infoSection.classList.add('info_section');
    
    const mediaHeader = document.createElement('div');
    mediaHeader.classList.add('media_header');
    
    const locandinaHolding = document.createElement('div');
    locandinaHolding.classList.add('locandina-holding');
    
    const locandina = document.createElement('img');
    locandina.classList.add('locandina');
    locandina.setAttribute('src', '');
    
    const details = document.createElement('div');
    details.classList.add('details');
    
    const h1 = document.createElement('h1');
    const h4 = document.createElement('h4');
    const minutes = document.createElement('span');
    minutes.classList.add('minutes');
    const showMinutes = document.createElement('p');
    showMinutes.classList.add('show-minutes');
    const collectionName = document.createElement('p');
    collectionName.classList.add('collection-name');
    const primaryGenreName = document.createElement('p');
    primaryGenreName.classList.add('primary-genre-name');
    
    details.append(h1, h4, minutes, showMinutes, collectionName, primaryGenreName);
    
    mediaHeader.append(locandinaHolding, locandina, details);
    
    const mediaDesc = document.createElement('div');
    mediaDesc.classList.add('media_desc');
    
    const text = document.createElement('p');
    text.classList.add('text');
    
    mediaDesc.appendChild(text);
    
    infoSection.append(mediaHeader, mediaDesc);
    
    const blurBack = document.createElement('div');
    blurBack.classList.add('blur_back');
    
    mediaCard.append(infoSection, blurBack);
    
    // Append the media card to the shadow root
    this.shadowRoot.append(mediaCard);
 }
  
  async getDetails() {
    try {
      const response = await fetch(this.endPoint, {
        mode: 'cors'
      })
      if (response.ok) {
        const jsonResponse = await response.json();
        this.populateCard(jsonResponse)
      } else {
        const jsonError = await response.json();
        this.populateError(jsonError)
      }
    } catch(error) {
      this.populateError({
        status_message: 'There was in issue with fetching the media details'
      })
    }
  }

  async getExtraDetails() {
    try {
      const response = await fetch(this.extraEndPoint, {
        mode: 'cors'
      })
      if (response.ok) {
        const jsonResponse = await response.json();
        this.populateCardExtras(jsonResponse)
      } else {
        const jsonError = await response.json();
        this.populateError(jsonError)
      }
    } catch(error) {
      this.populateError({
        status_message: 'There was in issue with fetching the extra details for the media'
      })
    }
  }

  get name() {
    return this.getAttribute('name')
  }
       get season() {
    return this.getAttribute('season')
  }
    get episode() {
    return this.getAttribute('episode')
  }
  get author() {
    return this.getAttribute('author')
  }
  get theme() {
    return this.getAttribute('theme') || 'light'
  }
  get type() {
    return this.getAttribute('type') ? this.getAttribute('type').toLowerCase() : 'film'
  }
}

window.customElements.define("media-card", Media_Card)
