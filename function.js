document.getElementById('form2').hidden = true;
function calmessage() {
    let selection1 = confirm('Are you sure to check status?');
    if (selection1 == true) {
        document.getElementById('form1').hidden = true;
        document.getElementById('form2').hidden = false;
        var studname = document.getElementById("name").value;
        var nofather1 = document.getElementById("nofather");
        var nomother = document.getElementById("nomother");
        var b40 = 100;

        if (studname) {
            document.getElementById("displayname").innerHTML = studname;

            if (document.getElementById("c1").checked == true) {
                document.getElementById("category").innerHTML = "B40";
                if (nomother.checked == true && nofather1.checked == false) {
                    var nomom = b40 + 300;
                    document.getElementById("total").innerHTML = "RM " + (nomom.toFixed(2));
                    document.getElementById("status").innerHTML = "No Mother";
                    document.getElementById("qualify").innerHTML = "Qualified"
                }
                else if (nofather1.checked == true && nomother.checked == false) {
                    var nofat = b40 + 300;
                    document.getElementById("total").innerHTML = "RM " + (nofat.toFixed(2));
                    document.getElementById("status").innerHTML = "No Father";
                    document.getElementById("qualify").innerHTML = "Qualified"
                }
                else if (nomother.checked == true && nofather1.checked == true) {
                    var noall = b40 + 500;
                    document.getElementById("total").innerHTML = "RM " + (noall.toFixed(2));
                    document.getElementById("status").innerHTML = "No Parents";
                    document.getElementById("qualify").innerHTML = "Qualified"
                } else {
                    document.getElementById("total").innerHTML = "RM " + (b40.toFixed(2));
                    document.getElementById("status").innerHTML = "Alive"
                    document.getElementById("qualify").innerHTML = "Qualified"
                }
            } 
            else if (document.getElementById("c2").checked == true) {
                document.getElementById("category").innerHTML = "T20";
                if (nomother.checked == true && nofather1.checked == false) {
                    var nomom1 = 300;
                    document.getElementById("total").innerHTML = "RM " + (nomom1.toFixed(2));
                    document.getElementById("status").innerHTML = "No Mother";
                    document.getElementById("qualify").innerHTML = "Qualified"
                }
                else if (nofather1.checked == true && nomother.checked == false) {
                    var nofat1 = 300;
                    document.getElementById("total").innerHTML = "RM " + (nofat1.toFixed(2));
                    document.getElementById("status").innerHTML = "No Father";
                    document.getElementById("qualify").innerHTML = "Qualified"
                }
                else if (nomother.checked == true && nofather1.checked == true) {
                    var noall1 = 500;
                    document.getElementById("total").innerHTML = "RM " + (noall1.toFixed(2));
                    document.getElementById("status").innerHTML = "No Parents";
                    document.getElementById("qualify").innerHTML = "Qualified"
                }else {
                    document.getElementById("status").innerHTML = "Alive"
                    document.getElementById("total").innerHTML = "-"
                    document.getElementById("qualify").innerHTML = "Not Qualified"
                }

            }
            else if (document.getElementById('c3').checked) {
                document.getElementById("category").innerHTML = "M40";
                if (nomother.checked == true && nofather1.checked == false) {
                    var nomom2 = 300;
                    document.getElementById("total").innerHTML = "RM " + (nomom2.toFixed(2));
                    document.getElementById("status").innerHTML = "No Mother";
                    document.getElementById("qualify").innerHTML = "Qualified"
                }
                else if (nofather1.checked == true && nomother.checked == false) {
                    var nofat2 = 300;
                    document.getElementById("total").innerHTML = "RM " + (nofat2.toFixed(2));
                    document.getElementById("status").innerHTML = "No Father";
                    document.getElementById("qualify").innerHTML = "Qualified"
                }
                else if (nomother.checked == true && nofather1.checked == true) {
                    var noall2 = 500;
                    document.getElementById("total").innerHTML = "RM " + (noall2.toFixed(2));
                    document.getElementById("status").innerHTML = "No Parents";
                    document.getElementById("qualify").innerHTML = "Qualified"
                }else {
                    document.getElementById("status").innerHTML = "Alive"
                    document.getElementById("total").innerHTML = "-"
                    document.getElementById("qualify").innerHTML = "Not Qualified"
                }
            }
        } else {
            alert("Please fill in all fields !");
            document.getElementById('form2').hidden = true;
            location.reload();
            return false;
        }
    } else {
        alert('Sorry, Please try again.');
    }
}