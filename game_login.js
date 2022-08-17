function login(){
    p1name=document.getElementById("playyer1name").value
    p2name=document.getElementById("playyer2name").value
    localStorage.setItem("p1p1p.key",p1name)
    localStorage.setItem("p2p2p.key",p2name)
    window.location="game_page.html"
}
