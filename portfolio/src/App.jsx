
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Resume from './assets/Resume.pdf'


function App() {


  return (
    <div className='mt-14 max-w-6xl mx-auto grid grid-cols-[40%_60%] '>
      <div>
        <div className='sticky top-14 grid grid-rows-[35%_45%_20%] h-[90vh]'>     {/* fix left side bar*/}
          <div className='flex flex-col gap-2'>
            <div className='text-3xl font-semibold'>Phuwanat Kunwaraapiphat</div>
            <div className='font-semibold'>DEV/Front-end</div>
            <div className='text-sm w-5/6'>Hello there! 👋 I'm Phuwanat, currently studying Computer Science at Kasetsart University, Kamphaeng Saen Campus, and I'm absolutely passionate about coding.</div>
            <div className='mt-4'>
              <a href={Resume} target='_blank'>
                <span className='rounded-md bg-primaryTitle text-blue-100 py-2 px-4'>
                  veiw resume
                  <span className='rotate-90 inline-block ml-1 text-sm'> <FontAwesomeIcon className='animate-bounce' icon={faArrowDown} /> </span>
                </span>
              </a>
            </div>
          </div>

          <div>Nav</div>
          <div className='flex items-end'>Link</div>
        </div>
      </div>

      <div>
        <div>About</div>
        <div className='mb-96'>Content</div>
        <div className='mb-96'>Content</div>
        <div className='mb-96'>Content</div>
      </div>
    </div>
  )
}

export default App
