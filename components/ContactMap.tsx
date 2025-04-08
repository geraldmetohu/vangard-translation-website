import dynamic from "next/dynamic";

const ContactMap = () => {
    return (
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
        <iframe
          title="Vangard Translation Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19804.03203040528!2d-0.1385655!3d51.5098654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2d4a8c2c91%3A0x3b61f5e65ecba937!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1712483834567!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default ContactMap;
  