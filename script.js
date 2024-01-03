String.prototype.reverse = function(){
  return this.split('').reverse().join(''); 
};


//mascara campo valor
function mascaraMoeda(campo){
  var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
  var resultado  = "";
  var mascara = "###.###,##".reverse();
  for (var x=0, y=0; x<mascara.length && y<valor.length;) {
    if (mascara.charAt(x) != '#') {
      resultado += mascara.charAt(x);
      x++;
    } else {
      resultado += valor.charAt(y);
      y++;
      x++;
    }
  }
  campo.value = "R$ " + resultado.reverse();
}



//pegando itens
let itens = [];

function salvarItem() {
  item = document.getElementById('item').value;
  valor = document.getElementById('campo').value;
  qtde = document.getElementById('quantidade').value;

let objItem = {
  item: item,
  valor: valor,
  qtde: qtde,
  totalItem: valor * qtde
}

itens.push(objItem);

document.getElementById('item').value = "";
document.getElementById('campo').value = "";
document.getElementById('quantidade').value = "";
console.log(itens);
console.log(valor);
};





