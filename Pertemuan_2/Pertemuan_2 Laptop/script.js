$(document).ready(function () {
    let students = [
        { nim: 'A11.2022.14000', nama: 'Putra Malipo' },
        { nim: 'A11.2022.14001', nama: 'Farhan Rizki' },
        { nim: 'A11.2022.14003', nama: 'Faiz Ahmad' }
    ];

    function renderTable() {
        let tbody = $('tbody');
        tbody.empty();
        students.forEach((student, index) => {
            tbody.append(`
                <tr ${index % 2 === 1 ? 'class="bg-gray-200"':''}>
                    <td class="border px-4 py-2">${index + 1}</td>
                    <td class="border px-4 py-2">${student.nim}</td>
                    <td class="border px-4 py-2">${student.nama}</td>
                    <td class="border px-4 py-2">
                        <button class="btn-edit bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-700" data-index="${index}">Edit</button>
                        <button class="btn-hapus bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700" data-index="${index}">Delete</button>
                    </td>
                </tr>
            `);
        });
    }

    renderTable();

    // Add new student
    $('#btn-tambah').click(function () {
        $('#modal-tambah').removeClass('hidden');
    });

    $('#btn-tambah-batal').click(function () {
        $('#modal-tambah').addClass('hidden');
        $('#modal-tambah input[name="nim"]').val(''); // Clear input fields
        $('#modal-tambah input[name="nama"]').val('');
    });

    $('#modal-tambah .btn-simpan').click(function () {
        let nim = $('#modal-tambah input[name="nim"]').val();
        let nama = $('#modal-tambah input[name="nama"]').val();
        if (nim && nama) {
            students.push({ nim, nama });
            renderTable();
            $('#modal-tambah input[name="nim"]').val(''); // Clear input fields after adding
            $('#modal-tambah input[name="nama"]').val('');
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Data mahasiswa berhasil ditambahkan',
            });
            $('#modal-tambah').addClass('hidden');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'NIM dan Nama tidak boleh kosong',
            })
        }
    });

    // Edit student
    $(document).on('click', '.btn-edit', function () {
        let index = $(this).data('index');
        let student = students[index];
        $('#modal-edit input[name="nim"]').val(student.nim);
        $('#modal-edit input[name="nama"]').val(student.nama);
        $('#modal-edit').data('index', index).removeClass('hidden');
    });

    $('#btn-edit-batal').click(function () {
        $('#modal-edit').addClass('hidden');
        $('#modal-edit input[name="nim"]').val(''); // Clear input fields
        $('#modal-edit input[name="nama"]').val('');
    });

    $('#modal-edit .btn-simpan').click(function () {
        let index = $('#modal-edit').data('index');
        let nim = $('#modal-edit input[name="nim"]').val();
        let nama = $('#modal-edit input[name="nama"]').val();
        if (nim && nama) {
            students[index] = { nim, nama };
            renderTable();
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Data mahasiswa berhasil diedit',
            });
            $('#modal-edit').addClass('hidden');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'NIM dan Nama tidak boleh kosong',
            })
        }
    });

    // Delete student
    $(document).on('click', '.btn-hapus', function () {
        let index = $(this).data('index');
        let row = $(this).closest('tr');
        let nim = row.find('td:eq(1)').text();
        Swal.fire({
            title: 'Apakah Anda yakin ingin menghapus?',
            text: "Data mahasiswa dengan NIM " + nim + " akan dihapus!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                students.splice(index, 1); // Remove student from array
                renderTable(); // Re-render table after deletion
                row.remove(); // Menghapus baris dari tabel
                Swal.fire(
                    'Terhapus!',
                    'Data mahasiswa telah dihapus.',
                    'success'
                );
            }
        });
    });    
});
