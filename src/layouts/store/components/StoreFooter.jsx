import { Link } from 'react-router-dom'
import logo from "/public/logo.svg"
import footerImg from '/public/footer.jpg'

const StoreFooter = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='w-full py-16 px-20 bg-black/65 bg-cover bg-center bg-no-repeat bg-blend-multiply' style={{
      backgroundImage: `url(${footerImg})`
    }} >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-white'>
        <div>
          <div className='space-y-6'>
            <Link to={'/'} className="flex items-center">
              <img src={logo} alt="Todo terreno logo" className="h-4 md:h-5" />
            </Link>
            <p className='text-sm'>Tu nuevo destino para productos de calidad. Comprometidos en ofrecerte las mejores marcas y una experiencia de compra confiable desde el primer día.</p>
            <div className='flex gap-x-4'>
              <button className='bg-muted/40 rounded-full flex items-center justify-center w-10 h-10 hover:bg-secondary/80'>
                <i className='ri-facebook-line text-xl' />
              </button>
              <button className='bg-muted/40 rounded-full flex items-center justify-center w-10 h-10 hover:bg-secondary/80'>
                <i className='ri-instagram-line text-xl' />
              </button>
              <button className='bg-muted/40 rounded-full flex items-center justify-center w-10 h-10 hover:bg-secondary/80'>
                <i className='ri-google-line text-xl' />
              </button>
            </div>
          </div>
        </div>

        <div>
          <h3 className='font-black text-xl mb-6'>Paqueterías</h3>
          <ul className='space-y-3 font-light text-sm'>
            <li>
              <Link className='flex items-center gap-2 text-white/70 transition-colors text-sm group hover:text-secondary'>
                <i className='ri-arrow-right-s-line h-4 w-4 transition-transform group-hover:translate-x-1 text-secondary' />
                Castores
              </Link>
            </li>
            <li>
              <Link className='flex items-center gap-2 text-white/70 transition-colors text-sm group hover:text-secondary'>
                <i className='ri-arrow-right-s-line h-4 w-4 transition-transform group-hover:translate-x-1 text-secondary' />
                DHL
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-black text-xl mb-6'>Enlaces Rápidos</h3>
          <ul className='space-y-3 font-light text-sm'>
            <li>
              <Link className='flex items-center gap-2 text-white/70 transition-colors text-sm group hover:text-secondary'>
                <i className='ri-arrow-right-s-line h-4 w-4 transition-transform group-hover:translate-x-1 text-secondary' />
                Politica de devolución
              </Link>
            </li>
            <li>
              <Link className='flex items-center gap-2 text-white/70 transition-colors text-sm group hover:text-secondary'>
                <i className='ri-arrow-right-s-line h-4 w-4 transition-transform group-hover:translate-x-1 text-secondary' />
                Terminos y condiciones
              </Link>
            </li>
            <li>
              <Link className='flex items-center gap-2 text-white/70 transition-colors text-sm group hover:text-secondary'>
                <i className='ri-arrow-right-s-line h-4 w-4 transition-transform group-hover:translate-x-1 text-secondary' />
                Garantía
              </Link>
            </li>
            <li>
              <Link className='flex items-center gap-2 text-white/70 transition-colors text-sm group hover:text-secondary'>
                <i className='ri-arrow-right-s-line h-4 w-4 transition-transform group-hover:translate-x-1 text-secondary' />
                Envíos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-black text-xl mb-6'>Legal</h3>
          <ul className='space-y-3 font-light text-sm'>
            <li>
              <Link className='flex items-center gap-2 text-white/70 transition-colors text-sm group hover:text-secondary'>
                <i className='ri-arrow-right-s-line h-4 w-4 transition-transform group-hover:translate-x-1 text-secondary' />
                Politica de devolución
              </Link>
            </li>
            <li>
              <Link className='flex items-center gap-2 text-white/70 transition-colors text-sm group hover:text-secondary'>
                <i className='ri-arrow-right-s-line h-4 w-4 transition-transform group-hover:translate-x-1 text-secondary' />
                Politica de privacidad
              </Link>
            </li>
            <li>
              <Link className='flex items-center gap-2 text-white/70 transition-colors text-sm group hover:text-secondary'>
                <i className='ri-arrow-right-s-line h-4 w-4 transition-transform group-hover:translate-x-1 text-secondary' />
                Terminos y condiciones
              </Link>
            </li>
            <li>
              <Link className='flex items-center gap-2 text-white/70 transition-colors text-sm group hover:text-secondary'>
                <i className='ri-arrow-right-s-line h-4 w-4 transition-transform group-hover:translate-x-1 text-secondary' />
                Garantía
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between border-t mt-12 pt-8 border-white/10">
        <p className='text-muted'>&copy; {year} Capital Llantas. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default StoreFooter