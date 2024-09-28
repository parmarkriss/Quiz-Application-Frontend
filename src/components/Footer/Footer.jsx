// Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Quiz Application. All rights reserved.</p>
          <div className="mt-4">
            <a href="/privacy-policy" className="hover:underline mx-2">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  