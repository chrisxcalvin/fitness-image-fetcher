function About() {
  return (
    <div className="min-h-[70vh] flex justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-3xl text-center border border-gray-100">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">About FitGallery</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          FitGallery is a simple React application designed to inspire fitness
          enthusiasts by showcasing high-quality images from the Unsplash API.
          Built with modern tools like{" "}
          <span className="font-semibold text-gray-700">React</span>,{" "}
          <span className="font-semibold text-gray-700">Axios</span>, and{" "}
          <span className="font-semibold text-gray-700">Tailwind CSS</span>, it
          focuses on delivering a clean and responsive browsing experience.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The goal of this project is to motivate people towards a healthier
          lifestyle while demonstrating the use of APIs and frontend frameworks
          in real-world applications.
        </p>

        <div className="mt-8 border-t border-gray-200 pt-4 text-sm text-gray-500">
          <p>Version 1.0.0 | Created by <span className="text-blue-600 font-medium">Chris Calvin Corda</span></p>
        </div>
      </div>
    </div>
  );
}

export default About;
