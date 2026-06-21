import ContactContent from "./ContactContent";
import ContactCards from "./ContactCards";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black px-6 py-20 md:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Side */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <ContactContent />
        </div>

        {/* Right Side */}
        <div className="order-1 lg:order-2">
          <ContactCards />
        </div>

      </div>
    </section>
  );
}

export default Contact;