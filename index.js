// getting variables from html
const tab1 = document.getElementById("mytab1");
const tab2 = document.getElementById("mytab2");
const tab3 = document.getElementById("mytab3");

const onPress = document.getElementById("btn");

// createSeating function is called when onPress event triggers
function createSeating() {
  // first three maps resets the value of seating arrangments to blank
  tab1data.map((ele) => {
    ele.innerText = "";
  });

  tab2data.map((ele) => {
    ele.innerText = "";
  });

  tab3data.map((ele) => {
    ele.innerText = "";
  });

  //getting value from the input
  let numOfPass = document.getElementById("count");
  let num = numOfPass.value;

  //conditional checks for error handling
  if (num % 1 != 0) {
    notification("Value must be in Integer");
  } else if (num < 11) {
    notification("Minimum Passengers required: 11");
  } else if (num > 200) {
    notification("Maximum Passenger limit: 200");
  } else if (num == null) {
    notification("Could not recognize the value");
  }

  //performing logic to arrange seating aligment
  if (num >= 11 && num <= 200) {
    let arr2 = [];
    let arr3 = [];
    let k = 0;
    let myarr1 = [];
    let myarr2 = [];
    let myarr3 = [];

    let arr = [5, 1, 7, 8, 2, 3, 9, 10, 4, 6];
    let div = Math.floor(num / 10);
    let mod = num % 10;

    for (let i = 0; i < div; i++) {
      for (let j = 0; j < arr.length; j++) {
        arr2.push(k + arr[j]);
      }
      k += 10;
    }
    if (mod) {
      for (let m = 0; m < arr.length; m++) {
        if (k + arr[m] <= num) {
          arr3.push(k + arr[m]);
        } else {
          arr3.push(" ");
        }
      }
    }
    let myarr = [...arr2, ...arr3];
    for (let n = 0; n < myarr.length; n++) {
      if (n % 10 == 0 || n % 10 == 1 || n % 10 == 2) myarr1.push(myarr[n]);
      else if (n % 10 == 7 || n % 10 == 8 || n % 10 == 9) myarr3.push(myarr[n]);
      else myarr2.push(myarr[n]);
    }

    tab1data.map((ele, i) => {
      if (i < myarr1.length) {
        ele.innerText = myarr1[i];
      }
    });

    tab2data.map((ele, i) => {
      if (i < myarr2.length) {
        ele.innerText = myarr2[i];
      }
    });

    tab3data.map((ele, i) => {
      if (i < myarr3.length) {
        ele.innerText = myarr3[i];
      }
    });
  }
}

// createTable helps ups to create table for all 200 passengers by setting each with specific attribute
function createTable(tableN, rows, cols) {
  for (let i = 0; i < rows; i++) {
    const trow = document.createElement("tr");
    trow.setAttribute("class", "trow");
    let count = 0;
    for (let j = 0; j < cols; j++) {
      const tdata = document.createElement("td");
      if (count == 0) {
        tableN != tab1
          ? tdata.setAttribute("class", "edge")
          : tdata.setAttribute("class", "window");
      } else if (count == 1) {
        tdata.setAttribute("class", "middle");
      } else if (count == 2) {
        tableN == tab1
          ? tdata.setAttribute("class", "edge")
          : tableN == tab3
          ? tdata.setAttribute("class", "window")
          : tdata.setAttribute("class", "middle");
      } else {
        tdata.setAttribute("class", "edge");
      }
      trow.append(tdata);
      count++;
    }
    tableN.append(trow);
  }
}

// functional call for creating table
createTable(tab1, 20, 3);
createTable(tab2, 20, 4);
createTable(tab3, 20, 3);

const tab1data = Array.from(tab1.getElementsByTagName("td"));
const tab2data = Array.from(tab2.getElementsByTagName("td"));
const tab3data = Array.from(tab3.getElementsByTagName("td"));

//event handler call for seating arrangement

onPress.addEventListener("click", () => createSeating());

//Notification function

function notification(val) {
  const messageC = document.getElementById("message");
  const pops = document.getElementById("notify");
  tab1data.map((ele) => {
    ele.innerText = "";
  });

  tab2data.map((ele) => {
    ele.innerText = "";
  });

  tab3data.map((ele) => {
    ele.innerText = "";
  });
  messageC.innerHTML = val;
  pops.style.visibility = "visible";
  setInterval(() => {
    pops.style.visibility = "hidden";
  }, 4000);
}
