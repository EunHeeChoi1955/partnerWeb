(function($){
    

    const Partner = {
        init:function(){
            this.parallax();
            
            this.section1();
            this.section2();
           
            this.footer();
         },
         parallax:function(){
   

           
            const scrollEvent = {
               init: function(){
                 
                  this.section1();
                  this.section2();
                 
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
                 
                 
                  const titT = $('#section2 .title').offset().top-10;
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




               }
               
            }
            
            scrollEvent.init();

         },
         header:function(){
          
         },
         section1:function(){

          

         },
         section2:function(){ 
            
         },
         
         footer:function(){
            
         }

    };    // 객체



    Partner.init();


})(jQuery);