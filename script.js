function re(){
    document.getElementById('nnav').style='display:none;';
    // document.getElementById('carouselExampleAutoplaying').style=';height: 100%; width: 100%;';
 };
 function ply(){
    document.getElementById('myvideo').play()
 }
 function ree(){
    document.getElementById('nnav').style='display:table;';
    // document.getElementById('carouselExampleAutoplaying').style='margin-top: 10vh; ' };
 }
  function rep(){
    document.getElementById('dav').innerHTML='<div style="display: flex;"><div class="repair"> Search : <input type="text" name="clor" id="tr" list="clor" ></div>  <svg id="svg2" class="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7" onclick="search()"id="svg2"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg> <datalist id="color"><option value="red">red</option><option value="pink">pink</option><option value="olive">olive</option><option value="black">black</option><option value="aqua">aqua</option></datalist>  <button onclick="retr()" class="clear">Clear Search Bar</button>;</div>'    // document.getElementById('tr').value=''
  
  }
  function retr(){
    document.getElementById('dav').innerHTML='';
    };
    function search() {
     var x=document.getElementById("tr").value;
     const url= "C:/Users/Lenovo X270/Documents/Html and css codes/images/";
     var ans= url + x ;
     var ewin = window.open(ans,'_blank');
     ewin.focus;

     function clear() {
      if ( document.getElementById("tr").value="") {
        remove(ans) 
      } 
     }
  }
  function off() {
   var body = document.getElementsByTagName('body')[0];
   var nav = document.getElementsByTagName('nav')[0];
  //  var searching = document.getElementById('searching')[0];
  body.style.backgroundColor = " rgb(6, 6, 46)";
  body.style.color="white"
  nav.style.backgroundColor = " rgb(6, 6, 46)";
  // searching.style.backgroundColor = "white";
  }
  function on() {
   var body = document.getElementsByTagName('body')[0];
   var nav = document.getElementsByTagName('nav')[0];
  body.style.backgroundColor = "white";
  body.style.color="black"
  nav.style.backgroundColor = "white";
  }
function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function menu(){
  document.getElementById('links').style.display='block';
 
}

function clse(){
  document.getElementById('links').style.display='none';
 }
 function cls(){
  document.getElementById('btns').style.display='none';
 }
function btn(){
document.getElementById('btns').style.display='flex';
}
function contact(){
  document.getElementById('contact').style.display='block';
  }
function cl(){
  document.getElementById('contact').style.display='none';
}
// for my Login

// var nname=('jona', 'stan')
// function logN() {
//   document.getElementById('fname').value=nname;
// }
// ////////////////////////////////////
// var bname=('fest', 'elock')
// function logNn() {
//   document.getElementById('lname').value=bname;
// }
// ////////////////////////////////////////
// function submit(){
//   document.getElementById('fname').value=nname;
//   if(value=nname){
//     document.write('it worked well');
//   }else{
//     alert('wrong');
//   } 
//   }

// function anime(){
//   document.getElementById('body').style.opacity='0.2', document.getElementById('anime').style.opacity='none'
// }
// function work(){
//   document.getElementById('body').innerHTML=" <div class='work'><div class='work-div'>! This page is unavailable at the moment, due to some minor adjustments from the source. Thank you.</div></div>";
// }