function enlarge(element) {
  // Görseli büyüt
  var enlargedContainer = document.getElementById("enlargedContainer");
  var enlargedImg = document.getElementById("enlargedImg");

  // Görseli genişletmek için kaynağı ayarla
  enlargedImg.src = element.src;

  // Büyütülmüş konteyneri görünür yap
  enlargedContainer.style.visibility = "visible";
}

function shrink() {
  // Görseli küçült
  var enlargedContainer = document.getElementById("enlargedContainer");

  // Büyütülmüş konteyneri gizle
  enlargedContainer.style.visibility = "hidden";
}

// Görsel büyütme işlevini çağırmak için kullanıcının tıklamasını dinle
document.getElementById("enlargedContainer").addEventListener("click", shrink);
