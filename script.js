const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  function myFunction() {
    const inp = document.getElementById("id1");
    console.log(inp)
    if (validateEmail(inp.value)) {
        document.getElementById("error").innerHTML = " ";
        inp.classList.add("input-err2");
    }
    else {
        document.getElementById("error").innerHTML = "Please provide a valid email address";
        inp.classList.add("input-err");
    }
  }