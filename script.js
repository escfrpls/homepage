function loadPage(page) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let parser = new DOMParser();
      const doc = parser.parseFromString(this.responseText, 'text/html');
      document.getElementById("content").innerHTML = doc.getElementById("content").innerHTML;
/* весь body выбирается так:
      document.getElementById("content").innerHTML = doc.body.innerHTML;
*/
    }
  };
  xhttp.open("GET", page, true);
  xhttp.send();
}
