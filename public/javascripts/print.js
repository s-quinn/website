function printResume(){
  var w = window.open()
    w.document.write('<img src="/images/resume.jpg" onload="window.print();window.close()" />');
}
