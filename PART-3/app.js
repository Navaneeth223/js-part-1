
let obj = {
   a: 100,
   fun: function(){
      console.log(this, "1");
      function inner(){
         console.log(this, "2");
      }
      inner();
   }
}

obj.fun();