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
    document.getElementById('dav').innerHTML='Search : <input type="text" name="clor" id="tr" list="clor" >  <svg class="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7" onclick="search()"id="svg2"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg> <datalist id="color"><option value="red">red</option><option value="pink">pink</option><option value="olive">olive</option><option value="black">black</option><option value="aqua">aqua</option></datalist>  <button onclick="retr()" style="border:1px solid  rgb(129, 182, 163);margin-left:5% ;padding:1%;">Clear Search Bar</button>';
    // document.getElementById('tr').value=''
  
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