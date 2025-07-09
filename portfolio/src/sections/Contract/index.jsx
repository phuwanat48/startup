import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contract = () => {
  return (
     <div className='flex items-end gap-4'>
            <FontAwesomeIcon className='text-2xl hover:scale-125 hover:text-blue-500 transition-all' icon={faGithub} />
            <FontAwesomeIcon className='text-2xl hover:scale-125 hover:text-blue-500 transition-all' icon={faInstagram} />
            <FontAwesomeIcon className='text-2xl hover:scale-125 hover:text-blue-500 transition-all' icon={faFacebook} />
          </div>     
          
    
  );
}
export default Contract;