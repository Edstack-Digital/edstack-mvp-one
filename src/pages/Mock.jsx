import Header from "../components/common/Header";
import Lower from "../components/common/Lower";

function Mock() {
  return (
    <>
      <Header />
        <div className="bg-[#cce4f5] text-[#1D1E2F] px-16 py-11 flex items-center justify-between">
          <div>
            <div className="text-4xl ">Unlock Mock Tests with <br />Edstack Premium</div>
            <div className="mt-4">Take your learning to the next level with access to <br />unlimited mock tests after every tutorial or on demand!</div>
            <button className="mt-4 p-5 rounded-lg bg-[#1D1E2F] py-2 text-white hover:bg-blue-700">
              Subscribe
            </button>
          </div>
          <div><img src="/ed.png" alt="edstack logo" className="h-56 opacity-50" /></div>
        </div>
      <div className="mb-11 mt-11 px-16 font-[Satoshi] lg:px-16">
        <h1 className="mb-6 text-xl font-bold">Mockup test</h1>

        <div className="grid grid-cols-4 gap-7">
          <div className="flex justify-center rounded-lg bg-[#cce4f5] p-16">
            Geography
          </div>
          <div className="flex justify-center rounded-lg bg-[#cce4f5] p-16">
            Geography
          </div>
          <div className="flex justify-center rounded-lg bg-[#cce4f5] p-16">
            Geography
          </div>
          <div className="flex justify-center rounded-lg bg-[#cce4f5] p-16">
            Geography
          </div>
          <div className="flex justify-center rounded-lg bg-[#cce4f5] p-16">
            Geography
          </div>
          <div className="flex justify-center rounded-lg bg-[#cce4f5] p-16">
            Geography
          </div>
          <div className="flex justify-center rounded-lg bg-[#cce4f5] p-16">
            Geography
          </div>
          <div className="flex justify-center rounded-lg bg-[#cce4f5] p-16">
            Geography
          </div>
         
        </div>
      </div>

      <Lower />
    </>
  );
}

export default Mock;
