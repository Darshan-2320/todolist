export const checkvalid = (fullname, email, password, confirmpassword, number, issignin) => {
  // Email validation
  const isemailvalid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

  // Name validation (only when Sign Up)
  const isnamevalid = !issignin 
    ? fullname && /^[A-Za-z\s]{3,20}$/.test(fullname.trim()) 
    : true;

  // Phone number validation (only when Sign Up)
  const isnumbervalid = !issignin 
    ? number && /^[6-9]\d{9}$/.test(number.trim()) 
    : true;

  // Password validation
  const ispasswordvalid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  // Confirm Password (only when Sign Up)
  const isconfirmpasswordvalid = !issignin 
    ? confirmpassword && confirmpassword.trim() !== "" && password === confirmpassword 
    : true;

  // --- ERROR RETURNS ---
  if (!isemailvalid) return "Email is Not Valid";
  if (!ispasswordvalid) return "Password must be 8+ chars, include uppercase, lowercase, number, special char";
  if (!issignin) {
    if (!isnamevalid) return "Name is Not Valid (3-20 letters only)";
    if (!isnumbervalid) return "Phone number must be 10 digits starting with 6-9";
    if (!isconfirmpasswordvalid) return "Passwords do not match";
  }

  return null;
};
