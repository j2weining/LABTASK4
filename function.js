document.getElementById('form2').hidden = true;
function calmessage() {
    let selection1 = confirm('Are you sure to check status?');
    if (selection1 == true) {

        document.getElementById('form2').hidden = false;
        var studname = document.getElementById("name").value;
        if (studname) {
            document.getElementById("displayname").innerHTML = studname;
        
            if (document.getElementById("B40").checked) {
                var ctgory = document.getElementById("B40").value;
                document.getElementById("category").innerHTML = ctgory;
            }
            else if (document.getElementById("T20").checked) {
                var ctgory = document.getElementById("T20").value;
                document.getElementById("category").innerHTML = ctgory;
            }
            else if (document.getElementById('M40').checked) {
                var ctgory = document.getElementById("M40").value;
                document.getElementById("category").innerHTML = ctgory;
            }

            if (B40.checked) {
                var b40 = 100;
                if(nomother.checked){
                var nomom = b40 + 300;
                document.getElementById("total").innerHTML = "RM " + (nomom.toFixed(2));
                }
                else if(nofather.checked){
                    var nofat = b40 + 300;
                    document.getElementById("total").innerHTML = "RM " + (nofat.toFixed(2));
                }
                else if(nomother.checked,nofather.checked){
                    var noall = b40 + 500;
                    document.getElementById("total").innerHTML = "RM " + (noall.toFixed(2));
                }else{
                    document.getElementById("total").innerHTML = "RM " + (b40.toFixed(2));
                }
            }else if (T20.checked){
                document.getElementsById("status").innerHTML = "-"
                document.getElementById("total").innerHTML = "Not qualified";
            }else if (M40.checked){
                document.getElementsById("status").innerHTML = "-"
                document.getElementById("total").innerHTML = "Not qualified";
            }

            if(nomother.checked){
                var parentstatus = document.getElementById("nomother").value;
                document.getElementById("status").innerHTML = parentstatus;
            }
            else if(nofather.checked){
                var parentstatus = document.getElementById("nofather").value;
                document.getElementById("status").innerHTML = parentstatus;
            }
            else if(nomother.checked && nofather.checked){
                document.getElementsById("status").innerHTML = "-"
            }
        }else {
            alert("Please fill in all fields !");
            document.getElementById('form2').hidden = true;
            location.reload();
        }
        return false;
    } else {
        alert('Sorry, Please try again.');
    }
}
