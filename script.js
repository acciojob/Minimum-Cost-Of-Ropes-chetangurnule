function calculateMinCost() {
  //your code here
  var data = document.querySelector("#rope-lengths").value;
  var arr = data.split(",");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  var cost = 0;
	arr.sort(function(a,b){return a-b});
	while (arr.length > 1) {
    var newRope = arr[0] + arr[1];
    cost += newRope;
    arr.splice(0, 2);
    arr.push(newRope);
	  arr.sort(function(a,b){return a-b});
  }
  document.querySelector("#result").textContent = cost;
}