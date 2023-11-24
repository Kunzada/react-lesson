import React from 'react';
import s from "./aboutCity.module.scss"
 import img1 from "../../assets/1.jpg"
 import img3 from "../../assets/2.jpg"
const AboutCity = () => {
    return (<>
        <div className={s.row}>
        <div className={s.column}>
            <img src={img1} alt="" />
        </div>
     
      <div className={s.column}>
          <img src={img1} alt="Snow" />
        </div>
         <div className={s.column}>
          <img src={img1} alt="Mountains"/>
        </div>
        
      </div> 
      </>
    );
}

export default AboutCity;
