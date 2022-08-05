import { useState,useEffect } from "react";

      
const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        // console.log('use effect ran');
        // console.log(name);
        const abortCont= new AbortController();
        setTimeout(()=>{
            fetch(url,{signal:abortCont.signal})
           .then(res=>{
               console.log(res);
               if(!res.ok){
                   throw Error('could not fetch data from source');
               }
             return res.json();
             })
           .then(data=>{
            console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
            })
            .catch(err=>{
            //    console.log(err.message);
            if(err.name==='AbortError'){
                console.log('fetch aborted')
            }else{
                setError(err.message);
                setIsPending(false);
            }
           
            });
        },1000);
        return ()=> abortCont.abort(); 
    },[url]);
    return { data,isPending,error}
}


export default useFetch
