

    $(document).ready(function() {
    // all custom jQuery will go here

                         if(document.getElementById("id_QuestionType").value==0){
$("#id_answer_0editable").val("true");
                                        $("#id_answer_0 ").val("true");

                                   document.getElementById("id_answer_0editable").value="true";
                                 document.getElementById("id_answer_0").value="true";

                                        document.getElementById("id_answer_0editable").innerHTML = "True";
                                      document.getElementById("id_answer_0").innerHTML = "True";

                                 document.getElementById("id_answer_0editable").contentEditable = false;
                                 document.getElementById("id_answer_0").contentEditable = false;

                                 $("#id_answer_1editable").val("false");
                                        $("#id_answer_1 ").val("false");

                                   document.getElementById("id_answer_1editable").value="false";
                                 document.getElementById("id_answer_1").value="false";

                                        document.getElementById("id_answer_1editable").innerHTML = "false";
                                      document.getElementById("id_answer_1").innerHTML = "false";

                                 document.getElementById("id_answer_1editable").contentEditable = false;
                                 document.getElementById("id_answer_1").contentEditable = false;
                                        var x = document.getElementById("id_answer_2editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                   x.style.display = "none";
                                  var x = document.getElementById("id_answer_3editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                   x.style.display = "none";
                               var x = document.getElementById("id_answer_4editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                   x.style.display = "none";
                                   var y = document.getElementById("id_correctanswer_2").parentNode;

                               y.style.display = "none";
                               var y = document.getElementById("id_correctanswer_3").parentNode;

                               y.style.display = "none";
                               var y = document.getElementById("id_correctanswer_4").parentNode;

                               y.style.display = "none";
                             var z= document.getElementById("id_feedback_2editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                               z.style.display = "none";
                            var z= document.getElementById("id_feedback_3editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                               z.style.display = "none";
                            var z= document.getElementById("id_feedback_4editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                               z.style.display = "none";
                               var o= document.getElementById("id_answernumbering").parentNode.parentNode;
                               o.style.display = "none";
                               var o= document.getElementById("id_addanswers").parentNode.parentNode;
                               o.style.display = "none";
                  
        }else if(document.getElementById("id_QuestionType").value==1){
            
              var a = document.getElementById("id_answer_0editable");
                                         $("#id_answer_0editable").val("");
                                        $("#id_answer_0 ").val("");
                             document.getElementById("id_answer_0editable").contentEditable = true;
                                 document.getElementById("id_answer_0").contentEditable = true;

                                   document.getElementById("id_answer_0editable").value="";
                                 document.getElementById("id_answer_0").value="";

                                        document.getElementById("id_answer_0editable").innerHTML = "";
                                      document.getElementById("id_answer_0").innerHTML = "";
                                 

                                 var a = document.getElementById("id_answer_1editable");
                                $("#id_answer_1editable").val("");
                                        $("#id_answer_1 ").val("");
                               document.getElementById("id_answer_1editable").contentEditable = true;
                                 document.getElementById("id_answer_1").contentEditable = true;

                                   document.getElementById("id_answer_1editable").value="";
                                 document.getElementById("id_answer_1").value="";

                                        document.getElementById("id_answer_1editable").innerHTML = "";
                                      document.getElementById("id_answer_1").innerHTML = "";  

                    var x = document.getElementById("id_answer_2editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                 if( x.style.display === "none"){
                                      x.style.display="block"; 
                                 }
                                  var x = document.getElementById("id_answer_3editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                  if( x.style.display === "none"){
                                      x.style.display="block"; 
                                 }
                               var x = document.getElementById("id_answer_4editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                   if( x.style.display === "none"){
                                      x.style.display="block"; 
                                 }
                                   var y = document.getElementById("id_correctanswer_2").parentNode;

                                  if( y.style.display ==="none"){
                                      y.style.display="block"; 
                                 }                              
                                 var y = document.getElementById("id_correctanswer_3").parentNode;

                               if( y.style.display === "none"){
                                      y.style.display="block"; 
                                 }
                               var y = document.getElementById("id_correctanswer_4").parentNode;

                               if( y.style.display === "none"){
                                      y.style.display="block"; 
                                 }
                             var z= document.getElementById("id_feedback_2editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                               if( z.style.display === "none"){
                                      z.style.display="block"; 
                                 }
                            var z= document.getElementById("id_feedback_3editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                               if( z.style.display === "none"){
                                      z.style.display="block"; 
                                 }
                            var z= document.getElementById("id_feedback_4editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                               if( z.style.display === "none"){
                                      z.style.display="block"; 
                                 }
                               var o= document.getElementById("id_answernumbering").parentNode.parentNode;
                               if( o.style.display === "none"){
                                      o.style.display="block"; 
                                 }
                                  var o= document.getElementById("id_addanswers").parentNode.parentNode;
                               if( o.style.display === "none"){
                                      o.style.display="block"; 
                                      
            
        }
    }

 
});
$("#mform1").submit(function(e){

                         if(document.getElementById("id_QuestionType").value==0){
                          if(!(document.getElementById("id_correctanswer_0").checked)&&!(document.getElementById("id_correctanswer_1").checked)){
                                   alert("Error you should choose true or false");
                                                          
            e.preventDefault();

                               
                           }
                       }

                       if((document.getElementById("id_minus").value!=0 && document.getElementById("id_questions").value!=0)&&document.getElementById("id_minus").value>document.getElementById("id_defaultmark").value){
                           alert("minus value should be less than or equal defaultmark value");
                                       e.preventDefault();

                       }
                       if(document.getElementById("id_minus").value<0){
                  alert("minus value should be greater than or equal 0 ");
                                       e.preventDefault();

                       } 
              if(document.getElementById("id_questions").value<0){
                  alert("number of wrong answers should be greater than or equal 0 ");
                                       e.preventDefault();

                       } 
                                               
    });

            function myFunction(id){


              
             if(document.getElementById("id_QuestionType").value==0){
                 if(id==document.getElementById("id_correctanswer_0").id){
                                                                     

                                 document.getElementById("id_correctanswer_1").checked=false;
                     document.getElementById("id_correctanswer_0").checked=true;
                                          document.getElementById("id_correctanswer_2").checked=true;

                 }else if(id==document.getElementById("id_correctanswer_1").id){

                                 document.getElementById("id_correctanswer_0").checked=false;
                     document.getElementById("id_correctanswer_1").checked=true;
                                          document.getElementById("id_correctanswer_2").checked=true;


                 }
             
             }

                
                
            }
   

            function myFunctionToDoSomething() {
                       

                               if(document.getElementById("id_QuestionType").value==1){
                                  var a = document.getElementById("id_answer_0editable");
                                         $("#id_answer_0editable").val("");
                                        $("#id_answer_0 ").val("");
                             document.getElementById("id_answer_0editable").contentEditable = true;
                                 document.getElementById("id_answer_0").contentEditable = true;

                                   document.getElementById("id_answer_0editable").value="";
                                 document.getElementById("id_answer_0").value="";

                                        document.getElementById("id_answer_0editable").innerHTML = "";
                                      document.getElementById("id_answer_0").innerHTML = "";
                                 

                                 var a = document.getElementById("id_answer_1editable");
                                $("#id_answer_1editable").val("");
                                        $("#id_answer_1 ").val("");
                               document.getElementById("id_answer_1editable").contentEditable = true;
                                 document.getElementById("id_answer_1").contentEditable = true;

                                   document.getElementById("id_answer_1editable").value="";
                                 document.getElementById("id_answer_1").value="";

                                        document.getElementById("id_answer_1editable").innerHTML = "";
                                      document.getElementById("id_answer_1").innerHTML = "";  

                    var x = document.getElementById("id_answer_2editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                 if( x.style.display === "none"){
                                      x.style.display="block"; 
                                 }
                                  var x = document.getElementById("id_answer_3editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                  if( x.style.display === "none"){
                                      x.style.display="block"; 
                                 }
                               var x = document.getElementById("id_answer_4editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                   if( x.style.display === "none"){
                                      x.style.display="block"; 
                                 }
                                   var y = document.getElementById("id_correctanswer_2").parentNode;

                                  if( y.style.display ==="none"){
                                      y.style.display="block"; 
                                 }                              
                                 var y = document.getElementById("id_correctanswer_3").parentNode;

                               if( y.style.display === "none"){
                                      y.style.display="block"; 
                                 }
                               var y = document.getElementById("id_correctanswer_4").parentNode;

                               if( y.style.display === "none"){
                                      y.style.display="block"; 
                                 }
                             var z= document.getElementById("id_feedback_2editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                               if( z.style.display === "none"){
                                      z.style.display="block"; 
                                 }
                            var z= document.getElementById("id_feedback_3editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                               if( z.style.display === "none"){
                                      z.style.display="block"; 
                                 }
                            var z= document.getElementById("id_feedback_4editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                               if( z.style.display === "none"){
                                      z.style.display="block"; 
                                 }
                               var o= document.getElementById("id_answernumbering").parentNode.parentNode;
                               if( o.style.display === "none"){
                                      o.style.display="block"; 
                                 }
                                  var o= document.getElementById("id_addanswers").parentNode.parentNode;
                               if( o.style.display === "none"){
                                      o.style.display="block"; 
                                      
                                 }
                             }else   if(document.getElementById("id_QuestionType").value==0){
         // id_answer_0                        
                    $("#id_answer_0editable").val("true");
                                        $("#id_answer_0 ").val("true");

                                   document.getElementById("id_answer_0editable").value="true";
                                 document.getElementById("id_answer_0").value="true";

                                        document.getElementById("id_answer_0editable").innerHTML = "True";
                                      document.getElementById("id_answer_0").innerHTML = "True";

                                 document.getElementById("id_answer_0editable").contentEditable = false;
                                 document.getElementById("id_answer_0").contentEditable = false;

                                 $("#id_answer_1editable").val("false");
                                        $("#id_answer_1 ").val("false");

                                   document.getElementById("id_answer_1editable").value="false";
                                 document.getElementById("id_answer_1").value="false";

                                        document.getElementById("id_answer_1editable").innerHTML = "false";
                                      document.getElementById("id_answer_1").innerHTML = "false";

                                 document.getElementById("id_answer_1editable").contentEditable = false;
                                 document.getElementById("id_answer_1").contentEditable = false;
                                        var x = document.getElementById("id_answer_2editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                   x.style.display = "none";
                                  var x = document.getElementById("id_answer_3editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                   x.style.display = "none";
                               var x = document.getElementById("id_answer_4editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                   x.style.display = "none";
                                   var y = document.getElementById("id_correctanswer_2").parentNode;

                               y.style.display = "none";
                               var y = document.getElementById("id_correctanswer_3").parentNode;

                               y.style.display = "none";
                               var y = document.getElementById("id_correctanswer_4").parentNode;

                               y.style.display = "none";
                             var z= document.getElementById("id_feedback_2editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                               z.style.display = "none";
                            var z= document.getElementById("id_feedback_3editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                               z.style.display = "none";
                            var z= document.getElementById("id_feedback_4editable").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                               z.style.display = "none";
                               var o= document.getElementById("id_answernumbering").parentNode.parentNode;
                               o.style.display = "none";
                               var o= document.getElementById("id_addanswers").parentNode.parentNode;
                               o.style.display = "none";
                  
                }
  

 
            }
        