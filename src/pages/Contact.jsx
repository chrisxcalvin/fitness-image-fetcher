function Contact() {
  return (
    <div className="min-h-[70vh] flex justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-2xl text-center border border-gray-100">
        <h2 className="text-3xl font-bold mb-3 text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Have suggestions, ideas, or want to collaborate?  
          Feel free to reach out — we’d love to hear from you!
        </p>

        <div className="flex flex-col items-center space-y-3">
          <div className="bg-gray-50 border border-gray-200 rounded-md px-4 py-3 w-full max-w-sm shadow-sm">
            <p className="text-gray-700">
               <span className="font-semibold text-blue-600">support@fitgallery.com</span>
            </p>
            <p className="text-gray-500 text-sm mt-1">Replies within 24 hours</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-md px-4 py-3 w-full max-w-sm shadow-sm">
            <p className="text-gray-700">
              <span className="font-semibold text-blue-600">Banglore, India</span>
            </p>
            <p className="text-gray-500 text-sm mt-1">Available Mon–Fri, 9 AM – 5 PM</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FitGallery. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
