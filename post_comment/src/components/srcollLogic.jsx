export const Logic=(visible,setVisible)=>{
    window.addEventListener('scroll',()=>{
        const scrollable=document.documentElement.scrollHeight-window.innerHeight
        const scrolly=window.scrollY
        if(scrollable==scrolly){
          setVisible(visible+20)
        }
       })
}