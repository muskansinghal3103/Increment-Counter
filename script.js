const counters=document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    counter.innerHTML=0;

    const updatecounter=()=>{
        const target= +counter.getAttribute('data-target');//to convert target of string type into number data type


        const startingcount = Number(counter.innerHTML);
        const incr=target/100;

        if(startingcount<target){
            counter.innerHTML=`${Math.round(startingcount+incr)}`;
            setTimeout(updatecounter,10);
        }
        else{
            counter.innerHTML=target;
        }
    }

    updatecounter();

})