import FooterContent from "./FooterContent";
import FooterSocials from "./FooterSocials";

function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black px-6 py-16 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

        {/* Left Side */}
        <div className="text-center lg:text-left">
          <FooterContent />
        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-end">
          <FooterSocials />
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-8 text-center">
        <p className="text-sm text-gray-500">
          © 2026 MOHSIN HAYAT. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;