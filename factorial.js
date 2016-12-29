function factorial(n) {
    
    if(n>0){
        var factorial = 1;
    
        for(var i=1; i<=n; i++)
        {
            factorial = factorial*i;
        }
        return factorial;
    }
    else
        return null;
    
}