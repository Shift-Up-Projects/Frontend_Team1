// src/components/PasswordStrengthMeter.jsx
import React from "react";
import usePasswordStrength from "../hooks/usePasswordStrength";
import "./PasswordStrengthMeter.css"; // ملف CSS صغير للشريط

export default function PasswordStrengthMeter({ password }) {
  const { percent, label, color } = usePasswordStrength(password);

  if (!password) return null;

  return (
    <div className="strength-wrap" aria-live="polite">
      <div className="strength-bar">
        <div
          className="strength-fill"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
      <small className="strength-label" style={{ color }}>
        Password strength: {label}
      </small>
    </div>
  );
}
