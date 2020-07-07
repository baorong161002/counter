var valueText=0;

function count(num) {
  let oldvalue = this.valueText;
  //let aftervalue = 0;
   let data = document.getElementById(num).value;
   let rev = this.checkClickType(oldvalue,data);
   
   valueText=rev;
   document.getElementById("before").value=valueText;
   //console.log("计算状态保存---"+valueText);
}
function checkClickType(oldvalue,data){
  switch (data) {
      case '=':
          let oldEqual = oldvalue;
          let oldEqualStr=oldEqual.toString();
          var arr=oldEqualStr.split("");//获得运算语句，来进行判断

               //最后一个字符是“=”号，再进行输入的情况下
              var index0=arr.lastIndexOf("=");
              var index1=arr.lastIndexOf("+");
              var index2=arr.lastIndexOf("-"); 
              var index3=arr.lastIndexOf("*"); 
              var index4=arr.lastIndexOf("/"); 
              var ary = [index0,index1,index2,index3,index4];
              var sum=0;
              var ary2=[index1,index2,index3,index4];
              var sum2=0;
              for(var i=0;i<ary.length;i++)  //得到所有符号出现的最后位置，进行排序
              {  
              if(ary[i]>sum){
              sum=ary[i];                       
              }
              }         
              if(sum==index0){              //“=”号出现在最后的情况下，进行连等
                for(var i=0;i<ary2.length;i++)   //得到除“=”号外最后出现的符号位置
                {  
                if(ary2[i]>sum2){           
                sum2=ary2[i];               
                }
                } 
                var x=[];
                for(let i=sum2;i<arr.length-1;i++){
                  x.push(arr[i])                //拿到最后符号后需要进行的运算语句
                }
                var y=[];
                for(let i=0;i<arr.length-1;i++){
                  y.push(arr[i])                 //拿到之前运算语句剪掉“=”后的语句
                }
              
                var resArr=y.concat(x);         //y+x
                let resStr = resArr.join("");    //数组转化为字符串
                let result = eval(resStr) ; 
                document.getElementById("after").value=result;
                return resStr+"=";
              }else{
                 // eslint-disable-next-line
                let result = eval(oldvalue ) ; 
                document.getElementById("after").value=result;
                return oldvalue+data;
               }
      case '+':
      case '-':
        let oldChar = oldvalue;    
        let oldCharStr=oldChar.toString();  //输入符号之前的运算语句
        let oldCharStrLast=oldCharStr.substr(oldCharStr.length-1,1);   //提取语句最后一个符号
        let oldCharStrFirst= oldCharStr.substring(0, oldCharStr.length - 1);   //删去语句最后一个符号

        var flag = new RegExp("[\\/\\*\\-\\+\\=]");

        if(flag.test(oldCharStrLast)){  //最后一个为特殊字符
          return oldCharStrFirst+data;  //删去后加入新输入符号
        }else{
          let result = eval(oldvalue ) ; 
          document.getElementById("after").value=result;
          return oldvalue+ data
        }
        case '/':
        case '*':
          let oldCharx = oldvalue;    
          let oldCharStrx=oldCharx.toString();  //输入符号之前的运算语句
          let oldCharStrLastx=oldCharStrx.substr(oldCharStrx.length-1,1);   //提取语句最后一个符号
          let oldCharStrFirstx= oldCharStrx.substring(0, oldCharStrx.length - 1);   //删去语句最后一个符号
  
          var flag = new RegExp("[\\/\\*\\-\\+\\=]");
  
          if(flag.test(oldCharStrLastx)){  //最后一个为特殊字符
            return oldCharStrFirstx+data;  //删去后加入新输入符号
          }else{
            let result = eval(oldvalue ) ; 
            document.getElementById("after").value=result;
            return result+data;
          }
      default://一般数字`
      let old = oldvalue+data;    //运算语句
      let oldStr=old.toString();
      var arr=oldStr.split("");   //获得运算语句，转换为数组，来进行判断

      var index=arr.lastIndexOf("=");
      if(index ==-1){             //如果“=”号不存在
        var index1=arr.lastIndexOf("+");
        var index2=arr.lastIndexOf("-"); 
        var index3=arr.lastIndexOf("*"); 
        var index4=arr.lastIndexOf("/"); 
        var ary = [index1,index2,index3,index4];  //将每个运算符号的最后位置转化为数组
        var sum=0;
        for(var i=0;i<ary.length;i++)
        {  
        if(ary[i]>sum){
        sum=ary[i];               
        }
        }                                   //得到最后一个符号的位置
        var x=[];
        for(var i=sum+1;i<arr.length;i++){  //通过排序使得一直显示输入数字段
          x.push(arr[i])
        }
        
        var flag = new RegExp("[\\/\\*\\-\\+]");
            if(flag.test(oldvalue)){         //原运算语句存在符号
              let xValue = x.join("");  
              aftervalue =  xValue;           
              document.getElementById("after").value=aftervalue; //输入窗口显示继续输入的内容
              return oldvalue + data; 
            }else{
              if(oldvalue === 0 ){//清零
                oldvalue = ''
            }
              aftervalue = oldvalue + data;
              document.getElementById("after").value=aftervalue;
              return oldvalue + data
            }  
          }
        else{     //“=”存在的情况下再次输入，运算语句重新开始
            aftervalue = data;
            document.getElementById("after").value=aftervalue;
            return data
          }

  }
}
function clean(){
    console.log("清空操作")
    document.getElementById("after").value = null;
    document.getElementById("before").value = null;
    valueText = 0;
}





// var num = 0; 
// function count(num) {
//   document.getElementById('after').value += document.getElementById(num).value;

// }
//   function eva() {
//     var result;
//     var res;
//     res=document.getElementById("after").value;
//     continu=document.getElementById("before").value;
//    // console.log(res);
//     var flag = new RegExp("[\\/\\*\\-\\+]");
//     if(flag.test(res)){      //判断点击=之前的表达式是否包含+-*/
//       console.log("存在特殊字符");

//       var arr=res.split(""); 
//       console.log(arr);
//        var index=arr.indexOf("-"); 
//        console.log(index);
//        if(index==0){         //在包含的情况下，判断是不是负值导致的（第一个是字符）
//         var arr=continu.split(""); 
//         var index=arr.lastIndexOf("-"); 
//         if(index!=-1){     //是负值导致的情况下，进行连等运算（连续减法）
//           var x=[];
//           for(var i=index;i<arr.length;i++){
//             x.push(arr[i])
//           }
//           y=x.join("");
//           console.log(y);
//           result = document.getElementById("after").value  ;
//           var result2=eval(result+y); 
//           document.getElementById("before").value=result+y;  
//           document.getElementById("after").value=result2;
//          }
//        }else{ //为正常长表达式，直接进行运算
//         try{
        
//           document.getElementById("before").value=res;  
//           result = eval(document.getElementById("after").value);
//           document.getElementById("after").value=result;
//       }
//       catch(exception){
  
//           document.getElementById("after").value="输入运算方式有错误"
//       }
//        }
//     }else{                         //后一个结果内无表达式，进行连等运算
//       var arr=continu.split(""); 
//       var index1=arr.lastIndexOf("+");
//       var index2=arr.lastIndexOf("-"); 
//       var index3=arr.lastIndexOf("*"); 
//       var index4=arr.lastIndexOf("/"); 
//       var ary = [index1,index2,index3,index4];
//       var sum=0;
//       for(var i=0;i<ary.length;i++)
//       {
      
//       if(ary[i]>sum){
//       sum=ary[i];               //读取原运算句段，判断所有出现字符最后一个，来进行连等操作
//       }
//       }
//       console.log(sum) 
//       var x=[];
//       for(var i=sum;i<arr.length;i++){
//         x.push(arr[i])
//       }
//       y=x.join("");
//       console.log(y);
//       result = document.getElementById("after").value  ;
//       var result2=eval(result+y); 
//       document.getElementById("before").value=result+y;  
//       document.getElementById("after").value=result2;

// }

// }
// function clean(){
//     console.log("清空操作")
//     document.getElementById("after").value = null;
//     document.getElementById("after").focus();
//     document.getElementById("before").value = null;
  
// }


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

