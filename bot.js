const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const botsay = (data) => {
  return [
    "Halo perkenalkan saya Alvianozbot, siapa nama kamu?",
    `Halo ${data?.nama}, berapa usia kamu ?`,
    `Ohh ${data?.usia}, hobi kamu apa ya ?`,
    `Sama dong aku juga hobi ${data?.hobi} jumpa lagi yah`,
  ];
};

pertanyaan.innerHTML = botsay()[0];

let userdatas = [];

function botstart() {
  if (jawaban.value.length < 1)
    return alert("Mohon isi jawaban terlebih dahulu");
  init++;
  if (init === 1) {
    botdelay({ nama: jawaban.value });
  } else if (init === 2) {
    botdelay({ usia: jawaban.value });
  } else if (init === 3) {
    botdelay({ hobi: jawaban.value });
  } else if (init === 4) {
    finishing();
  } else {
    botend();
  }
}

function botdelay(jawabanuser) {
  loaders.style.display = "block";
  container[0].style.filter = "blur(8px)";
  setTimeout(() => {
    loaders.style.display = "none";
    container[0].style.filter = "none";
    pertanyaan.innerHTML = botsay(jawabanuser)[init];
  }, 1200);
  userdatas.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Terimakasih ya ${userdatas[0]} sudah ngobrol bareng Alvianozbot, lainkali kita ${userdatas[2]} bareng ya.`;
  jawaban.value = "";
}

function botend() {
  alert(
    `Terimakasih ${userdatas[0]} telah berkunjung. Anda akan diarahkan ke halaman pertama`
  );
  window.location.reload();
}
