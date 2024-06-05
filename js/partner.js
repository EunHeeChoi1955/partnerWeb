(function($){
    

    const Partner = {
        init:function(){
            this.parallax();
            this.smoothScrollFn();        
            this.section1();
            this.section2();          
            this.footer();
         },
         parallax:function(){
   
           
            const scrollEvent = {
               init: function(){
                 
                  this.section1();
                  this.section2();
                  this.section3();
                  this.section4();
                 
               },
              
               section1: function(){
                                 

                  const titT = $('#section1 .title').offset().top-10;                  
                  let winH = $(window).height();
                  let titTop = titT - winH; 
                  
                 
                  $(window).scroll(function(){
                    
                   
                     if( $(window).scrollTop() >= titTop ){  
                        $('#section1').addClass('addParallax');
                        
                     }
                     if( $(window).scrollTop() == 0 ){                        
                        $('#section1').removeClass('addParallax'); 

                     }
                  }); 


               },
               section2: function(){
                 
                 
                  const titT = $('#section2 ').offset().top-10;
                  let winH = $(window).height();
                  let titTop = titT - winH;
                  $(window).scroll(function(){
                   // console.log('$(window).scrollTop():',$(window).scrollTop());
                     if( $(window).scrollTop() >= titTop ){ 
                        $('#section2').addClass('addParallax');

                     }
                     if( $(window).scrollTop() == 0 ){ 
                        $('#section2').removeClass('addParallax'); 

                     }



                  }); 

               },
               section3: function(){
                 
                 
                  const titT = $('#section3 ').offset().top-10;
                  let winH = $(window).height();
                  let titTop = titT - winH;
                  $(window).scroll(function(){
                   // console.log('$(window).scrollTop():',$(window).scrollTop());
                     if( $(window).scrollTop() >= titTop ){ 
                        $('#section3').addClass('addParallax');

                     }
                     if( $(window).scrollTop() == 0 ){ 
                        $('#section3').removeClass('addParallax'); 

                     }



                  }); 

               },
               section4: function(){
                 
                 
                  const titT = $('#section4').offset().top-10;
                  let winH = $(window).height();
                  let titTop = titT - winH;
                  $(window).scroll(function(){
                   // console.log('$(window).scrollTop():',$(window).scrollTop());
                     if( $(window).scrollTop() >= titTop ){ 
                        $('#section4').addClass('addParallax');

                     }
                     if( $(window).scrollTop() == 0 ){ 
                        $('#section4').removeClass('addParallax'); 

                     }



                  }); 

               }
               
            }
            
            scrollEvent.init();

         },
         header:function(){
          
         },
         smoothScrollFn: function(){ 
            var $smoothBtn  = $('.smoothBtn');
            var $htmlBody   = $('html,body');
            

               $smoothBtn.on({
                     click:  function(event){
                           event.preventDefault();
                        var $this = $(this); 

                           var url = $this.attr('href'); 
                     if(url !== undefined && url != ''){
                              $htmlBody.stop().animate({scrollTop:$( url ).offset().top-60},800,'easeInOutCirc');
                           
                     }
                  }
               });
         },
         section1:function(){
         },
         section2:function(){             
         },         
         footer:function(){            
         }

    };

    Partner.init();

})(jQuery);