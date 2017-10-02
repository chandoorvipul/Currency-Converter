function calculate(){
    var a=$("#input").val();
    //console.log(a);
    var val= $("#val").val();
    //console.log(val);
    // var val1=$("#val1").val();
    var b=$("#output").val();
    //console.log(b);
    var c=ical(a,b,val);
    //console.log(c);
    $("#val1").val(c);
    }
    function ical(a,b,val){
      var result=0;
      if(a == 1){
        if(b == 1){ result = val ;}
        else if(b == 2){result = val*(65.28);}
        else if(b == 3){ result = val*(0.75);}
        else{
          result = val*(1.28);
        }
      }
       if(a == 2){
        if(b == 1){ result = val*0.015 ;}
        else if(b == 2){result = val;}
        else if(b == 3){ result = val*(0.011);}
        else{
          result = val*(0.020);
        }
      }
       if(a == 3){
        if(b == 1){ result = val* 1.34;}
        else if(b == 2){result = val*(87.37);}
        else if(b == 3){ result = val;}
        else{
          result = val*(1.71);
        }
      }
       if(a == 4){
        if(b == 1){ result = val*0.78 ;}
        else if(b == 2){result = val*(51.11);}
        else if(b == 3){ result = val*(0.58);}
        else{
          result = val;
        }
      }
      
      return result;
      
    }