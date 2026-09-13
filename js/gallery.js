function upDate(previewPic) {
    console.log("upDate works!");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    var imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    console.log("unDo works!");

    var imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}