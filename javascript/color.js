document.addEventListener('DOMContentLoaded', ()=>{
    // document.querySelector('#red').onclick= function() {
    //     document.querySelector('#hello').style.color = 'red'
    // }
    
    // document.querySelector('#green').onclick= function() {
    //     document.querySelector('#hello').style.color = 'green'
    // }
    
    // document.querySelector('#blue').onclick= function() {
    //     document.querySelector('#hello').style.color = 'blue'
    // }
    
    // document.querySelectorAll('button').forEach(function(button){
    //     button.onclick = ()=>{
    //         document.querySelector('#hello').style.color = button.dataset.color;
    //     }
    // });

    document.querySelector('select').onchange = function() {
        document.querySelector('#hello').style.color = this.value;
    }

});


