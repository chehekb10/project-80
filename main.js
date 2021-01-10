var i=0;
var images =["i1.jpg","i2.jpg","i3.jpg","i4.jpg","i5.jpg","i6.jpg"];
var names =["My Father", "My Mother", "Myself", "My younger sister", "My Grandfather", "My GrandMother"];

function nextslide()
{
  document.getElementById("img1").src = images[i];
  document.getElementById("hd").innerHTML = names[i];
  i++;
  if(i==6)
  {
    i=0;
  }
}

