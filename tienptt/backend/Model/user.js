
// 📚 Bài 5 — find() cơ bản

// Tìm học sinh tên "Bình"

const students = [
  { name: "An",   score: 8 },
  { name: "Bình", score: 5 },
  { name: "Cúc",  score: 9 }
];
const tim =students.find(t =>t.name==="Bình");
console.log(tim);

// Tìm học sinh có điểm > 8
const tim2 =students.find (t2 => t2.score >8);
console.log(tim2);

