let code = document.getElementById('código')
let info = document.getElementById('information')

/////Variáveis declaradas acima/////

/////Início do Fetch do JSON/////
var urlGeral ='https://json-server-dydyo.vercel.app/geral'
var urlStatus ='https://json-server-dydyo.vercel.app/status'
/////Fim do Fetch do JSON/////

function verificar(){
    if(code.value >= 0){
        window.alert('Código inserido com sucesso!')
        fetch(urlGeral)
            .then(req => req.json())
            .then(urlGeral => {
                if(urlGeral[code.value].QTDE > 0){
                    info.innerHTML = `<p>Segue as informações do produto ${urlGeral[code.value].PRODUTO} abaixo:</p>
                    <p><strong>Alerta!</strong> O formato de data está em: mês/dia/ano!
                    <p>Neste único lote, existem ${urlGeral[code.value].QTDE} até o dia ${urlGeral[code.value].VENC1}.</p>`
                }

                if(urlGeral[code.value].QTDE > 0 && urlGeral[code.value].QTDE2 > 0){
                    info.innerHTML = `<p>Segue as informações do produto ${urlGeral[code.value].PRODUTO} abaixo:</p>
                    <p><strong>Alerta!</strong> O formato de data está em: mês/dia/ano!
                    <p>No primeiro lote, existem ${urlGeral[code.value].QTDE} até o dia ${urlGeral[code.value].VENC1}.</p>
                    <p>No segundo lote, existem ${urlGeral[code.value].QTDE2} até o dia ${urlGeral[code.value].VENC2}.</p>
                    <p>Totalizando um total de ${urlGeral[code.value].QTDETOTAL} unidades deste produto.`
                }
                
                if(urlGeral[code.value].QTDE > 0 && urlGeral[code.value].QTDE2 > 0 && urlGeral[code.value].QTDE3 > 0){
                    info.innerHTML = `<p>Segue as informações do produto ${urlGeral[code.value].PRODUTO} abaixo:</p>
                    <p><strong>Alerta!</strong> O formato de data está em: mês/dia/ano!
                    <p>No primeiro lote, existem ${urlGeral[code.value].QTDE} até o dia ${urlGeral[code.value].VENC1}.</p>
                    <p>No segundo lote, existem ${urlGeral[code.value].QTDE2} até o dia ${urlGeral[code.value].VENC2}.</p>
                    <p>No terceiro lote, existem ${urlGeral[code.value].QTDE3} até o dia ${urlGeral[code.value].VENC3}.</p>
                    <p>Totalizando um total de ${urlGeral[code.value].QTDETOTAL} unidades deste produto.`
                }

                if(urlGeral[code.value].QTDE > 0 && urlGeral[code.value].QTDE2 > 0 && urlGeral[code.value].QTDE3 > 0 && urlGeral[code.value].QTDE4 > 0){
                    info.innerHTML = `<p>Segue as informações do produto ${urlGeral[code.value].PRODUTO} abaixo:</p>
                    <p><strong>Alerta!</strong> O formato de data está em: mês/dia/ano!
                    <p>No primeiro lote, existem ${urlGeral[code.value].QTDE} até o dia ${urlGeral[code.value].VENC1}.</p>
                    <p>No segundo lote, existem ${urlGeral[code.value].QTDE2} até o dia ${urlGeral[code.value].VENC2}.</p>
                    <p>No terceiro lote, existem ${urlGeral[code.value].QTDE3} até o dia ${urlGeral[code.value].VENC3}.</p>
                    <p>No quarto lote, existem ${urlGeral[code.value].QTDE4} até o dia ${urlGeral[code.value].VENC4}.</p>
                    <p>Totalizando um total de ${urlGeral[code.value].QTDETOTAL} unidades deste produto.`
                } 

                if(urlGeral[code.value].QTDE > 0 && urlGeral[code.value].QTDE2 > 0 && urlGeral[code.value].QTDE3 > 0 && urlGeral[code.value].QTDE4 > 0 && urlGeral[code.value].QTDE5 > 0){
                    info.innerHTML = `<p>Segue as informações do produto ${urlGeral[code.value].PRODUTO} abaixo:</p>
                    <p><strong>Alerta!</strong> O formato de data está em: mês/dia/ano!
                    <p>No primeiro lote, existem ${urlGeral[code.value].QTDE} até o dia ${urlGeral[code.value].VENC1}.</p>
                    <p>No segundo lote, existem ${urlGeral[code.value].QTDE2} até o dia ${urlGeral[code.value].VENC2}.</p>
                    <p>No terceiro lote, existem ${urlGeral[code.value].QTDE3} até o dia ${urlGeral[code.value].VENC3}.</p>
                    <p>No quarto lote, existem ${urlGeral[code.value].QTDE4} até o dia ${urlGeral[code.value].VENC4}.</p>
                    <p>No quinto lote, existem ${urlGeral[code.value].QTDE5} até o dia ${urlGeral[code.value].VENC5}.</p>
                    <p>Totalizando um total de ${urlGeral[code.value].QTDETOTAL} unidades deste produto.`
                }

                if(urlGeral[code.value].QTDE === 0 && urlGeral[code.value].QTDE2 === 0 && urlGeral[code.value].QTDE3 === 0 && urlGeral[code.value].QTDE4 === 0 && urlGeral[code.value].QTDE5 === 0){
                    info.innerHTML = `${urlGeral[code.value.PRODUTO]} não disponível no estoque`
                }



            })       
    } 
}
