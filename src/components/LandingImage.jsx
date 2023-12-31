import '../css/MainPage.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function LandingImage () {
  return (
    <head className="bg-fixed h-screen bg-cover bg-[url('/img/background-night.jpg')] flex flex-col justify-between" >
      <div className="w-screen">

        <Navbar />
      </div>
      <div className="text-shadow-1 text-white font-quicksand max-w-[1400px] px-6 sm:px-28 md:px-14">
        <h2 className='text-5xl font-bold'>Aprende a dormir mejor</h2>
        <p className='text-2xl pt-4 font-semibold'>¡Sweetdreams te ayuda a registrar y analizar tus horarios de sueño,
          para ayudarte a sentir mejor y mas descansado!
        </p>
      </div>
      <div className='px-28 mb-20'>
        <Link to="/Signup">
          <button className="button-web" >
            COMENZAR YA
          </button>
        </Link>
      </div>
    </head>
  )
}

export default LandingImage
