import './index.css'
import LeftSec from './sections/LeftSec'
import RightSec from './sections/RightSec'


function App() {


  return (
    <div className='mt-14 max-w-6xl mx-auto grid grid-cols-[40%_60%] '>
        <LeftSec/>

        <RightSec/>
    </div>
  )
}

export default App
