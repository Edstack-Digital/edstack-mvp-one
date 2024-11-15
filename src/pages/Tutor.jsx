import Header from "../components/common/Header"
import Lower from "../components/common/Lower"


function Tutor() {
  return (
    <>
    <Header />
    <div className="mt-11 px-7 lg:px-16 font-[Satoshi]">
    <div>Tutors</div>
    <div className="grid grid-cols-3">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    </div>
      </div>
    <Lower />
    </>
  )
}

export default Tutor