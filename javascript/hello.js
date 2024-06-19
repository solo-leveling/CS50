
function hello(){
    const heading = document.querySelector('h1');
    if(heading.innerHTML !== "Hello"){
        heading.innerHTML = "Hello";
    }else{
        heading.innerHTML = "Goodbye";
    }
}

document.addEventListener("DOMContentLoaded", function(){

    //disable button

        document.querySelector('#submit').disabled = true;
    document.querySelector('.name').onkeyup = ()=>{
        if(document.querySelector('.name').value.length > 0){
            document.querySelector('#submit').disabled = false; 
        }else{
            document.querySelector('#submit').disabled = true;        
        }
    };
    
    document.querySelector('form').onsubmit = function(){
        const name = document.querySelector('.name').value;
        const li = document.createElement('li');
        if(name !== ''){
            li.innerHTML = name;
            document.querySelector('#tasks').append(li);
        }
        
        // document.querySelector('p').innerHTML = name;
        document.querySelector('.name').value = "";
        document.querySelector('#submit').disabled = true;
        // alert(`Hello, ${name}`);
        return false;
    }
});