var d, h, m, s, clock,color;

function data()
{
   d = new Date();
   h = d.getHours();
   m = d.getMinutes();
   s= d.getSeconds();

if (h > 12)
{
    h = h - 12;
}

if (h <= 9)
{
    h = '0' + h;
}

if (m <= 9)
{
    m = '0' + m;
}

if (s <= 9)
{
    s = '0' + s;
}

clock = h + ":" + m + ":" + s;
color = "#" + h + m + s;

document.getElementById("clock").innerHTML = clock;

document.body.style.background = color;

setTimeout(data, 1000);

}

data();