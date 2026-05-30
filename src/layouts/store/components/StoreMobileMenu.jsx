import { Link } from 'react-router-dom'
import { menu } from 'src/utils/menu'

const StoreMobileMenu = ({
    visible,
    link = () => { }
}) => {
    return visible ?
        (
            <div className='block lg:hidden absolute w-full bg-accent top-11 right-0 shadow-accent-strong/65 shadow-2xl rounded-b-2xl z-20'>
                <ul className='flex flex-col items-start text-inverse text-base text-right p-4 gap-y-6'>
                    {
                        menu.map((item) => (
                            <li key={item.id} className='w-full'>
                                <button onClick={() => link(item.to)} className='text-left hover:bg-accent-strong rounded-2xl w-full px-4 py-2'>
                                    <p className='font-medium flex gap-x-2'>
                                        <i className={item.icon} />
                                        {item.name}
                                    </p>
                                    <p className='font-light text-sm'>
                                        {
                                            item.description
                                        }
                                    </p>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        ) : null
}

export default StoreMobileMenu