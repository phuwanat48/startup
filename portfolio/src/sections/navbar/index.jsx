import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <div className='flex flex-col gap-3.5 font-semibold'>
            <div>
                <FontAwesomeIcon className='mr-2 text-primaryTitle' icon={faArrowRight} />
                About
            </div>
            <div>Experince</div>
            <div>Project</div>
            <div>Article</div>
        </div>

    )
}

export default Navbar;