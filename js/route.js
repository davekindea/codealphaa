const route=(event)=>{
    event=event|| window.event;
    event.preventdefualt()
    window.history.pushState({},"",event.target.href);

}
const routes={
    "/":"age.html",
    "/calc":"calculat.html"
}
const handlelocation=async()=>{
    const path=window.location.pathname;
    

}
window.route=route;