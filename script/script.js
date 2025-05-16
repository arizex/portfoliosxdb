// MENU TOGGLE
const menuBtn = document.getElementById("toggle");
const menuNav = document.getElementById("menunav");
const menuClose = document.getElementById("close")

menuBtn.addEventListener("click", () => {
    menuNav.classList.add("show");
});
menuClose.addEventListener("click", () => {
    menuNav.classList.remove("show")
})

// KETIK DANCOK

document.addEventListener("DOMContentLoaded", function() {
    const target = document.querySelector("#myname")
    
    new Typed("#myname", {
    strings: [`ARIS RAMADHANI`],
    typeSpeed: 150,
    // backSpeed: 50,
    // backDelay: 2000,
    loop: false,
    onBegin: () => {
        target.style.opacity = 1;
    }
  });
});

// ah
let Helloworld = "Welcome To My Portfolio"
document.getElementById("output").textContent = Helloworld

// asu kanor

setTimeout(function() {
    document.getElementById("home-text").textContent = "Developer Since 2025"
}, 3500)

// table from Db
fetch('get_data.php') //ambil data dari file PHP
    .then(response => response.json()) // ubah hasil response dari PHP jadi JSON
    .then(data => {
        const tbody = document.getElementById('tabelData'); //ambil elemen Tbody di html
        tbody.innerHTML = ''; // di kosongin biar ga doble 

        //looping semua data dari JSON
        data.forEach((item, index) => {
            const row = document.createElement('tr'); //buat elemen TR
            row.innerHTML = `
            <td>${index + 1}</td> 
            <td>${item.Kegiatan}</td>
            <td>${item.Waktu}</td>
            <td>${item.Status}</td>
            <td>${item.Bukti}</td>
            `;
            tbody.appendChild(row); // tampilkan baris yang di buat ke dalam table
        });
    })
    .catch(error => {
        console.error('gagal ambil data', error); //kalau gagal tampilkan eror di console log dan semoga gak gagal ya anjingg
    });

