var tela = 0;
var instrucoes;
var menu;
var instrucoesparte2;
var creditos;
var fase1;
var menuy=265;
var menucont = 1;
var fasey=205;
var fasex=55;
var figura=1;
var planodefundo;
var triangulo;
var quadrado;
var retangulo; 
var circulo;
var fotohanna;
var fotovini;
var escolhido = 1;
var figura1 = false;
var figura2 = false;
var figura3 = false;
var figura4 = false;
var figura5 = false;
var figura6 = false;
var figura7 = false;
var figura8 = false;
var figura9 = false;
var figura10 = false;
var figura11 = false;
var figura12 = false;
var figura13 = false;
var figura14 = false;
var figura15 = false;
var figura16 = false;
var retangulo = false;
var triangulo = false;
var circulo = false;
var quadrado = false;

function setup() {
  createCanvas(500,500);
  imgtriangulo = loadImage("triângulo.png");
  imgcirculo = loadImage("círculo.png");
  imgretangulo = loadImage("retângulo.png");
  imgquadrado = loadImage("quadrado.png");
  imgfundo = loadImage("fundo.jpg");
  imgfotohanna = loadImage("fotohanna.jpg");
  imgfotovini = loadImage("fotovini.jpg");

}

function draw() {
  background(220);
  if(tela==0){
    menu();
  }
  if(tela==1){
    fase1();
  }
  if(tela==2){
    instrucoes();
  }
  if(tela==3){
    creditos();
  } 
  if(tela==4){
    instrucoesparte2();
  }
  if(tela == 'vitoria')
  {
    vitoria();
  }
}


function menu(){
  background(220);
  image(imgfundo,0,0);
  fill(0, 127, 255);
  rect(95,82,328,50,10);
  rect(20,260,180,160,10);
  fill(255,165,0);
  rect(25,menuy,170,50,50);
  textStyle(BOLD);
  fill(0,0,0);
  textSize(40); 
  text("Memory Graphic",100,120); 
  
  textSize(30);
  text("Jogar",30,300);
  text("Introdução",30,350);
  text("Créditos",30,400);
}

function instrucoes(){
  background(220);
  image(imgfundo,0,0);
  fill(0, 127, 255);
  rect(145,55,210,50,10);
  rect(50,140,400,90,10);
  rect(50,250,400,110,10);
  fill(255,165,0);
  rect(320,440,140,50,10);
  fill(0,0,0);
  textStyle(BOLD);
  textSize(40);
  text("Instruções",150,90);
  textSize(16);
  text("O público alvo deste jogo são crianças do 1° ano",60,170);
  text("do ensino fundamental correspondente a discipli-",60,190);
  text("na de matématica.",60,210);
  text("A habilidade é Identificar e nomear figuras planas",60,280);
  text("(círculo, quadrado, retângulo e triângulo) em dese-",60,300)
  text("nhos apresentados em diferentes disposições ou",60,320);
  text("em contorno de faces de sólidos geométricos.",60,340);
  text("Aperte direita",330,460);
  text("para seguir.",330,478);
}

function instrucoesparte2(){
  background(220);
  image(imgfundo,0,0);
  fill(0, 127, 255);
  rect(145,55,210,50,10);
  rect(50,140,400,190,10);
  fill(255,165,0);
  rect(320,440,140,50,10);
  fill(0,0,0);
  textStyle(BOLD);
  textSize(40);
  text("Instruções",150,90);
  textSize(18);
  text("Para jogar o jogo será necessário utilizar o",60,170);
  text("teclado, para isso, a tecla ESC retornará à",60,190);
  text("telas anteriores. Já a tecla ENTER fará você",60,210);
  text("selecionar a opção desejada. Assim como as",60,230)
  text("teclas que vão para a direita e para a esquer-",60,250);
  text("da, serão úteis para andar para esquerda ou",60,270);
  text("direita na seleção das cartas, bem como,",60,290);
  text("também, as teclas para cima e para baixo.",60,310);
  textSize(16);
  text("Aperte esquerda",330,460);
  text("para voltar.",330,478);
}

function creditos(){
  background(220);
  image(imgfundo,0,0);
  fill(0, 127, 255);
  rect(45,110,400,120,10);
  rect(45,260,400,120,10);
  rect(145,50,175,50,10);
  rect(240,465,255,30,10);
  fill(0,0,0);
  image(imgfotohanna,60,120);
  image(imgfotovini,60,270);
  textStyle(BOLD);
  textSize(40);
  text("Créditos",150,90);
  textSize(18);
  text("Lourrana Maria Silva Rodrigues.",130,140);
  text("Aluna de Bacharelado em Ciência",130,160);
  text("e Tecnologia.",130,180);
  text("Vinicius de Lima Silva",130,290);
  text("Aluno de Licenciatura em Física",130,310);
  textSize(15);
  text("Aperte ESC para voltar para menu.",245,485);
}

function fase1(){
  background(220);
  image(imgfundo,0,0);
  
  
  fill(0,255,0);
  rect(fasex,fasey,80,80,10);
  fill(255, 100, 0);
  rect(240,465,255,30,10);
  rect(60,210,70,70,20);
  rect(60,290,70,70,20);
  rect(160,210,70,70,20);
  rect(160,290,70,70,20);
  rect(260,210,70,70,20);
  rect(260,290,70,70,20);
  rect(360,210,70,70,20);
  rect(360,290,70,70,20);
  
  fill(0, 127, 255);
  rect(40,30,400,70,10);
  fill(0,0,0);
  textSize(18);
  textStyle(BOLD);
  text("Pressione enter para começar a jogar. Assim",50,50);
  text("que começar o jogo você terá 1 minuto para",50,70);
  text("encerrar o jogo.",50,90);
  textSize(15);
  text("Aperte ESC para voltar para menu.",245,485);
  textSize(45);
  
    if(figura1 == true){
      image(imgretangulo,55,218);
    } 
    if(figura2 == true){
      image(imgquadrado,163,218); 
    }  
    if(figura3 == true){
      image(imgcirculo,261,222); 
    }  
    if(figura4 == true){
      image(imgtriangulo,358,220); 
    }  
    if(figura5 == true){
      image(imgquadrado,61,298); 
    }  
    if(figura6 == true){
      image(imgcirculo,161,302); 
    }  
    if(figura7 == true){
      image(imgtriangulo,255,298); 
    }  
    if(figura8 == true){
      image(imgretangulo,355,298); 
    }    
    if(figura1 == false){
      text("?",80,260);
    } 
    if(figura2 == false){
      text("?",180,260);
    }  
    if(figura3 == false){
      text("?",280,260);
    }  
    if(figura4 == false){
      text("?",380,260);
    }  
    if(figura5 == false){
      text("?",80,340);
    }  
    if(figura6 == false){
      text("?",180,340);
    }  
    if(figura7 == false){
      text("?",280,340);
    }  
    if(figura8 == false){
      text("?",380,340);
    }    
}
function vitoria(){
 background(220);
 image(imgfundo,0,0);
 fill(255,165,0); 
 rect(60,150,380,100,10);
 rect(240,465,255,30,10); 
 fill(0,0,0);
 textStyle(BOLD); 
 textSize(33); 
 text("Parabéns você chegou",75,185); 
 text("ao final do jogo.",75,225);
 textSize(15);
 text("Aperte ESC para voltar para menu.",245,485); 
  
}

function keyPressed(){
  if(keyCode == UP_ARROW && menuy > 280 && tela==0){
    if(menu){
      menuy = menuy - 50; 
      menucont--
    }
  }
  if(keyCode == DOWN_ARROW && menuy < 360 && tela==0){
      menuy = menuy + 50; 
      menucont++
    }
  if(keyCode == ENTER && tela == 0){
      if(menucont == 1){
        tela = 1;
      }
      if(menucont == 2){
        tela = 2;
      } 
      if(menucont == 3){
        tela = 3;
      }
    }
  if(keyCode == ESCAPE){
      tela = 0;
      menucont = 1;
      menuy = 265;
      escolhido=3;
      figura1 = false;
      figura2 = false;
      figura3 = false;
      figura4 = false;
      figura5 = false;
      figura6 = false;
      figura7 = false;
      figura8 = false;
      triangulo = false;
      quadrado = false;
      circulo = false;
      retangulo = false;
    }
  if(keyCode == UP_ARROW && fasey > 220 && tela == 1){
      fasey = fasey - 80;
      figura = figura - 4;
     }
  if(keyCode == DOWN_ARROW && fasey < 280 && tela == 1){
      fasey = fasey + 80;
      figura = figura + 4
    }
  if(keyCode == LEFT_ARROW && fasex > 60 && tela == 1){
      fasex = fasex - 100;
      figura = figura - 1;
    }
  if(keyCode == RIGHT_ARROW && fasex < 350 && tela == 1){
      fasex = fasex + 100;
      figura = figura + 1;
    }
  if(keyCode == ENTER && tela == 1){
    if(escolhido == 1)
    {
      if(figura == 1 && figura1 == false)
      {
        figura1 = true;
        escolhido++;
      }
      else if(figura == 2 && figura2 == false)
      {
        figura2 = true;
        escolhido++;
      }
      else if(figura == 3 && figura3 == false)
      {
        figura3 = true;
        escolhido++;
      }
      else if(figura == 4 && figura4 == false)
      {
        figura4 = true;
        escolhido++;
      }
      else if(figura == 5 && figura5 == false)
      {
        figura5 = true;
        escolhido++;
      }
      else if(figura == 6 && figura6 == false)
      {
        figura6 = true;
        escolhido++;
      }
      else if(figura == 7 && figura7 == false)
      {
        figura7 = true;
        escolhido++;
      }
      else if(figura == 8 && figura8 == false)
      {
        figura8 = true;
        escolhido++;
      }
    }
    else if(escolhido == 2){
      if(figura == 1 && figura1 == false)
      {
        figura1 = true;
        escolhido++;
        if(figura1 == true && figura8 == true)
        {
          retangulo = true;
          escolhido=1;
        }
      }
      else if(figura == 2 && figura2 == false)
      {
        figura2 = true;
        escolhido++;
        if(figura2 == true && figura5 == true)
        {
          quadrado = true;
          escolhido=1;
        }
      }
      else if(figura == 3 && figura3 == false)
      {
        figura3 = true;
        escolhido++;
        if(figura3 == true && figura6 == true)
        {
          circulo = true;
          escolhido=1;
        }
      }
      else if(figura == 4 && figura4 == false)
      {
        figura4 = true;
        escolhido++;
        if(figura4 == true && figura7 == true)
        {
          triangulo = true;
          escolhido=1;
        }
      }
      else if(figura == 5 && figura5 == false)
      {
        figura5 = true;
        escolhido++;
        if(figura2 == true && figura5 == true)
        {
          quadrado = true;
          escolhido=1;
        }
      }
      else if(figura == 6 && figura6 == false)
      {
        figura6 = true;
        escolhido++;
        if(figura3 == true && figura6 == true)
        {
          circulo = true;
          escolhido=1;
        }
      }
      else if(figura == 7 && figura7 == false)
      {
        figura7 = true;
        escolhido++;
        if(figura4 == true && figura7 == true)
        {
          triangulo = true;
          escolhido=1;
        }
      }
      else if(figura == 8 && figura8 == false)
      {
        figura8 = true;
        escolhido++;
        if(figura1 == true && figura8 == true)
        {
          retangulo = true;
          escolhido=1;
        }
      }
      if(retangulo == true && circulo == true && quadrado == true && triangulo == true)
      {
        tela = 'vitoria';  
      }
    } 
    else if(escolhido == 3)
    {
      if(retangulo == false)
      {
        figura1 = false;
        figura8 = false;
      }
      if(circulo == false)
      {
        figura6 = false;
        figura3 = false; 
      }
      if(triangulo == false)
      {
        figura4 = false;
        figura7 = false;
      }
      if(quadrado == false)
      {
        figura5 = false;
        figura2 = false;
      }
       escolhido = 1;
      }
    }    
  
     if(keyCode == RIGHT_ARROW && tela == 2){
    tela = 4;
  }
     if(keyCode == LEFT_ARROW && tela == 4){
    tela = 2;
  }
}


