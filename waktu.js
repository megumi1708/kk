function tampilJam() {
    var waktu = new Date();
    var jam = waktu.getHours();
    var mnt = waktu.getMinutes();
    var dtk = waktu.getSeconds();

    if (jam >= 24) jam = jam - 24;
    if (jam <= 9) jam = "0" + jam;
    if (mnt <= 9) mnt = "0" + mnt;
    if (dtk <= 9) dtk = "0" + dtk;

    tampil_digit = jam + ":" + mnt + ":" + dtk;
    tampil_antara = jam + "." + mnt + "." + dtk;
    if (tampil % 2 == 0) {
        digit.innerHTML = tampil_digit;
    } else {
        digit.innerHTML = tampil_antara;
    }
    tampil++;
    setTimeout("tampilJam()", 500)
}
tampil = 1;
tampilJam();