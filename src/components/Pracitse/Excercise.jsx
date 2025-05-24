import { usePDF } from 'react-to-pdf';

const Component = () => {
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
  return (
    <div>
      <button onClick={() => toPDF()}>Download PDF</button>

      <table ref={targetRef} className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg border-collapse">
        <thead>
          <tr className="bg-blue-500 text-white h-16">
            <th className="px-4 py-2 border border-gray-300">S No</th>
            <th className="px-4 py-2 border border-gray-300">Category</th>
            <th className="px-4 py-2 border border-gray-300">Type</th>
            <th className="px-4 py-2 border border-gray-300">Price</th>
            <th className="px-4 py-2 border border-gray-300">Sq Ft</th>
            <th className="px-4 py-2 border border-gray-300">Edit</th>
            <th className="px-4 py-2 border border-gray-300">Delete</th>
          </tr>
        </thead>

      </table>
    </div>

  )
}
export default Component;