function Raices(){
  var a = document.getElementById('A').value;
  var b = document.getElementById('B').value;
  var c = document.getElementById('C').value;
  var etqtexto=document.getElementById('texto');
  etqtexto.style="display:block";

  if (a=="" || b=="" || c=="" ) {
    etqtexto.innerHTML="Favor de ingresar numeros";
  }
  else if (a==0 && b==0 && c==0) {
    etqtexto.innerHTML="Favor de verificar que los numeros sean diferente de 0";
  }
  else if(a==0 && b!=0 && c==0) {
    etqtexto.innerHTML="A Y C no pueden ser 0";
  }
  else if(a==0 && b==0 && c!=0) {
    etqtexto.innerHTML="A Y B no pueden ser 0";
  }
  else if(a==0 && b!=0 && c!=0 ){
    etqtexto.innerHTML="Ya no seria una ecuación cuadrática";
  }
  else if (a!=0 && b==0 && c==0) {
    if (a==1) {
      //etqtexto.innerHTML="x<sup>2</sup> = 0";
      etqtexto.innerHTML='x^{2}';
    }
    else if (a==(-1)) {
      etqtexto.innerHTML="-x<sup>2</sup> = 0";
    }
    else {
      etqtexto.innerHTML=a+"x<sup>2</sup> = 0";
    }
  }
  else if (a!="" && b!="" && c!="") {
    //-b+raiz(b*b-4*a*c)/2*a
    var dis=Math.pow(b,2) - 4*a*c;
    if (dis==0) {
      var b1=b/2;

      if (b1<0) {
        etqtexto.innerHTML="Existe al menos una raiz <br> (x"+b1+")<sup>2</sup> = 0";
        //document.getElementById('resultados').innerHTML="(x+"+b+")<sup>2</sup> = 0";
      }
      else {
        etqtexto.innerHTML="Existe al menos una raiz <br> (x+"+b1+")<sup>2</sup> = 0";
        //document.getElementById('resultados').innerHTML="(x"+b+")<sup>2</sup> = 0";
      }

    }
    else if (dis>0) {
      var raizDis=Math.sqrt(dis);
      if (raizDis%1==0) {
        console.log("La raiz es exacta");
//        etqtexto.innerHTML="Existen dos raices";
        var numerador1=(-1)*b+raizDis;
        var numerador2=(-1)*b-raizDis;
        var denominador=2*a;
        var x1 =numerador1/denominador;
        var x2 =numerador2/denominador;

        var mcd=MCD(numerador1,denominador);
        var mcd2=MCD(numerador2,denominador);
        mcd = Math.abs(mcd);
        mcd2=Math.abs(mcd2);

        var numerador1aux=numerador1/mcd;
        var denominadoraux=denominador/mcd;
        var numerador2aux=numerador2/mcd2;
        var denominador2aux=denominador/mcd2;

        if (x1%1==0) {
          console.log("x1 es entero");
        }
        else {
          console.log("x1 no es entero");
          var x1='<div style="display:inline-block;">'+
                          '<div>'+
                            numerador1aux+
                          '</div>'+
                          '<div style="border-top:solid 1px black;text-align:center;">'+
                            denominadoraux+
                          '</div>'+
                    '</div>';
        }
        if(x2%1==0){
          console.log("x2 es entero");
        }
        else {
          console.log("x2 no es entero");
          var x2='<div style="display:inline-block;">'+
                          '<div>'+
                            numerador2aux+
                          '</div>'+
                          '<div style="border-top:solid 1px black;text-align:center;">'+
                            denominador2aux+
                          '</div>'+
                    '</div>';
        }
        etqtexto.innerHTML="Existen dos raices<br>"+"x<sub>1</sub> = "+x1+"<br>x<sub>2</sub> = "+x2;
        console.log("x1 = "+x1+" y x2 = "+x2);
      }
      else {
        console.log("La raiz no es exacta");
        var x1 = ((-1)*b)+"+&#8730;"+dis+"";
        var x2 = ((-1)*b)+"-&#8730;"+dis+"";
        var dosa=a*2;
        var x1aux='<div style="display:inline-block;">'+
                        '<div>'+
                          x1+
                        '</div>'+
                        '<div style="border-top:solid 1px black;text-align:center;">'+
                          dosa+
                        '</div>'+
                  '</div>';
        var x2aux='<div style="display:inline-block;">'+
                        '<div>'+
                          x2+
                        '</div>'+
                        '<div style="border-top:solid 1px black;text-align:center;">'+
                          dosa+
                        '</div>'+
                  '</div>';
        //etqtexto.innerHTML="Existen dos raices<br>"+"x1 = "+x1+"<br>x2 = "+x2;
        etqtexto.innerHTML="Existen dos raices<br>"+"x<sub>1</sub> = "+x1aux+"<br>x<sub>2</sub> = "+x2aux;
      }
    }
    else {
      //etqtexto.innerHTML="Raices imaginarias";
      dis = (-1)*dis;
      var raizDis=Math.sqrt(dis);
      if (raizDis%1==0) {
        console.log("Raiz exacta");
        b=(-1)*b;
        var im=raizDis+"i";
        var numerador1=b+"+"+im;
        var numerador2=b+"-"+im;
        var denominador=2*a;
        var x1='<div style="display:inline-block;">'+
                        '<div>'+
                          numerador1+
                        '</div>'+
                        '<div style="border-top:solid 1px black;text-align:center;">'+
                          denominador+
                        '</div>'+
                  '</div>';
        var x2='<div style="display:inline-block;">'+
                        '<div>'+
                          numerador2+
                        '</div>'+
                        '<div style="border-top:solid 1px black;text-align:center;">'+
                          denominador+
                        '</div>'+
                  '</div>';
      }
      else {
        console.log("Raiz no exacta");
        var x1 = ((-1)*b)+"+&#8730;"+dis+"i";
        var x2 = ((-1)*b)+"-&#8730;"+dis+"i";
        var dosa=a*2;
        var x1='<div style="display:inline-block;">'+
                        '<div>'+
                          x1+
                        '</div>'+
                        '<div style="border-top:solid 1px black;text-align:center;">'+
                          dosa+
                        '</div>'+
                  '</div>';
        var x2='<div style="display:inline-block;">'+
                        '<div>'+
                          x2+
                        '</div>'+
                        '<div style="border-top:solid 1px black;text-align:center;">'+
                          dosa+
                        '</div>'+
                  '</div>';
      }
      etqtexto.innerHTML="Raices imaginarias<br>"+"x<sub>1</sub> = "+x1+"<br>x<sub>2</sub> = "+x2;
    }
    console.log("Discriminante= "+dis);
  }

}
function Reset(){
  location.href="index.html";
}
function MCD(x,y){
  var resto=0;
  while (x%y!=0) {
    resto=x%y;
    x=y;
    y=resto;
  }
  return y;
}
function Factores1(){
  var a1=document.getElementById("a1").value;
  var b1=document.getElementById("b1").value;
  var etqtexto=document.getElementById('texto');
  etqtexto.style="display:block";
  var txt="";
  //var A=1;
  var B= parseInt(a1)+parseInt(b1);
  var C=a1*b1;

  if (a1=="" || b1=="") {
    etqtexto.innerHTML="Favor de ingresar numeros";
  }
  else {
    var x1=(-1)*a1;
    var x2=(-1)*b1;

    if (B>0) {
      if (C>0) {
        txt="x<sup>2</sup> + "+B+"x + "+C+" = 0";
      }
      else {
        txt="x<sup>2</sup> + "+B+"x "+C+" = 0";
      }
    }
    else if(B<0){
      if (C>0) {
        txt="x<sup>2</sup> "+B+"x + "+C+" = 0";
      }
      else {
        txt="x<sup>2</sup> "+B+"x "+C+" = 0";
      }
    }
    else {
      txt="x<sup>2</sup>"+C+" = 0";
    }

    etqtexto.innerHTML="x<sub>1</sub> = "+x1+"<br> x<sub>2</sub> = "+x2+"<br> Su forma desarrollada<br>"+txt;
  }
}
function Factores2(){
  var r1=document.getElementById('r1').value;
  var r2=document.getElementById('r2').value;
  var x1=document.getElementById("x1").value;
  var x2=document.getElementById("x2").value;


  var txt="";

  var A=r1*r2;
  var B=r1*x2+r2*x1;
  var C=x1*x2;

  var etqtexto=document.getElementById('texto');
  etqtexto.style="display:block";
  if (r1=="" || x1=="" || r2=="" || x2=="") {
    etqtexto.innerHTML="Favor de ingresar numeros";
  }
  else {
    var result1=x1/r1;
    var result2=x2/r2;
    result1=(-1)*(result1);
    result2=(-1)*(result2);

    if (result1%1==0) {
      console.log("Es entero");
    }
    else {
      console.log("No es entero");
      var mcd1 = MCD(x1,r1);
      var x1aux=x1/mcd1;
      var r1aux=r1/mcd1;
      if (r1aux<0 && x1aux>0){
        r1aux=(-1)*r1aux;
        x1aux=(-1)*x1aux;
      }
      else if (r1aux<0 && x1aux<0) {
        r1aux=(-1)*r1aux;
        x1aux=(-1)*x1aux;
      }
      else if(x1aux<0 && r1aux>0){
        r1aux=r1aux;
        x1aux=(-1)*x1aux;
      }
      result1='<div style="display:inline-block;">'+
                      '<div>'+
                        x1aux+
                      '</div>'+
                      '<div style="border-top:solid 1px black;text-align:center;">'+
                        r1aux+
                      '</div>'+
                '</div>';
    }
    if (result2%1==0) {
      console.log("Es entero");
    }
    else {
      console.log("No es entero");
      var mcd2 = MCD(x2,r2);
      var x2aux=x2/mcd2;
      var r2aux=r2/mcd2;
      result2='<div style="display:inline-block;">'+
                      '<div>'+
                        x2aux+
                      '</div>'+
                      '<div style="border-top:solid 1px black;text-align:center;">'+
                        r2aux+
                      '</div>'+
                '</div>';
    }
    if (B<0) {
      if (C>0) {
        if (A==1) {
          txt="x<sup>2</sup> "+B+"x +"+C+" = 0";
        }
        else if (A==-1) {
          txt="-x<sup>2</sup> "+B+"x +"+C+" = 0";
        }
        else {
          txt=A+"x<sup>2</sup> "+B+"x +"+C+" = 0";
        }
      }
      else {
        if (A==1) {
          txt="x<sup>2</sup> "+B+"x "+C+" = 0";
        }
        else if (A==-1) {
          txt="-x<sup>2</sup> "+B+"x "+C+" = 0";
        }
        else {
          txt=A+"x<sup>2</sup> "+B+"x "+C+" = 0";
        }
      }
    }
    else if(B>0){
      if (C>0) {
        if (A==1) {
          txt="x<sup>2</sup> +"+B+"x +"+C+" = 0";
        }
        else if (A==-1) {
          txt="-x<sup>2</sup> +"+B+"x +"+C+" = 0";
        }
        else {
          txt=A+"x<sup>2</sup> +"+B+"x +"+C+" = 0";
        }
      }
      else {
        if (A==1) {
          txt="x<sup>2</sup> +"+B+"x "+C+" = 0";
        }
        else if (A==-1) {
          txt="-x<sup>2</sup> +"+B+"x "+C+" = 0";
        }
        else {
          txt=A+"x<sup>2</sup> +"+B+"x "+C+" = 0";
        }
      }
    }
    else if(B==0){
      if (A==1) {
        if (C>0) {
          txt="x<sup>2</sup>+"+C+" = 0";
        }
        else {
          txt="x<sup>2</sup>"+C+" = 0";
        }
      }
      else if(A==-1){
        //txt='[2x^{2}]';
        if (C>0) {
          txt="-x<sup>2</sup>+"+C+" = 0";
        }
        else {
          txt="-x<sup>2</sup>"+C+" = 0";
        }
      }
      else {
        if (C>0) {
          txt=A+"x<sup>2</sup>+"+C+" = 0";
        }
        else {
          txt=A+"x<sup>2</sup>"+C+" = 0";
        }
      }
    }
    etqtexto.innerHTML="x<sub>1</sub> = "+result1+"<br> x<sub>2</sub> = "+result2
    +"<br> En su forma desarrollada<br>"+txt;
  }
}
