const Display = ({ count1, count2 }) => {
  return (
    <div className="flex space-x-5 justify-center">
      <div className="text-4xl font-bold text-gray-700">{count1}</div>
      <div className="text-4xl font-bold text-gray-700">{count2}</div>
    </div>
  );
};
export default Display;
