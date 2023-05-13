function calculateMinCost() {
    //your code here
    let ropes = document.querySelector("#rope-lengths").value;
    let result = document.querySelector("#result");
      let arr = ropes.split(", ");
      let sum = 0;
      while(arr.length > 1){
        arr.sort((a, b)=> a-b);
        let a = arr.shift();
        let b = arr.shift();
        let c = +a + +b;
        sum += c;
        arr.push(c);
      }
      result.textContent = `The minimum cost of ropes ${sum}`;
  } 