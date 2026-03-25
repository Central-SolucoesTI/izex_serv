import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer id="contato" className="site-footer" aria-label="Rodapé IZEX Services LLC">
      <section className="footer-cta" aria-label="Chamada para ação">
        <div className="footer-cta-overlay" aria-hidden="true"></div>
        <div className="footer-cta-content">
          <h2>Entre em contato agora mesmo!</h2>
          <p>
            Precisa de um serviço rápido e eficiente? Fale com a nossa equipe e solicite um
            orçamento sem compromisso!
          </p>
          <a className="cta-button" href="https://wa.me/19787277471" target="_blank" rel="noreferrer">
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      <section className="footer-main" aria-label="Informações do rodapé">
        <div className="footer-top">
          <div className="footer-left">
            <img
              src="/images/izex_logo.png"
              alt="IZEX SERVICES LLC"
              className="footer-logo"
              width="180"
              height="90"
            />
            <div className="footer-block">
              <h3>Endereço</h3>
              <p>10200 Falcon Moss Ln Orlando FL 32832</p>
            </div>
            <div className="footer-block">
              <h3>Contato</h3>
              <p>(978) 727-7471</p>
            </div>
            <div className="footer-social" aria-label="Redes sociais">
              <a href="#" aria-label="Instagram">
                <FaInstagram size={18} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Links de navegação">
            <a href="#home">Home</a>
            <a href="#furniture-assembly">Furniture Assembly</a>
            <a href="#cleaning-solutions">Cleaning Solutions</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>

        <div className="footer-divider" aria-hidden="true"></div>

        <div className="footer-bottom">
          <p>© 2025 Izex. Todos os direitos reservados.</p>
          <a href="#">Política de Privacidade</a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
