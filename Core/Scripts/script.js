$(document).ready( 
  function(){
      $("#conteudo").load('Paginas/home.html');
      setTimeout(function(){
      $("#loadScreen").animate({ height: 64, opacity: 0 }, 'slow').fadeOut(1);
      }, 1500)      
  }  
);

// OBRIGADO, Sergio ♦, COMUNIDADE STACK OVERFLOW EM PORTUGUÊS.
$(function () {
    $(window).on('hashchange', hashchanged);
    
    hashchanged();
});

function hashchanged() {
    $("#loadScreen").fadeIn(1).animate({ height: $(document).height(), opacity: 1 }, 'slow');
    var hash = location.hash.replace(/[#\/]/g, '');
    setTimeout(
        function(){
            $("#conteudo").load('Paginas/' + hash + '.html', function(){
                setTimeout(function(){
                    $("#loadScreen").animate({ height: 64, opacity: 0 }, 'slow').fadeOut(1);
                }, 1500);
            });   
        }, 100
    );     
    
}

