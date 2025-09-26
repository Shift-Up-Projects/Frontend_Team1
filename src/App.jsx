import "./App.css";

function App() {
  return (
    <>
      {/* test */}
      <div className="bg-slate-900 w-full flex justify-center items-center">
        <h1 className="text-4xl font-bold py-5 text-gray-100">
          Event Maneger Platform
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-3  p-4">
        <div className="bg-amber-300 row-span-3 p-4">box1</div>
        <div className="bg-blue-300 p-4">box2</div>
        <div className="bg-red-300 p-4">box3</div>
        <div className="bg-green-300 p-4">box4</div>
        <div className="bg-fuchsia-400 col-span-2 h-10 p-4">box5</div>
      </div>
    </>
  );
}

export default App;
