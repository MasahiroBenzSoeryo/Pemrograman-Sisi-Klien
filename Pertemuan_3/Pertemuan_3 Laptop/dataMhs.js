const dataMahasiswa = [
  {
    id: 1,
    nama: "Budi Santoso",
    tanggalLahir: "2000-01-15",
    fakultas: "Fakultas Ilmu Komputer",
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
    fakultas: "Fakultas Ekonomi Bisnis",
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
    programStudi: "Teknik Elektro",
    semester: 8,
    nilai: {
      mekanikaTanah: 85,
      strukturBangunan: 89,
    },
    aktif: false,
    organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
  },
];

// Tampilkan Data Mahasiswa yang pertama
const mahasiswa = dataMahasiswa[0];
console.log(mahasiswa);

// Destructuring seluruh field
const {id, nama, tanggalLahir, fakultas, programStudi, semester, nilai, aktif,organisasi} = mahasiswa; 
console.log(id, nama, tanggalLahir, fakultas, programStudi, semester, nilai, aktif, organisasi);

// Destructuring pada field nilai
console.log(nilai);

// Destructuring pada field organisasi
console.log(organisasi);

// Spread operator untuk field organisasi
const newOrganisasi = ["Pengembangan AI", ...organisasi];
console.log(newOrganisasi);

// Update pada field fakultas dan field semester
const updatedMahasiswa = {...mahasiswa, fakultas: "Fakultas Teknologi Informasi", semester: 7,};
console.log(updatedMahasiswa);

// Split pada field tanggal lahir dan tampilkan tahun saja
console.log(tanggalLahir);
const tanggalAsli = tanggalLahir.split("-");
console.log(tanggalAsli[0]);

// Conditional Operator ‘?’
const statusAktif = aktif ? "Masih Aktif" : " sudah Tidak Aktif";
console.log(`Atas nama ${nama} status nya ${statusAktif}`);

// Map tampilkan semua nama mahasiswa
const namaMahasiswa = dataMahasiswa.map((mhs) => mhs.nama);
console.log(namaMahasiswa);

// Filtering tampilkan semua mahasiswa yang aktif dan dari Fakultas Ilmu Komputer
const mahasiswaAktif = dataMahasiswa.filter((mhs) => mhs.aktif);
console.log(mahasiswaAktif);
const mahasiswaTeknik = dataMahasiswa.filter((mhs) => mhs.fakultas === "Fakultas Ilmu Komputer");
console.log(mahasiswaTeknik);

// Totalkan nilai seluruh mahasiswa
const totalNilaiSemuaMahasiswa = dataMahasiswa.reduce((sum, mhs) => {
  const totalNilai = Object.values(mhs.nilai).reduce((acc, nilai) => acc + nilai, 0);
  return sum + totalNilai;
}, 0);
console.log(totalNilaiSemuaMahasiswa);

// Sort seluruh mahasiswa berdasarkan semester
const sortedSemester = dataMahasiswa.slice().sort((a, b) => a.semester - b.semester);
console.log(sortedSemester);

// Menambahkan Mahasiswa Baru
const newMahasiswa = {
  id: 4,
  nama: "Andi Setiawan",
  tanggalLahir: "2001-04-12",
  fakultas: "Fakultas Ilmu Komputer",
  programStudi: "Sistem Informasi",
  semester: 2,
  nilai: {
    algoritma: 80,
    basisData: 82,
    pemrogramanWeb: 85,
  },
  aktif: true,
  organisasi: ["Himpunan Mahasiswa SI"],
};
const dataMahasiswaUpdated = [...dataMahasiswa, newMahasiswa];
console.log(dataMahasiswaUpdated);

// Delete dan Update pada salah satu Mahasiswa
const dataMahasiswaAfterDelete = dataMahasiswaUpdated.filter((mhs) => mhs.id !== 2);
const dataMahasiswaAfterUpdate = dataMahasiswaAfterDelete.map((mhs) => mhs.id === 1 ? {...mhs, semester: 7} : mhs);
console.log(dataMahasiswaAfterUpdate);