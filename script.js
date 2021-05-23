      $(".position1").hide(); 
         $(".firstjump").hide();
          $(".firsttwirl").hide();  
          $(".jump-one").hide();  
          $(".jump-one").hide();   
			$(".twirl-one").hide();   
          $(".secondjump").hide();  
          $(".secondtwirl").hide();  
          $(".secondjump").hide();  
          $(".secondtwirl").hide();  
          $(".Skatearound").hide();  
          $(".thirdjump").hide();
          $(".fall-down").hide();
          $(".continue").hide();
          $(".youlost").hide();
		  $(".youfell").hide();
		  $(".firstjumppraise").hide();
		  $(".skate-around").hide();
		  $(".results").hide();
	  	  $(".youwon").hide();
	  	  $(".choiceone").hide();
	  	  $(".choicetwo").hide();


$(".startbutton").click(function() {
	$(".intro").fadeOut();
      $(".startbutton").hide();
      $(".position1").show(); 
         $(".firstjump").show();
          $(".firsttwirl").show(); 
            $(".choiceone").show();   
       
    
       
   });
$(".firstjump").click(function() {
	$(".firstjump").fadeOut();
      $(".firsttwirl").fadeOut();
      $(".position1").fadeOut(); 
    	$(".jump-one").show();
        	$(".secondjump").show(); 
    	$(".secondtwirl").show(); 
        	$(".firstjumppraise").show(); 
                $(".choiceone").hide();  
                    $(".choicetwo").show();   

    

       
    
       
   });

$(".firsttwirl").click(function() {
	$(".firstjump").fadeOut();
      $(".firsttwirl").fadeOut();
      $(".position1").fadeOut(); 
    	$(".twirl-one").show(); 
    	$(".secondjump").show(); 
    	$(".secondtwirl").show(); 
                $(".choiceone").hide(); 
                        $(".choicetwo").show();   

    

    
   });

$(".secondjump").click(function() {
	$(".secondjump").fadeOut();
      $(".secondtwirl").fadeOut();
      $(".jump-one").show(); 
    	$(".twirl-one").hide(); 
    	$(".secondjump").hide(); 
    	$(".secondtwirl").hide(); 
        	$(".Skatearound").show(); 
    	$(".thirdjump").show(); 
     
    
       
   });

$(".secondtwirl").click(function() {
	$(".secondjump").fadeOut();
      $(".secondtwirl").fadeOut();
      $(".jump-one").hide(); 
    	$(".twirl-one").show(); 
    	$(".secondjump").show(); 
    	$(".secondtwirl").show(); 
        	$(".Skatearound").show(); 
    	$(".thirdjump").show(); 
     
    
       
   });
$(".thirdjump").click(function() {
          $(".twirl-one").hide(); 
        	$(".Skatearound").hide(); 
    	$(".thirdjump").hide(); 
        	$(".fall-down").show(); 
            	$(".continue").show(); 
               	$(".youfell").show(); 
      	$(".jump-one").hide(); 
          	$(".firstjumppraise").hide(); 
          	$(".choicetwo").hide(); 

    
    
       
   });

$(".Skatearound").click(function() {
	$(".secondjump").fadeOut();
      $(".secondtwirl").fadeOut();
      $(".jump-one").hide(); 
    	$(".twirl-one").hide(); 
    	$(".secondjump").hide(); 
    	$(".secondtwirl").hide(); 
        	$(".Skatearound").hide(); 
    	$(".thirdjump").hide(); 
        	$(".skate-around").show();
    		  $(".results").show();
            	$(".choicetwo").hide(); 

    
    
     
    
       
   });
$(".continue").click(function() {
          $(".fall-down").hide(); 
        	$(".continue").hide(); 
    $(".youlost").show(); 
        $(".youfell").hide(); 
            $(".firstjumppraise").hide(); 
    

       
   });
$(".results").click(function() {
          $(".fall-down").hide(); 
              $(".results").hide(); 
        	$(".continue").hide(); 
    $(".youwon").show(); 
        $(".youfell").hide(); 
            $(".firstjumppraise").hide(); 
                $(".skate-around").hide(); 
    

       
   });


