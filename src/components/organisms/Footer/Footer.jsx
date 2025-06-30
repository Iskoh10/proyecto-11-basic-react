import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-main flex-container'>
        <section className='legacy flex-container'>
          <h2 className='titles-mobile'>Información Legal</h2>
          <ul className='flex-container'>
            <li>
              <a href='#' onClick={(e) => e.preventDefault()}>
                Aviso Legal
              </a>
            </li>
            <li>
              <a href='#' onClick={(e) => e.preventDefault()}>
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href='#' onClick={(e) => e.preventDefault()}>
                Política de Cookies
              </a>
            </li>
            <li>
              <a href='#' onClick={(e) => e.preventDefault()}>
                Política de Calidad
              </a>
            </li>
            <li>
              <a href='#' onClick={(e) => e.preventDefault()}>
                Declaración Accesibilidad
              </a>
            </li>
          </ul>
        </section>
        <section className='social-media flex-container'>
          <div className='logo flex-container'>
            <img src='/accuweather.svg' alt='logo' />
          </div>
          <h2>Your Weather</h2>
          <div className='social-links'>
            <ul className='flex-container'>
              <li>
                <a href='#' onClick={(e) => e.preventDefault()}>
                  <img src='/socialMedia/facebook.svg' alt='facebook-icon' />
                </a>
              </li>
              <li>
                <a href='#' onClick={(e) => e.preventDefault()}>
                  <img src='/socialMedia/instagram.svg' alt='instagram-icon' />
                </a>
              </li>
              <li>
                <a href='#' onClick={(e) => e.preventDefault()}>
                  <img src='/socialMedia/linkedin.svg' alt='linkedin-icon' />
                </a>
              </li>
              <li>
                <a href='#' onClick={(e) => e.preventDefault()}>
                  <img src='/socialMedia/pinterest.svg' alt='pinterest-icon' />
                </a>
              </li>
              <li>
                <a href='#' onClick={(e) => e.preventDefault()}>
                  <img src='/socialMedia/youtube.svg' alt='youtube-icon' />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className='links'>
          <h2 className='titles-mobile'>Contenido</h2>
          <ul className='flex-container'>
            <li>
              <a href='#' onClick={(e) => e.preventDefault()}>
                Your Weather
              </a>
            </li>
            <li>
              <a href='#' onClick={(e) => e.preventDefault()}>
                Blog
              </a>
            </li>
            <h2 className='titles-mobile'>Sorporte</h2>
            <li>
              <a href='#' onClick={(e) => e.preventDefault()}>
                Contacto
              </a>
            </li>
            <li>
              <a href='#' onClick={(e) => e.preventDefault()}>
                FAQs
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className='footer-end flex-container'>
        <p>&lt;/&gt; 2025 Your Weather</p>
      </div>
    </footer>
  );
};

export default Footer;
