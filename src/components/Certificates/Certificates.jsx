import CertificatesContent from "./CertificatesContent";
import CertificatesCards from "./CertificatesCards";

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-black px-6 py-20 md:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Side */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <CertificatesContent />
        </div>

        {/* Right Side */}
        <div className="order-1 lg:order-2">
          <CertificatesCards />
        </div>

      </div>
    </section>
  );
}

export default Certificates;