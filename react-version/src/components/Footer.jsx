// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer
      className="w-full py-6  text-center text-gray-500 bg-white mt-10"
      role="contentinfo"
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} TixHub • All rights reserved.
      </p>
      <span className="font-semibold">Ridwxnullxh</span>
    </footer>
  );
}
