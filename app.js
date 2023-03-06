const dropdown = () => {
    document.getElementById('myDropdown').classList.toggle('show')
    document.getElementById('companyInfo').classList.toggle('show')
    console.log('clicked')
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    } else if (!e.target.matches('.companybtn')) {
      var myDropdown = document.getElementById("companyInfo");
        if (myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
      }
  }

// window.onclick = function(e) {
//     if (!e.target.matches('.companybtn')) {
//     var myDropdown = document.getElementById("companyInfo");
//       if (myDropdown.classList.contains('show')) {
//         myDropdown.classList.remove('show');
//       }
//     }
//   }