var num = 0; 
function count(num) {
  document.getElementById('after').value += document.getElementById(num).value;

}
  function eva() {
    var result;
    var res;
    res=document.getElementById("after").value;
    continu=document.getElementById("before").value;
   // console.log(res);
    var flag = new RegExp("[\\/\\*\\-\\+]");
    if(flag.test(res)){      //判断点击=之前的表达式是否包含+-*/
      console.log("存在特殊字符");

      var arr=res.split(""); 
      console.log(arr);
       var index=arr.indexOf("-"); 
       console.log(index);
       if(index==0){         //在包含的情况下，判断是不是负值导致的（第一个是字符）
        var arr=continu.split(""); 
        var index=arr.lastIndexOf("-"); 
        if(index!=-1){     //是负值导致的情况下，进行连等运算（连续减法）
          var x=[];
          for(var i=index;i<arr.length;i++){
            x.push(arr[i])
          }
          y=x.join("");
          console.log(y);
          result = document.getElementById("after").value  ;
          var result2=eval(result+y); 
          document.getElementById("before").value=result+y;  
          document.getElementById("after").value=result2;
         }
       }else{ //为正常长表达式，直接进行运算
        try{
        
          document.getElementById("before").value=res;  
          result = eval(document.getElementById("after").value);
          document.getElementById("after").value=result;
      }
      catch(exception){
  
          document.getElementById("after").value="输入运算方式有错误"
      }
       }
    }else{                         //后一个结果内无表达式，进行连等运算
      var arr=continu.split(""); 
      var index1=arr.lastIndexOf("+");
      var index2=arr.lastIndexOf("-"); 
      var index3=arr.lastIndexOf("*"); 
      var index4=arr.lastIndexOf("/"); 
      var ary = [index1,index2,index3,index4];
      var sum=0;
      for(var i=0;i<ary.length;i++)
      {
      
      if(ary[i]>sum){
      sum=ary[i];               //读取原运算句段，判断所有出现字符最后一个，来进行连等操作
      }
      }
      console.log(sum) 
      var x=[];
      for(var i=sum;i<arr.length;i++){
        x.push(arr[i])
      }
      y=x.join("");
      console.log(y);
      result = document.getElementById("after").value  ;
      var result2=eval(result+y); 
      document.getElementById("before").value=result+y;  
      document.getElementById("after").value=result2;

}

}
function clean(){
    console.log("清空操作")
    document.getElementById("after").value = null;
    document.getElementById("after").focus();
    document.getElementById("before").value = null;
  
}


      // console.log(false);
      // var arr=continu.split(""); 
      // // console.log(arr);
      //  var index=arr.lastIndexOf("+"); 
      // // console.log(index);
      //  if(index!=-1){   //判断前结果最后一个表达式是什么
      //   var x=[];
      //   for(var i=index;i<arr.length;i++){
      //     x.push(arr[i])
      //   }             //拿取最后一个符号后面的数据（包括符号）
      //   y=x.join("");
      //   console.log(y);
      //   result = document.getElementById("after").value  ;
      //   var result2=eval(result+y); 
      //   document.getElementById("before").value=result+y;  
      //   document.getElementById("after").value=result2;
      //  }else{
      //   var arr=continu.split(""); 
      //    console.log(arr);
      //    var index=arr.lastIndexOf("-"); 
      //    console.log(index);
      //    if(index!=-1){
      //     var x=[];
      //     for(var i=index;i<arr.length;i++){
      //       x.push(arr[i])
      //     }
      //     y=x.join("");
      //     console.log(y);
      //     result = document.getElementById("after").value  ;
      //     var result2=eval(result+y); 
      //     document.getElementById("before").value=result+y;  
      //     document.getElementById("after").value=result2;
      //    }else{
        //   var arr=continu.split(""); 
        //   // console.log(arr);
        //    var index=arr.lastIndexOf("*"); 
        //   // console.log(index);
        //    if(index!=-1){
        //     var x=[];
        //     for(var i=index;i<arr.length;i++){
        //       x.push(arr[i])
        //     }
        //     y=x.join("");
        //     console.log(y);
        //     result = document.getElementById("after").value  ;
        //     var result2=eval(result+y); 
        //     document.getElementById("before").value=result+y;  
        //     document.getElementById("after").value=result2;
        //    }else{
        //     var arr=continu.split(""); 
        //     // console.log(arr);
        //      var index=arr.lastIndexOf("/"); 
        //     // console.log(index);
        //      if(index!=-1){
        //       var x=[];
        //       for(var i=index;i<arr.length;i++){
        //         x.push(arr[i])
        //       }
        //       y=x.join("");
        //       console.log(y);
        //       result = document.getElementById("after").value  ;
        //       var result2=eval(result+y); 
        //       document.getElementById("before").value=result+y;  
        //       document.getElementById("after").value=result2;
        //      }
        //    }
    //   }
  
      
    // }
    //

