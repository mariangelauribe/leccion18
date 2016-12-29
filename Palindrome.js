function casiPalindrome(palabra) {
    var cantidad = palabra.length;
    var Palindrome;
    var contador=0;
    
    for(var i=0, j=cantidad-1; i<cantidad/2, j>cantidad/2; i++, j--)
    {
        if(palabra[i] != palabra[j])
        {
            contador++;
        }
    }
    if(contador<=2)
    {
        Palindrome =true;
    }
    else
    {
        Palindrome =false;
    }
    return Palindrome;
}