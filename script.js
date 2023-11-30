var jsonObj = {};
var jsonViewer = new JSONViewer();
document.querySelector("#json").appendChild(jsonViewer.getContainer());

var textarea = document.querySelector("textarea");
textarea.value = JSON.stringify([
  {
    "ret": "0",
  }
]);

// textarea value to JSON object
var setJSON = function () {
  try {
    var value = textarea.value;
    jsonObj = JSON.parse(value);
  }
  catch (err) {
    alert(err);
  }
};

// load default value
setJSON();

var loadJsonBtn = document.querySelector("button.load-json");
var collapseBtn = document.querySelector("button.collapse");
var expandBtn = document.querySelector("button.expand");
var resetBtn = document.querySelector("button.reset");

loadJsonBtn.addEventListener("click", function () {
  setJSON();
  jsonViewer.showJSON(jsonObj);
});

collapseBtn.addEventListener("click", function () {
  jsonViewer.showJSON(jsonObj, null, 1);
});

expandBtn.addEventListener("click", function () {
  setJSON();
  jsonViewer.showJSON(jsonObj);
});

resetBtn.addEventListener("click", function () {
  document.getElementById("msg").value = "";
});