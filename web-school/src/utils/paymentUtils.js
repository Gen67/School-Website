export const TUITION_FEES = {
  BSCS: 15000,
  BSIT: 14500,
};

export function generateOrNumber() {
  return "OR-" + Math.floor(100000 + Math.random() * 900000);
}

export function assignAdviser(teachers) {
  return teachers[Math.floor(Math.random() * teachers.length)];
}
