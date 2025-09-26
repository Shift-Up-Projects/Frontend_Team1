// src/hooks/usePasswordStrength.js
export default function usePasswordStrength(password) {
  if (!password) return { score: 0, percent: 0, label: "", color: "#d7dce1" };

  let score = 0;
  const length8 = password.length >= 8;
  const length12 = password.length >= 12;
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);

  if (length8) score++;
  if (hasLower && hasUpper) score++;
  if (hasNumber) score++;
  if (hasSymbol) score++;
  if (length12) score++;

  const percent = Math.min(100, Math.round((score / 5) * 100));

  let label = "Weak";
  let color = "#ff6b6b"; // red
  if (score >= 4) {
    label = "Strong";
    color = "#16a34a"; // green
  } else if (score === 3) {
    label = "Good";
    color = "#84cc16"; // lime
  } else if (score === 2) {
    label = "Fair";
    color = "#f59e0b"; // amber
  }

  return { score, percent, label, color };
}
