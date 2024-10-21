// pages/archive.js
import Layout from "../../components/Layout";

export default function Archive() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Archive</h1>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search archives..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-gray-100 p-4">
            <h2 className="text-xl font-bold mb-2">Article Title</h2>
            <p className="text-sm text-gray-600 mb-2">
              Published on: MM/DD/YYYY
            </p>
            <p>Brief excerpt of the archived article content...</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
