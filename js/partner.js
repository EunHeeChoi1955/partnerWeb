(function($){
    

    const Agency = {
        init:function(){//메소드 (함수)
            this.parallax();
            
            this.section1();
            this.section2();
           
            this.footer();
         },
         parallax:function(){
   

            // 객체화 : 패럴럭스의 모든 섹션에서 발생되는 변수 충돌 피하기 위해서 
            const scrollEvent = {
               init: function(){
                 
                  this.section1();
                  this.section2();
                 
               },
              
               section1: function(){
                 
                  // 타이틀 누구.title 맨위에서 타이틀까지 간격(offset().top) 스크롤 탑값 .scrollTop 구하기
                  // console.log( '$(\'.title\').offset().top :', $('#section1 .title').offset().top );
                  // console.log( '$(window).height() :', $('#section1 .title').offset().top - $(window).height() );
                  // 타이틀 탑값 위치를 창높이 만큼 빼주고 미리 애니메이션이 수행 되도록 계산

                  const titT = $('#section1 .title').offset().top-10;                  
                  let winH = $(window).height();
                  let titTop = titT - winH; // 윈도우의 스크롤 탑값이 여기에 도달하면(if ~ then) 애니메이션 구현 
                  
                  // 윈도우.스크롤 이벤트  scroll(); 메서드 : 스크롤 값이 발생이 되어야 구현된다.
                  $(window).scroll(function(){
                    
                     //console.log('$(window).scrollTop():',$(window).scrollTop());
                     if( $(window).scrollTop() >= titTop ){  //스크롤탑값이 이상이면 구현해라 애니메이션을  addClass
                        //섹션1 선택자에 클래스를 추가해라 addClass #section1 .addParallax
                        $('#section1').addClass('addParallax');
                        
                     }
                     if( $(window).scrollTop() == 0 ){  // 맨위 스크롤 탑값이 0이면 추가된 클래스 삭제                       
                        $('#section1').removeClass('addParallax'); //초기화 되서 스크롤 넘기면 반복적으로 됌

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



    Agency.init();


})(jQuery);