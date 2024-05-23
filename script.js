let flag = false;
let runner;
let i =  1;
let arr=[];
let wrong  = 0;
let right = 0;
let minute = document.querySelector('#minute');
let second = document.querySelector('#second');
let startbtn = document.querySelector('#new');
let pausebtn = document.querySelector('#pause');
let input = document.querySelector('#input');
let parainput = document.querySelector('#para-input');
let temp = document.querySelector('#paragraph').textContent.split(' ');

let output = document.getElementById('output');

temp.forEach(Element=>{
   if(Element != "")
      arr.push(Element);
   });

output.textContent = arr[i];
input.addEventListener('keydown', function(event) {
   if(pausebtn.textContent == 'RESUME'){
      stoper();
   }
   else if(!flag)
      helper();

   if (event.keyCode === 32) {  
      let t = new String(input.value);
      let str = t.trim(' ');
      console.log(str)
      if(str != arr[i++]) {
         wrong++;
         alert(' not matched');
      }
      else
         right++;
            
      input.value="";
      output.textContent = arr[i];
   }
 });

function helper() {

   if( !flag && pausebtn.textContent != "RESUME") {
      flag =  true;
      startbtn.textContent = "NEW";

      if(second.textContent == 0 && minute.textContent == 0){
         second.textContent = 10;
         minute.textContent = 0;
         input.style.display = 'inline';
         set();
      }

      runner = setInterval(()=>{
         if(second.textContent == 0 && minute.textContent == 0) {
            clearInterval(runner);
            startbtn.textContent="START";
            input.style.display = 'none';
            alert('Right words ' + right +' wrong word ' + wrong );
            set();
            flag = false;

         }
         else if(second.textContent == 0){
               second.textContent = 60;
               minute.textContent -= 1;
            }
         else 
            second.textContent -= 1;
      },1000);
   }
   else if(pausebtn.textContent == "RESUME") {
         pausebtn.textContent = "PAUSE";
         minute.textContent = 0;
         second.textContent = 50;
         set();
         helper();
   }
   else if(flag){
      minute.textContent = 0;
      second.textContent = 50;
      set();
      helper();
      
   }
}
function set(){
      i = 1;
      right = wrong = 0;
      output.textContent = arr[i];
      input.value="";
}
function stoper(){
   if( flag ) {
      clearInterval(runner);
      pausebtn.textContent = "RESUME";
      flag = false;
   }
   else if( pausebtn.textContent == "RESUME"){
         pausebtn.textContent = "PAUSE";
         helper();
   }
}

startbtn.addEventListener('click',helper);
pausebtn.addEventListener('click',stoper)





