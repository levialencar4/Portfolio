function correr (){
    var ni = document.getElementById('inicio')
    var nf = document.getElementById('fim')
    var np = document.getElementById('passo')
    var numeroInicio = Number(ni.value)
    var numeroFim = Number(nf.value)
    var numeroPasso = Number(np.value)
    var res = document.getElementById('resu')

    if(numeroInicio == 0 || numeroFim == 0 || numeroPasso == 0 ){
        alert('0 is not valid')
    }else {
        if (numeroInicio < numeroFim){

        
        res.innerHTML = 'Counting: '
        for (var c = numeroInicio; c <= numeroFim; c += numeroPasso){
            res.innerHTML += `${c} \u{1f449}`
            
        }
        res.innerHTML += '\u{1f9e0}'
        }else {
            

        }
    }
    
}