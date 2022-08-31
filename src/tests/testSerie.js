function serie(n)
{
    return triangular(n+4)/(fibonacci(n-2)*primo(n-1));
}

function triangular(n)
{
    return (n*(n+1))/2;
}

function fibonacci(n)
{
    if(n<=1)
        return n;
    else
        return fibonacci(n-1) + fibonacci(n-2);
}

function esPrimo(numero) {
    for(let i = 2, raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
}

function primo(n)
{
    var primos = []
    for (let x=0; x<=n; x++) {
        if (esPrimo(x))
        {
            primos.push(x);
        }
    }
    return primos[primos.length-1]
}

module.exports = serie;