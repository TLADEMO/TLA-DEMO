
(function(){
  var map = {
    "index":"THE LANDLORD APP",
    "vault":"THE LANDLORD ARCHIVE",
    "protect":"TENANT LATE AGAIN?",
    "tax":"THE LEDGER ASSISTANT",
    "mortgages":"THE LOAN ADVISER",
    "partner":"THE LETTING AGENT",
    "insights":"THE LANDLORD ANGLE"
  };
  var slug = (location.pathname||"/").replace(/^\//,'').replace(/\.html$/,'') || "index";
  var strap = document.getElementById('brandStrap');
  if(strap){ strap.textContent = map[slug] || map.index; }
  document.querySelectorAll('.nav-top a').forEach(function(a){
    var href = a.getAttribute('href');
    if(href && href.indexOf(slug+'.html')>-1) a.setAttribute('aria-current','page');
  });
})();
