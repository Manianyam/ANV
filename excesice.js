 let todo=[];
 
    function myFunction(){
      const a=document.querySelector('#todo');
      let b=a.value;
      if (b===""){
        return
      }
      todo.push(b);
      a.value="";
       loop();
       console.log(todo);
    }
   function loop(){
       let index="";
       for (let i = 0 ; i < todo.length; i++){       
         index += "<li>" + todo[i]+ 
           "<button onclick=' del(" + i + ")';> X</button><input type='checkbox' onclick='check(this," + i + ")'><span class='para'></span></input></li>";
       }
        document.getElementById('line').innerHTML=index;
    }

   function del(i){
    todo.splice(i,1);
   loop();
    
   }
   function clears(){
     todo = [];
     loop();
   }
   function check(element,i){
    let a='';
    
    if (element.checked){
      a +=todo[i];
      document.getElementById('completed').innerHTML += "<li>" + a + "</li>";
      del(i);
    }
   }
