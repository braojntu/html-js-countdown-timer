// Count Down Timer : Call Back Hell without Loops, Recursion
function timer() {
  setTimeout(() => {
    document.getElementById("result").innerHTML = 10;
    setTimeout(() => {
      document.getElementById("result").innerHTML = 9;
      setTimeout(() => {
        document.getElementById("result").innerHTML = 8;
        setTimeout(() => {
          document.getElementById("result").innerHTML = 7;
          setTimeout(() => {
            document.getElementById("result").innerHTML = 6;
            setTimeout(() => {
              document.getElementById("result").innerHTML = 5;
              setTimeout(() => {
                document.getElementById("result").innerHTML = 4;
                setTimeout(() => {
                  document.getElementById("result").innerHTML = 3;
                  setTimeout(() => {
                    document.getElementById("result").innerHTML = 2;
                    setTimeout(() => {
                      document.getElementById("result").innerHTML = 1;
                      setTimeout(() => {
                        document.getElementById("result").innerHTML =
                          "Happy Independence Day !!!";
                      }, 1100);
                    }, 1000);
                  }, 900);
                }, 800);
              }, 700);
            }, 600);
          }, 500);
        }, 400);
      }, 300);
    }, 200);
  }, 100);
}
