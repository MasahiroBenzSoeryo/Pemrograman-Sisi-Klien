const dataMahasiswa = [
  {
    id: 1,
    nama: "Budi Santoso",
    tanggalLahir: "2000-01-15",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Informatika",
    semester: 6,
    nilai: {
      algoritma: 85,
      basisData: 88,
      pemrogramanWeb: 90,
    },
    aktif: true,
    organisasi: ["Himpunan Mahasiswa Teknik", "Komunitas Pemrograman"],
  },
  {
    id: 2,
    nama: "Siti Aminah",
    tanggalLahir: "1999-05-10",
    fakultas: "Fakultas Ekonomi",
    programStudi: "Manajemen",
    semester: 4,
    nilai: {
      manajemenKeuangan: 78,
      akuntansi: 82,
      pemasaran: 75,
    },
    aktif: true,
    organisasi: ["Koperasi Mahasiswa"],
  },
  {
    id: 3,
    nama: "Rudi Hartono",
    tanggalLahir: "1998-12-01",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Sipil",
    semester: 8,
    nilai: {
      mekanikaTanah: 85,
      strukturBangunan: 89,
    },
    aktif: false,
    organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
  },
];

const listmhs = dataMahasiswa;
console.log(listmhs);

const Mahasiswa = listmhs[2];
console.log(Mahasiswa);

// console.log(Mahasiswa.nama);

// destrukturing = pecahin struktur
const{nama, tanggalLahir, organisasi, aktif, ...sisaKeynya} = Mahasiswa;
console.log(nama);
console.log(sisaKeynya);
console.log(organisasi);

// spread
const tambahanOrg = ["Futsal", ...organisasi];
console.log(tambahanOrg);


// split
console.log(tanggalLahir);
const tanggalAsli = tanggalLahir.split("-");
console.log(tanggalAsli[2]);

const dataDiri = `Nama: ${nama}, Tanggal Lahir: ${tanggalLahir}`;
console.log(dataDiri);

// kondisional operator: ?, ??, ||, &&
const statusAktif = aktif ? "Masih aktif" : "Walawe tidak aktif";
console.log(`Atas nama ${nama} statusnya ${statusAktif}`);

const nonOrmawa = organisasi[0] || "Tidak ikut ormawa";
console.log(nonOrmawa);

// filtering
const allMhsAktif = listmhs.filter((mhs) => mhs.aktif);
console.log(allMhsAktif);

// Nambah objek baru
const newMhs = {
  id: 5,
  nama: "Dongkam Harder",
  nilai: {
    algoritma: 80,
    basdat: 85,
    daspro: 90
  },
  semester: 12
};

const dataAnyar = [...listmhs, newMhs];
console.log(dataAnyar);

// Sort mhs
const sortingMhs = listmhs.slice().sort((a,b) => a.semester - b.semester);
console.log(sortingMhs);

