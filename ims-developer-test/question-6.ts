function definisiSkalaRichter(SR: number): string {
  switch (true) {
    case SR >= 0.0 && SR < 5.0:
      return "Tidak ada kerusakan, jika ada hanya kerusakan kecil";
    case SR >= 5.0 && SR < 5.5:
      return "Beberapa bangunan akan rusak !";
    case SR >= 5.5 && SR < 6.5:
      return "Tembok retak atau roboh.";
    case SR >= 6.5 && SR < 7.5:
      return "Bahaya !, banyak bangunan dan gedung roboh.";
    case SR >= 7.5:
      return "Sangat Bahaya !, banyak bangunan dan gedung hancur.";
    default:
      return "Masukkan nilai yang valid.";
  }
}

console.log(definisiSkalaRichter(7));
