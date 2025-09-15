export default function CounterButtons({increment, decrement}) {
  return (
    <div className="mt-6">
      <button onClick={() => {increment()}} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
        +
      </button>
      <button onClick={() => {decrement()}} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2">
        -
      </button>
    </div>
  );
}
