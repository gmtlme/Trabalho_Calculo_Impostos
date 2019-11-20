function calc(){

    let nome = document.getElementById("nome").value;
    let salarioBruto = document.getElementById("salario").value;
    let table = document.getElementById("table")
    let tablemobile = document.getElementById("tablemobile")
    let porcentagemInss;
    let descontoINSS;
    let porcentagemIRPF;
    let descontoIRPF;
    let salarioFinal;
    let salarioDescontado;
  
   let row = table.insertRow(1);
   let rowmobile = tablemobile.insertRow(1);
   let cell1 = row.insertCell(0);
   let cell1mobile = rowmobile.insertCell(0);
   let cell2 = row.insertCell(1);
   let cell2mobile = rowmobile.insertCell(1);
   let cell3 = row.insertCell(2);
   let cell4 = row.insertCell(3);
   let cell5 = row.insertCell(4);
   let cell6 = row.insertCell(5);
   let cell7 = row.insertCell(6);

    if(salarioBruto <= 1751.81){
     porcentagemInss = 8;
     descontoINSS = salarioBruto * 8 / 100
     salarioDescontado = salarioBruto - ((salarioBruto * 8) / 100)

    }
    else if(salarioBruto >= 1751.82 && salarioBruto <= 2912.72){
    
        porcentagemInss = 9;
        descontoINSS = salarioBruto * 8 / 100
        salarioDescontado = salarioBruto - ((salarioBruto * 9) / 100)
        
    }
    else if(salarioBruto >= 2919.73 && salarioBruto <= 5839.45){

        porcentagemInss = 11;
        descontoINSS = salarioBruto * 8 / 100
        salarioDescontado = salarioBruto - ((salarioBruto * 11) / 100)   
    }
    else{
        porcentagemInss = 0;
        descontoINSS = 0;
        salarioDescontado = salarioBruto;
    }

    if(salarioBruto <= 1903.98){

        porcentagemIRPF = 0;
        descontoIRPF = 0;
        salarioDescontado += salarioBruto;

    }
    else if(salarioBruto >= 1903.99 && salarioBruto <= 2826.65){

        porcentagemIRPF = 7.5;
        descontoIRPF = 142.80;
        salarioDescontado -= 142.80;

    }
    else if(salarioBruto >= 2826.66 && salarioBruto <= 3751.05){


        porcentagemIRPF = 15;
        descontoIRPF = 354.80;
        salarioDescontado -= 354.80;

    }
    else if(salarioBruto >= 3751.06 && salarioBruto <= 4664.68){

        porcentagemIRPF = 22.5;
        descontoIRPF = 636.13;
        salarioDescontado -= 636.13;
    }
    else{

        porcentagemIRPF = 27.5;
        descontoIRPF = 869.36;
        salarioDescontado -= 869.36;

    }

    salarioFinal = salarioDescontado;
    salarioDescontado = parseFloat(salarioDescontado.toFixed(2));
    salarioFinal = parseFloat(salarioFinal.toFixed(2));

   cell1.innerHTML = `${nome}`;
   cell1mobile.innerHTML = `${nome}`;
   cell2.innerHTML = `R$ ${salarioBruto}`;
   cell3.innerHTML = `${porcentagemInss}%`;
   cell4.innerHTML = `R$ ${descontoINSS}`;
   cell5.innerHTML = `${porcentagemIRPF}%`;
   cell6.innerHTML = `R$ ${descontoIRPF}`;
   cell7.innerHTML = `R$ ${salarioFinal}`;
   cell2mobile.innerHTML = `R$${salarioFinal}`;
    
    

}