function stringMultiplicar(n) {
    var resultado = "";
    var salida;
    for(var i=1; i<=10; i++)
        {
            salida = n*i;
            resultado += n+"x"+ i +"=" + salida;
            if((i+1)<=10)
            {
                resultado +="/";
            }
        }
    return resultado;
}
