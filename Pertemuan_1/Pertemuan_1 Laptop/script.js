const addStudentBtn = document.getElementById('addStudentBtn');
const studentModal = document.getElementById('studentModal');
const deleteConfirmPopup = document.getElementById('deleteConfirmPopup');
const studentForm = document.getElementById('studentForm');
const studentTableBody = document.getElementById('studentTableBody');
let editIndex = null;
let rowToDelete = null; // Variabel untuk menyimpan referensi baris yang akan dihapus

// Tombol Tambah Mahasiswa
addStudentBtn.addEventListener('click', function () {
    openModal('Tambah Mahasiswa');
});

// Event listener untuk submit form tambah/edit mahasiswa
studentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const nim = document.getElementById('nim').value;
    const name = document.getElementById('name').value;

    if (editIndex !== null) {
        // Edit mahasiswa yang sudah ada
        const row = studentTableBody.rows[editIndex];
        row.children[1].textContent = nim;
        row.children[2].textContent = name;
        editIndex = null;
    } else {
        // Tambahkan mahasiswa baru
        const newRow = studentTableBody.insertRow();

        // Gunakan panjang tabel + 1 sebagai nomor urut
        const currentLength = studentTableBody.rows.length;
        newRow.innerHTML = `<td>${currentLength}</td><td>${nim}</td><td>${name}</td><td><button class="editBtn">Edit</button> <button class="deleteBtn">Hapus</button></td>`;

        // Tambahkan event listener untuk tombol baru
        addEventListenersToButtons(newRow);
    }

    closeModal();
});

// Event delegation untuk tombol Edit dan Hapus
studentTableBody.addEventListener('click', function (event) {
    const target = event.target;

    if (target.classList.contains('editBtn')) {
        // Tombol Edit ditekan
        const currentRow = target.closest('tr');
        const nim = currentRow.children[1].textContent;
        const name = currentRow.children[2].textContent;

        document.getElementById('nim').value = nim;
        document.getElementById('name').value = name;

        editIndex = currentRow.rowIndex - 1;
        openModal('Edit Mahasiswa');
    }

    if (target.classList.contains('deleteBtn')) {
        // Tombol Hapus ditekan
        const currentRow = target.closest('tr');
        rowToDelete = currentRow; // Simpan referensi ke baris yang akan dihapus
        openDeletePopup();
    }
});

// Popup konfirmasi hapus
document.getElementById('confirmDeleteBtn').addEventListener('click', function () {
    // Hapus baris yang ditargetkan untuk dihapus
    if (rowToDelete !== null) {
        rowToDelete.remove();  // Hapus baris berdasarkan referensi DOM
        rowToDelete = null;    // Reset variabel setelah penghapusan
    }

    closeDeletePopup();
    updateTableIndices();  // Update urutan nomor setelah hapus mahasiswa
});

// Fungsi untuk memperbarui nomor indeks baris pada tabel setelah penghapusan
function updateTableIndices() {
    const rows = studentTableBody.rows;

    // Reset nomor urut untuk setiap baris mulai dari 1
    for (let i = 0; i < rows.length; i++) {
        rows[i].children[0].textContent = i + 1;  // Set kolom pertama sebagai nomor urut
    }
}

// Fungsi untuk menambahkan event listener ke tombol Edit dan Hapus
function addEventListenersToButtons(row) {
    const editBtn = row.querySelector('.editBtn');
    const deleteBtn = row.querySelector('.deleteBtn');

    editBtn.addEventListener('click', function () {
        const currentRow = editBtn.closest('tr');
        const nim = currentRow.children[1].textContent;
        const name = currentRow.children[2].textContent;

        document.getElementById('nim').value = nim;
        document.getElementById('name').value = name;

        editIndex = currentRow.rowIndex - 1;
        openModal('Edit Mahasiswa');
    });

    deleteBtn.addEventListener('click', function () {
        const currentRow = deleteBtn.closest('tr');
        rowToDelete = currentRow; // Simpan referensi ke baris yang akan dihapus
        openDeletePopup();
    });
}

// Fungsi untuk membuka modal
function openModal(title) {
    document.getElementById('modalTitle').textContent = title;
    studentModal.style.display = 'flex';
}

// Fungsi untuk menutup modal
function closeModal() {
    studentModal.style.display = 'none';
    studentForm.reset();
}

// Fungsi untuk membuka popup hapus
function openDeletePopup() {
    deleteConfirmPopup.style.display = 'flex';
}

// Fungsi untuk menutup popup hapus
function closeDeletePopup() {
    deleteConfirmPopup.style.display = 'none';
}
