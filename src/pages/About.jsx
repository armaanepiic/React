export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Our App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            We strive to create intuitive and powerful web applications that help
            users achieve their goals efficiently and effectively.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Technologies</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>React</li>
            <li>React Router</li>
            <li>Context API</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          Have questions or suggestions? Feel free to reach out to us at{' '}
          <a href="mailto:contact@example.com" className="text-blue-600 hover:text-blue-800">
            contact@example.com
          </a>
        </p>
      </div>
    </div>
  );
}