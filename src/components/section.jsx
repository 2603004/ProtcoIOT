import React,{useState,useEffect} from 'react'
import Navbar from './Navbar';
import'./section1.css'
import'./section2.css'
import'./section3.css'
import'./section4.css'
import'./section5.css'
import'./section6.css'
import'./section7.css'
import'./section8.css'
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
import card_img1 from '../../src/assets/card_img1.png'
import card_img2 from '../../src/assets/card_img2.png'
import card_img3 from '../../src/assets/card_img3.png'
import card_img4 from '../../src/assets/card_img4.png'
import cloud_iot from'../../src/assets/cloud_iot.png'
import iot_img from'../../src/assets/iot_img.jpg'
import image from'../../src/assets/image.png'
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
      <div className="section-wrapper">
      <div className="section-header">
        <h1 className="section-title">From Vision to Reality </h1>  
        <p className="section-description">
        With Protco, turn your IoT ideas into a seamless reality, giving your business the competitive edge it deserves. Protco’s Tech Team will work with your team to translate an idea to a prototype and eventually converting it to commercial product ready for mass production.
        </p>
        <img
          img src={iot_img}
          className="section-header-img"
        />
        </div>
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
          Protco Smart IoT Platform provides flexibility to connect end user device to its cloud IoT Platform using various connectivity methods( ZigBee, WiFi, BLE, SigMesh, LoRaWAN Matter & Cellular) and communication protocols(like MQTT, HTTP)
          </h2>
        </div>
      </div>
    );
  };
  const Section5 = () => {
    return (
      <div className="section-wrapper">
      <div className="section-header">
        <h1 className="section-title">Protco Smart IoT Platform</h1>
        <p className="section-description">
        Protco Smart IoT platform is created to help make it simple and profitable for global enterprises by providing full range of IoT service including IoT software and hardware
        development on private IoT platform or 3rd party public IoT platform and make people from
        over the world realize the amazing power and potential of IoT technology.
        </p>
        <img
          img src={cloud_iot}
          className="section-header-img"
        />
        </div>
      <div class="cards-container-1">
        <div className="section5">
          <h2 className="section5-title">IoT complexity solved at every stage</h2>
          <img 
          src={card_img1}
          className="section5-img"/>
             <p className="section5-description">
             Manage the full IoT lifecycle from prototype to production with enterprise grade security throughout.Build high-quality mobile apps and cloud services, run fleet tests, deploy seamlessly, market
             to users, manage devices, data, configurations and updates, and analyse and grow your IoT business.
             </p>
          <a href="#"class="button">Learn More</a>
          <a href="#" class="arrow"><FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
    
      <div className="section5-1">
        <h2 className="section5-1-title">Build High Quality Branded Mobile App</h2>
        <img 
          src={card_img2}
          className="section5-1-img"/>
           <p className="section5-1-description">
           Empowering Your Vision: Tailored OEM Brand Apps by Protco Unlock bespoke, cutting-edge brand app solutions that cater to your unique innovation requirements. From seamless launch and updates to seamless integration with third-party ecosystems, Protco elevates
           enterprise efficiency with cost-effective, personalized smart apps.
        </p>
        <a href="#"class="button-1">Learn More</a>
        <a href="#" class="arrow-1"><FontAwesomeIcon icon={faArrowRight} /></a>
      </div>
     </div> 
    </div>
      );
    };
  const Section6 = () => {
      return (
        <div class="cards-container-2">
          <div className="section6">
            <h2 className="section6-title">Web control and management App</h2>
            <img 
          src={card_img3}
          className="section6-img"/>
               <p className="section6-description">
               A personalized and customized administration/management UI with powerful data visualization design, development and multi-terminal display capabilities, it allows to manage devices,       store, monitor and analyze data from thousands of IoT sources.
</p>
            <a href="#"class="button">Learn More</a>
            <a href="#" class="arrow"><FontAwesomeIcon icon={faArrowRight} /></a>
          </div>
      
        <div className="section6-1">
          <h2 className="section6-1-title">Matter App (Coming Soon)</h2>
          <img 
          img src={card_img4}
          className="section6-1-img"/>
             <p className="section6-1-description">
             Protco revolutionizes IoT connectivity through seamless Matter protocol integration,
             enhancing device interactions. Our innovative OEM app further streamlines the experience,
             redefining the way you engage with your smart devices.
          </p>
          <a href="#"class="button-1">Learn More</a>
          <a href="#" class="arrow-1"><FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
       </div> 
        );
      };
      const Section7 = () => {
        return (
          <section className="section7" id="section7-container">
            <h2 className="section7-title">
            Interconnect with global IoT ecosystems
            </h2>
            
            <div className="image">
              <img src={image} />
            </div>
          </section>
        );
      };
      const Section8 = () => {
        return (
          <section id="section8" className="section8-wrapper">
             <div className="section8-content">
            <p>Need to Know </p></div>
          <div className="section8-row">
            <div className="section8-item">
              <h1>Our Development Process?</h1>
              <p>
                We embrace a systematic approach ensuring high quality standards and timely delivery of projects. 
                From initial conception to final implementation, our team of experts work with you to transform your ideas into reality.
              </p>
              </div>
              <div className="section8-item">
              <h1>Why Choose Protco?</h1>
              <p>
                Choosing Protco means you’re opting for excellence, innovation, and commitment. 
                Our distinctive services and unparalleled support will empower your business, setting you on the path to success.
              </p>
              </div>
              <div className="section8-item">
              <h1>Custom Solutions?</h1>
              <p>
                We believe that every business is unique and requires customized solutions. 
                Our team of experts will work closely with you to develop tailor-made strategies and applications that suit your specific needs.
              </p>
              </div>
            </div>
          </section>
        );
      };
      
const App = () => {
        
        return (
          <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4/>
            <Section5 />
            <Section6 />
            <Section7/>
            <Section8/>
          </div>
        );
      };
      
      export default App;