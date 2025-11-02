
(function(){
  var tgt = document.getElementById('ratesBody');
  var ts = document.getElementById('ratesTS');
  function render(items, updated){
    tgt.innerHTML = items.map(function(r){
      return '<tr>'
        + '<td>'+r.lender+'</td>'
        + '<td>'+r.product+'</td>'
        + '<td>'+r.ltv+'</td>'
        + '<td><strong>'+r.rate+'</strong></td>'
        + '<td>'+r.term+'</td>'
        + '<td>'+r.fee+'</td>'
        + '<td>'+r.updated+'</td>'
        + '</tr>';
    }).join('');
    if(ts) ts.textContent = updated || new Date().toLocaleString();
  }
  function fallback(){
    fetch('data/mortgage-rates.json').then(function(r){return r.json()}).then(function(d){
      render(d.items, d.updated);
    });
  }
  fallback();
  setInterval(fallback, 10*60*1000);
})();
