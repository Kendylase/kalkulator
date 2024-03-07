// function hitung(){
//     var nilai1 = document.getElementById("bilA").value;
//     var nilai2 = document.getElementById("bilB").value;
//     var opr    = document.getElementById("operator").value;
//     var nhasil = "";
//     if(nilai1=="" || nilai2=="" || opr==""){
//         nhasil = "Nilai harus berisi";
//     }else{
//         if(opr=="+"){
//             nhasil = parseInt(nilai1) + parseInt(nilai2);
//         }else if(opr=="-"){
//             nhasil = parseInt(nilai1) - parseInt(nilai2);
//         }else if(opr=="*"){
//             nhasil = parseInt(nilai1) * parseInt(nilai2);
//         }else if(opr=="/"){
//             nhasil = parseInt(nilai1) / parseInt(nilai2);
//         } 
//     }
//      document.getElementById("hasil").value = nhasil;
//     }
function tambah(){
    var nilai1 = document.getElementById("bilA").value;
    var nilai2 = document.getElementById("bilB").value;
    var nhasil = "";
    if(nilai1=="" || nilai2==""){
        nhasil = "Nilai harus berisi";
    }else{
        nhasil = parseInt(nilai1) + parseInt(nilai2);
    }
    document.getElementById("hasil").value = nhasil;
}
function kurang(){
    var nilai1 = document.getElementById("bilA").value;
    var nilai2 = document.getElementById("bilB").value;
    var nhasil = "";
    if(nilai1=="" || nilai2==""){
        nhasil = "Nilai harus berisi";
    }else{
        nhasil = parseInt(nilai1) - parseInt(nilai2);
    }
    document.getElementById("hasil").value = nhasil;
}
function kali(){
    var nilai1 = document.getElementById("bilA").value;
    var nilai2 = document.getElementById("bilB").value;
    var nhasil = "";
    if(nilai1=="" || nilai2==""){
        nhasil = "Nilai harus berisi";
    }else{
        nhasil = parseInt(nilai1) * parseInt(nilai2);
    }
    document.getElementById("hasil").value = nhasil;
}
function bagi(){
    var nilai1 = document.getElementById("bilA").value;
    var nilai2 = document.getElementById("bilB").value;
    var nhasil = "";
    if(nilai1=="" || nilai2==""){
        nhasil = "Nilai harus berisi";
    }else{
        nhasil = parseInt(nilai1) / parseInt(nilai2);
    }
    document.getElementById("hasil").value = nhasil;
}