      let calcular=document.getElementById("calcular");
      calcular.addEventListener("click", calcular_);

      let reset=document.getElementById("reset");
      calcular.addEventListener("click", reset_);
      
      
      function calcular_(event){
      
         
         let capital=Number(document.getElementById("comecar_investir").value);
         // let investirMes=Number(document.getElementById("investir_mes").value);
         let tempo=Number(document.getElementById("quanto_tempo").value);
         let juros=Number(document.getElementById("rentabilidade").value);
         
         let taxa =  juros / 100


         let valorMontante = capital * (1 + taxa) ** tempo
         let valorFinal = (Math.trunc(valorMontante));
        
         console.log(`Valor do montante: ${valorFinal} Reais`);
       
      
      
         var text = document.getElementById('text');
         var table = '<table><thead><tr><td>Mes</td><td>Valor Inicial</td><td>Juros</td><td>Juros Totais</td><td>Valor Final</td></tr></thead>';
      
             for(i = 0; i < tempo + 1; i++){
                let valorJuros = (1 + taxa);
                let jurosFinais = valorJuros ** i;

                let jurosTabela = jurosFinais;
                

                let m1 = capital * (valorJuros) ** i

                let jurosTotais = m1 - capital;

                let valorFinal = m1


               
                 table += '<tr><td>'+(i)+'</td><td>'+capital+'</td><td>'+jurosTabela.toFixed(2)+'</td><td>'+jurosTotais.toFixed(2)+'</td><td>'+valorFinal.toFixed(2)+'</td></tr>'
             }

            
            
             table += '</tbody></table'
      
             text.innerHTML = table;
      
      
      }



      function reset_(){
        console.log('.....')
      }
