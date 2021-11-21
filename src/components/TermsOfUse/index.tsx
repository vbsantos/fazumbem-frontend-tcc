import { useEffect } from "react";

const TermsOfUse = ({ onClose, isOpen }) => {
  useEffect(() => {
    window.location.href = "termo.html";
  }, []);
  return null;
};

export default TermsOfUse;
