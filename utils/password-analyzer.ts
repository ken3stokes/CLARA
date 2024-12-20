interface PasswordStrength {
  score: number;
  feedback: string[];
  color: string;
}

export function analyzePassword(password: string): PasswordStrength {
  const feedback: string[] = [];
  let score = 0;

  // Length check
  if (password.length < 8) {
    feedback.push("Password is too short (minimum 8 characters)");
  } else if (password.length >= 12) {
    score += 2;
    feedback.push("Good length");
  } else {
    score += 1;
  }

  // Uppercase check
  if (/[A-Z]/.test(password)) {
    score += 1;
    feedback.push("Contains uppercase letters");
  } else {
    feedback.push("Add uppercase letters");
  }

  // Lowercase check
  if (/[a-z]/.test(password)) {
    score += 1;
    feedback.push("Contains lowercase letters");
  } else {
    feedback.push("Add lowercase letters");
  }

  // Numbers check
  if (/\d/.test(password)) {
    score += 1;
    feedback.push("Contains numbers");
  } else {
    feedback.push("Add numbers");
  }

  // Special characters check
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    score += 1;
    feedback.push("Contains special characters");
  } else {
    feedback.push("Add special characters");
  }

  // Common patterns check
  if (/123|abc|qwerty|password|admin/i.test(password)) {
    score = Math.max(0, score - 2);
    feedback.push("Avoid common patterns");
  }

  // Repeated characters check
  if (/(.)\1{2,}/.test(password)) {
    score = Math.max(0, score - 1);
    feedback.push("Avoid repeated characters");
  }

  // Calculate color based on score
  let color: string;
  if (score <= 1) {
    color = "bg-destructive";
  } else if (score <= 2) {
    color = "bg-orange-500";
  } else if (score <= 4) {
    color = "bg-yellow-500";
  } else {
    color = "bg-green-500";
  }

  return {
    score: Math.min(5, score),
    feedback,
    color,
  };
}

