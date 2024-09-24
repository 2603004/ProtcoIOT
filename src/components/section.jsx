import React,{useState,useEffect} from 'react'
import Navbar from './Navbar';
import'./section1.css'
import'./section2.css'
import'./section3.css'
import'./section4.css'
import'./section5.css'
import'./section6.css'
import Lottie from "lottie-react"
import sec_img1 from '../../src/assets/image1.json'
import sec_img2 from '../../src/assets/image2.json'
import security_img from '../../src/assets/security.json'
import mobileapp_img from '../../src/assets/mobileapp.json'
import goldmedal_img from '../../src/assets/goldmedal.png'
import optron_img from '../../src/assets/optron.png'
import switch_img from'../../src/assets/switch.png'
import lock_img from'../../src/assets/lock.png'
import appliance_img from'../../src/assets/appliance.png'
import remote_img from'../../src/assets/remote.png'
import socket_img from'../../src/assets/socket.png'
import light_img from'../../src/assets/light.png'
import curtain_img from'../../src/assets/curtain.png'
import camera_img from'../../src/assets/camera.png'
import sensor_img from'../../src/assets/sensor.png'
import wifi from'../../src/assets/wifi.png'
import mqtt from'../../src/assets/mqtt.png'
import http from'../../src/assets/http.png'
import ble from'../../src/assets/ble.png'
import lorawan from'../../src/assets/lorawan.png'
import zigbee from'../../src/assets/zigbee.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Section1 = () => {
  return (
    <div className="section1">
    <div className="section1-image left-image">
      <div style={{width: "120%"}}>
        <Lottie animationData={sec_img1}/>
      </div>
    </div>
    <div className="section1-text">
        <h2>Revolutionizing IoTaas: Empowering IoT Like Never Before</h2>
        <p>
            Explore the endless potential of IoT innovation with Protco, the premier enabler in IoT
            platform services. Our exceptional solutions simplify the connection of devices within the
            digital ecosystems.
        </p>
    </div>
    <div className="section1-image right-image">
    <div style={{width: "120%"}}>
       <Lottie animationData={sec_img2}/>
       </div>
    </div>
   </div>

  )
}

const Section2 = () => {
    return (
      <div className="section2">
        <h2 className="section2-title">Trusted By</h2>
        <div className="section2-customers">
          <div className="customer">
          <img src={goldmedal_img}  />
          </div>
          <div className="customer">
          <img src={optron_img}  />
          </div>
        </div>
      </div>
    );
  };
  
const Section3 = () => {
    return (
      <div className="section3">
        <h2 className="section3-title">From Vision to Reality with Protco Smart IoT Platform</h2>
       <div classname="container">
      
        <div className="section3-block">
          <div className="section3-text">
            <p>Manage the full IoT lifecycle from prototype to production with enterprise-grade security throughout.</p>
          </div>
          <div style={{width: "30%"}}>
          <Lottie loop={true} animationData={security_img}/>
          </div>
        </div>
  
        
        <div className="section3-block reverse">
          <div className="section3-text">
            <p>
              Build high-quality mobile apps and cloud services, run fleet tests, deploy seamlessly, market to users, manage devices, data, configurations, and updates, and analyze and grow your IoT business.
            </p>
          </div>
          <div style={{width: "30%"}}>
          <Lottie loop={true} animationData={mobileapp_img}/>
          </div>
        </div>
        </div>
      </div>
    );
  };
  const productCategories = [
    { title: 'Smart Switches', imgSrc: switch_img },
    { title: 'Smart Lighting', imgSrc: light_img},
    { title: 'Smart Curtains', imgSrc: curtain_img},
    { title: 'Smart Sensors', imgSrc: sensor_img },
    { title: 'Smart Digital Door Locks', imgSrc: lock_img},
    { title: 'Security Camera', imgSrc: camera_img },
    { title: 'Smart Home Appliances', imgSrc: appliance_img },
    { title: 'Smart Lighting Remotes', imgSrc: remote_img },
    { title: 'Smart Metered Sockets', imgSrc: socket_img }
  ];

  const productCategories1 = [
    { title: 'Smart Switches', imgSrc: lorawan },
    { title: 'Smart Lighting', imgSrc: http},
    { title: 'Smart Sensors', imgSrc: wifi },
    { title: 'Smart Digital Door Locks', imgSrc: zigbee},
    { title: 'Security Camera', imgSrc: mqtt },
    { title: 'Smart Home Appliances', imgSrc: ble }
  ];
  
  const Section4 = () => {
    return (
      <div className="cards-container">
        <div className="section4">
          <h2 className="section4-title">Supported Product Categories</h2>
          <div className="product-carousel">
            <div className="product-carousel-track">
              {[...productCategories, ...productCategories].map((category, index) => (
                <div key={index} className="product-item">
                  <img src={category.imgSrc} alt={category.title} className="product-image" />
                </div>
              ))}
            </div>
          </div>
          <h2 className="section4-description">
            Protco Smart IoT Platform enables virtually any product category to become smart and controlled globally via the internet. 
            </h2>
          <h2 className="section4-description">
            From home appliances and security systems to industrial machinery and environmental sensors.
          </h2>
        </div>
  
        <div className="section4-1">
          <h2 className="section4-1-title">Supported Hardware and Connectivity</h2>
          <div className="product-1-carousel">
            <div className="product-1-carousel-track">
              {/* Duplicate the hardware categories twice for seamless scrolling */}
              {[...productCategories1, ...productCategories1].map((category, index) => (
                <div key={index} className="product-1-item">
                  <img src={category.imgSrc} alt={category.title} className="product-1-image" />
                </div>
              ))}
            </div>
          </div>
          <h2 className="section4-1-description">
            Protco Smart IoT Platform provides flexibility to connect end-user devices to its cloud IoT platform using various connectivity methods.
          </h2>
          <h2 className="section4-1-description">
            ZigBee, WiFi, BLE, SigMesh, LoRaWAN, Matter & Cellular and communication protocols like MQTT, HTTP.
          </h2>
        </div>
      </div>
    );
  };
  const Section5 = () => {
    return (
      <div class="cards-container-1">
        <div className="section5">
          <h2 className="section5-title">Protco Smart IoT Platform</h2>
             <p className="section5-description">
             Protco Smart IoT platform is created to help make it simple and profitable for global enterprises by providing full range of IoT service including IoT software and hardware development on private IoT platform or 3rd party public IoT platform and make people from over the world realize the amazing power and potential of IoT technology.
             </p>
          <a href="#"class="button">Learn More</a>
          <a href="#" class="arrow"><FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
    
      <div className="section5-1">
        <h2 className="section5-1-title">IoT complexity solved at every stage</h2>
           <p className="section5-1-description">
           Manage the full IoT lifecycle from prototype to production with enterprise grade security throughout.
           Build high-quality mobile apps and cloud services, run fleet tests, deploy seamlessly, market to users, manage devices, data, configurations and updates, and analyse and grow your IoT business.
        </p>
        <a href="#"class="button-1">Learn More</a>
        <a href="#" class="arrow-1"><FontAwesomeIcon icon={faArrowRight} /></a>
      </div>
     </div> 
      );
    };
  const Section6 = () => {
      return (
        <div class="cards-container-2">
          <div className="section6">
            <h2 className="section6-title">Build High Quality Branded Mobile App</h2>
               <p className="section6-description">
               Empowering Your Vision: Tailored OEM Brand Apps by Protco Unlock bespoke, cutting-edge brand app solutions that cater to your unique innovation requirements. From seamless launch and updates to seamless integration with third-party ecosystems, Protco elevates enterprise efficiency with cost-effective, personalized smart apps.
               </p>
            <a href="#"class="button">Learn More</a>
            <a href="#" class="arrow"><FontAwesomeIcon icon={faArrowRight} /></a>
          </div>
      
        <div className="section6-1">
          <h2 className="section6-1-title">Web control and management App</h2>
             <p className="section6-1-description">
             A personalized and customized administration/management UI with powerful data visualization design, development and multi-terminal display capabilities, it allows to manage devices, store, monitor and analyze data from thousands of IoT sources.
          </p>
          <a href="#"class="button-1">Learn More</a>
          <a href="#" class="arrow-1"><FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
       </div> 
        );
      };
const App = () => {
        const [activeTab, setActiveTab] = useState('home'); // Track active tab
      
        // Function to track scroll position
        const handleScroll = () => {
          const section4 = document.getElementById('section4');
          const section5 = document.getElementById('section5');
      
          const section4Top = section4?.getBoundingClientRect().top;
          const section5Top = section5?.getBoundingClientRect().top;
      
          if (section5Top <= 0) {
            setActiveTab('service'); // Activate service tab when scrolled to Section 5 or later
          } else if (section4Top <= 0) {
            setActiveTab('home'); // Activate home tab until section 4
          }
        };
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
      
        return (
          <div>
            <Navbar activeTab={activeTab} />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 id="section4" />
            <Section5 id="section5" />
            <Section6 />
          </div>
        );
      };
      
      export default App;