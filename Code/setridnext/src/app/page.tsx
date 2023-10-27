import './style.css';
import Navbar from '../components/navbar/page';
import Footer from '../components/footer/page';
import Link from 'next/link';
/*import { useRouter } from 'next/navigation';*/

function Landingpage() {

    return (
      <>
        <Navbar/>
        <img className='main-img' src='/reykjavik.avif' alt='stethoscope' />
        <div className='info-box'>
            <Link href='/laeknar'>
                <div>
                    <button className='info-btn1'>Læknar</button>
                </div>
            </Link>
            <div className='phone'>
                <img className='phone-img' src='/phone-icon.png' alt='phone'/>
                535-7700
            </div>
            <button className='info-btn2'>Þjónusta</button>
        </div>
        <div className='instructions'>
            <div className='where'>
                <h2 className='where-h2'>Hvar erum við?</h2>
                <p className='where-p'>Læknasetrið er staðsett í Mjóddinni. Gengið er inn vinstra megin við Nettó um innganginn sem sést á myndinni hér fyrir neðan.</p>
                <img className='where-img' src='/Where.png' alt='Image of Læknasetrið from the outside' />
                <p className='where-p'>Hægt er að sjá staðsetningu Læknasetursins á Google Maps með því að smella á kortið hér fyrir neðan.</p>
                <img className='where-img' src='/Maps.png' alt='Find Læknasetrið on Maps' />
            </div>
            <div className='when'>
                <h2 className='where-h2'>Opnunartímar</h2>
                    <div className='thedays'>
                        <p>Mánudagar 8-17</p>
                        <p>Þriðjudagar 8-17</p>
                        <p>Miðvikudagar 8-18</p>
                        <p>Fimmtudagar 8-17</p>
                        <p>Föstudagar 8-16</p>
                        <p>Laugardagar Lokað</p>
                        <p>Sunnudagar Lokað</p>
                    </div>

            </div>
        </div>
        <div className='whatissetrid'>
            <h2>Hvað er Læknasetrið?</h2>
            <p>Læknasetrið ehf. var stofnað 1986 og er félag lækna um samvinnu við rekstur læknastofa. Á Læknasetrinu starfa nú um 40 sérfræðingar í lyflækningum og hinum ýmsu sérgreinum auk sálfræðings.</p>
        </div>
        <div className='stjorn-container'>

            <h3 className='stjorn-h3'>Stjórn Læknasetursins ehf.</h3>
                <ul>
                <li>Þórarinn Guðnason stjórnarformaður</li>
                <li>Þórarinn Guðnason stjórnarformaður</li>
                <li>Þórarinn Guðnason stjórnarformaður</li>
                </ul>
            <h3 className='stjorn-h3'>Stjórnendur</h3>
            <ul>
                <li>Þórarinn Guðnason, lækningaforstjóri</li>
                <li>Dagmar Guðmundsdóttir, skrifstofustjóri</li>
                <li>Ásdís Gunnarsdóttir, rekstrarstjóri</li>
            </ul>
        </div>
        <Footer/>
      </>
    );
  }
  
  export default Landingpage;
