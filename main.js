function comprar(){
    const width = 800;
    const height = 600;
    const left = (Screen.width/2) - (width/2);
    const top = (screen.height/2) - (height/2);
    window.open(`pagamento.html` ,`Pagamento`, `width=$(width), height=$(height), top=$(top), left=$(left)`) ;}