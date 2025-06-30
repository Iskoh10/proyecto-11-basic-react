import './Home.css';

const Home = () => {
  return (
    <>
      <main className='home flex-container'>
        <h2>Your Weather</h2>
        <p>Es una aplicación web para estar actualizad@ sobre el tiempo.</p>
        <div className='modes flex-container'>
          <section className='cities-explanation flex-container'>
            <h3>Modo Ciudades</h3>
            <p>
              Puedes elegir hasta 4 ciudades de tu interés. Te mostrará datos
              genéricos sobre el tiempo.
            </p>
            <div className='steps'>
              <img src='../steps/cities-steps.png' alt='cities-explanation' />
            </div>
            <div className='one-by-one'>
              <p className='flex-container'>
                Paso 1.-{' '}
                <span>Haces click en algunos de los contenedores.</span>
              </p>
              <div className='modal-img'>
                <img src='../steps/modal-img.png' alt='modal-image' />
              </div>
              <p className='flex-container'>
                Paso 2.- <span>Te aparece un modal para buscar la ciudad.</span>
              </p>
              <p className='flex-container'>
                Paso 3.-{' '}
                <span>Tendrás la información actual de la ciudad.</span>
              </p>
            </div>
          </section>
          <section className='city-by-name-explanation flex-container'>
            <h3>Modo Ciudad por nombre</h3>
            <p>
              Puedes elegir 1 ciudad y te mostrará toda la información del
              tiempo en detalle.
            </p>
            <div className='steps'>
              <img
                src='../steps/cityByName-steps.png'
                alt='cityByName-explanation'
              />
            </div>
            <div className='one-by-one'>
              <p className='flex-container'>
                Paso 1.- <span>Buscas la ciudad de tu interés.</span>
              </p>
              <p className='flex-container'>
                Paso 2.-{' '}
                <span>
                  Tendrás la información completa actualizada de la ciudad que
                  elegiste.
                </span>
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
