var resultado;
var ax,ay;
var x,y;
var mWidth,mHeight
var cont = 0
function setup() 
{
  createCanvas(windowWidth, windowHeight);  
  mWidth=windowWidth/2
  mHeight=windowHeight/2
}

function draw() 
{
	bresenham(0,0,windowWidth,windowHeight)
	bresenham(mWidth,0,mWidth,windowHeight)
	bresenham(windowWidth,0,0,windowHeight)
	bresenham(0,mHeight,windowWidth,mHeight)
  noLoop()
}

function bresenham(x1, y1, x2, y2) 
{
  if (cont<=4) {
    let dx=x2-x1
    let dy=y2-y1
  
    let limite
    if(Math.abs(dx)>Math.abs(dy))
      limite=Math.abs(dx)
    else
      limite=Math.abs(dy)
  
      let xi=dx/limite
      let yi=dy/limite
  
      let x=x1
      let y=y1
    
      for(let i=0;i<limite;i++)
      {
        point(x, y)
        x+=xi
        y+=yi
      }
      cont++;
  }

}