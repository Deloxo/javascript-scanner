<button onclick="startScan()"> Start Object Scan </button>
<button id="outputScan">Save File</button>
<script>

var beamLength = 0.7;
var beamZ = 0;
var beamX = 0;
var resolution;
var radius = 1;
var vertexX;
var vertexY;
var vertexZ;


function homeBeam() {
setInterval(function () {
   if (beamX > 0 && beamZ > 0) {
     beamX -= 2;
   }
   if (beamX <= 0 && beamZ > 0) {
     beamZ -= 2;
     beamX = 0;
   }
 }, 20);


 console.log("Beam homed");
}


 function round(value, decimals) {
   return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
 }

var textFile;

function detect() {
  var ring = [];
  ring.push(beamLength);

  vertexX = (radius - beamLength) * Math.sin(beamX);
  vertexY = (radius - beamLength) * Math.cos(beamX);
  vertexZ = (radius - beamLength) * Math.sin(beamZ);


  textFile = textFile + "v " + round(vertexX, 4) + " " + round(vertexY, 4) + " " + round(vertexZ, 4) + "\n";
  var fileBlob = new Blob([textFile], {type: "text/plain"});

  var link = document.getElementById("outputScan");var beamLength = 0.7;
var beamZ = 0;
var beamX = 0;
var radius = 1;
var vertexX;
var vertexY;
var vertexZ;
var layernumber = 1;
var vertexnumber = 1;
var textFile = "# start of code\ng layer0\n";


function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function detect() {

    vertexX = (radius - beamLength) * Math.sin(beamX * Math.PI / 180);
    vertexY = (radius - beamLength) * Math.cos(beamX * Math.PI / 180);
    vertexZ = (radius - beamLength) * Math.sin(beamZ * Math.PI / 180);


    textFile = textFile + "v " + round(vertexX, 4) + " " + round(vertexY, 4) + " " + round(vertexZ, 4) + "\nf " + vertexnumber + " " + (vertexnumber + 1) + " " + ((vertexnumber) + layernumber * 36) + " " + ((vertexnumber + 1) + (layernumber * 36)) + "\n";

    var fileBlob = new Blob([textFile], {type: "text/plain"});
    var link = document.getElementsByTagName("a")[0];
    link.setAttribute("href", URL.createObjectURL(fileBlob));
    link.setAttribute("download", "hemisphere.obj");
}

var errorFalse = 0;

function startScan() {
    console.log("Scan started");
    setInterval(function() {
      if (errorFalse == 0) {
        detect();
        beamX += 10;
        vertexnumber += 1;
        if (beamX == 360 && beamZ < 90) {
            beamX = 0;
            beamZ += 10;
            layernumber += 1;
            textFile = textFile + "\n g layer" + layernumber + "\n";
        }
        console.log("no errors detected");
      }
    }, 1);
}

function stopScan() {
  errorFalse = 1;

}
  link.setAttribute("href", URL.createObjectURL(fileBlob));
  link.setAttribute("download", "crudesphere.obj");
  document.body.appendChild(link);
}

function startScan() {
  console.log("Scan started");
  setInterval(function () {
    detect();
    beamX += 10;
    if (beamX == 360 && beamZ < 90) {
      beamX = 0;
      beamZ += 10;
    }
    if (beamZ == 90 && beamX == 360) {
      console.log(textFile);
    }

      console.log("no errors detected");
  }, 10);
}

var text = "foo\nbar\nbaz";


</script>
