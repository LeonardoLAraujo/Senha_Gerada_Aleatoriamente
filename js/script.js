function btn_gerar(){

    document.write("<link rel='stylesheet' href='css/style.css'>");

    const senha = Math.random().toString(36).substr(2);

    document.write(`<h1>Senha Gerada Aleatoriamente: ${senha} </h1>`);

    document.write("<center><a href='index.html'>Gerar uma outra Senha</a></center>")
}