// Jawaban yang benar, gunakan huruf kecil untuk kemudahan pengecekan
const jawabanBenar = {
  1: 'k', 2: 'a', 3: 'l', 4: 'i', 5: 'm', 6:'a', 7:'n', 8:'t', 9:'a', 10:'n', 
  16: 'a', 27: 't', 33:'p', 37: 'm', 38: 'a', 39: 'l', 40: 'a', 41: 'y',
  42: 's', 43: 'i', 44: 'a', 49: 'h', 52: 'e', 55: 'p', 57: 't', 58: 'o',
  59: 'b', 60: 'a', 63: 'n', 66: 'u', 68: 'u', 71: 'r', 73: 'n', 77: 'a',
  79: 'r', 81: 'c', 82: 'i', 83: 'n', 84: 'a', 90: 'k', 90: 'k', 95: 's',
  96: 'i', 97: 'n', 98: 'g', 99: 'a', 101: 'i', 106: 'i'
  // Tambahkan id dan jawaban lainnya sesuai dengan grid TTS
};

// Fungsi untuk cek jawaban dan menghitung skor
function cekJawaban() {
  let benar = 0;
  const poinPerJawaban = 2;
  let totalBenar = Object.keys(jawabanBenar).length;

  for (let id in jawabanBenar) {
    const input = document.getElementById(id);
    if (input && input.value.toLowerCase() === jawabanBenar[id]) {
      input.style.backgroundColor = '#a0f0a0';
      benar++;
    } else {
      input.style.backgroundColor = '#f0a0a0';
    }
  }

  let skor = (benar * poinPerJawaban) + 6;
  document.getElementById('skor').textContent = skor;

  // Tampilkan pesan jika semua jawaban benar
  if (skor === 100) {
    Swal.fire({
      title: "Selamat! Semua jawaban benar!",
      text: "Anda telah menyelesaikan teka-teki dengan sempurna.",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }
}

function resetInput() {
  // Menghapus semua nilai input
  for (let id in jawabanBenar) {
    const input = document.getElementById(id);
    if (input) {
      input.value = ''; // Mengosongkan input
      input.style.backgroundColor = ''; // Menghapus warna latar belakang
    }
  }
  // Reset skor
  document.getElementById('skor').textContent = '0'; // Reset skor
}

// Fungsi untuk berpindah otomatis, termasuk mundur jika dihapus
document.querySelectorAll('.grid-item').forEach((input, index, inputs) => {
  input.addEventListener('input', function() {
    if (input.value.length === input.maxLength) {
      const nextInput = inputs[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  });

  input.addEventListener('keydown', function(event) {
    if (event.key === "Backspace" && input.value === "") {
      const prevInput = inputs[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
  });
});