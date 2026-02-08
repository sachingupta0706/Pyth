// import Image from "next/image";
// import classes from "./bestDentist.module.css";
// import { IoChevronBackOutline } from "react-icons/io5";
// import { IoIosArrowForward } from "react-icons/io";

// export default function DentistSection() {
//   return (
    // <section className={classes.section}>
    //   <div className={classes.container}>
    //     <span className={classes.label}>OUR BEST DENTIST</span>

    //     <h2 className={classes.heading}>
    //       Dentist For Specialized And <br />
    //       <span>Experienced Dentistry</span>
    //     </h2>

    //     <div className={classes.slider}>
    //       <button className={classes.arrowLeft} aria-label="Previous">
    //         <IoChevronBackOutline />
    //       </button>

    //       <div className={classes.cards}>
    //         <div className={classes.card}>
    //           <Image
    //             src="/Dentist1.svg"
    //             alt="Dentist 1"
    //             width={240}
    //             height={300}
    //             className={classes.image}
    //           />
    //         </div>

    //         <div className={`${classes.card} ${classes.active}`}>
    //           <Image
    //             src="/Dentist2.svg"
    //             alt="Dentist 2"
    //             width={240}
    //             height={300}
    //             className={classes.image}
    //           />
    //         </div>

    //         <div className={classes.card}>
    //           <Image
    //             src="/Dentist3.svg"
    //             alt="Dentist 3"
    //             width={240}
    //             height={300}
    //             className={classes.image}
    //           />
    //         </div>
    //       </div>

    //       <button className={classes.arrowRight} aria-label="Next">
    //         <IoIosArrowForward />
    //       </button>
    //     </div>

    //     <div className={classes.dots}>
    //       <span></span>
    //       <span className={classes.activeDot}></span>
    //       <span></span>
    //     </div>
    //   </div>
    // </section>

    
//   )
// }

import Image from "next/image";
import styles from "./bestDentist.module.css"

export default function DentistSection() {
  return (
    <section className={styles.container}>

      {/* Heading */}
      <div className={styles.heading}>
        <div className={styles.tag}>OUR BEST DENTIST</div>
        <div className={styles.text}>
          Dentist For Specialized And <br />
          <div className={styles.span1}>
          Experienced Dentistry</div>
        
        </div>
      </div>

 
      {/* <div className={styles.contentRow}> */}

 
        {/* <button className={styles.arrow}>‹</button> */}

        {/* Cards */}
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>

            <div className={styles.image1}>
              
            <Image src="/Doctor3.svg" alt="" width={289} height={275} /></div>
            <div className={styles.cardInfo1}>
              <h1 className={styles.text21}>Dr. Marteen Bryant</h1>
              <h1 className={styles.desc}>General dentist</h1>
            </div>
          </div>

          <div className={`${styles.card} ${styles.activeCard}`}>
             <div className={styles.image1}>
            <Image src="/Doctor2.svg" alt="" width={289} height={275} /></div>
            <div className={styles.cardInfo2}>
              <h1 className={styles.text22}>Dr. Julia Barbara</h1>
              <h1 className={styles.desc1}>General dentist</h1>
              
              <div className={styles.socials}>
                <span><Image src="/INSTAGRAM1.svg" alt="" width={41} height={40}/></span>
                <span><Image src="/FACEBOOK1.svg" alt="" width={41} height={40}/></span>
                <span><Image src="/LINKDLN1.svg" alt="" width={41} height={40}/></span>
                <span><Image src="/TWITTER1.svg" alt="" width={41} height={40}/></span>
            </div>
            </div>
          </div>

          <div className={styles.card}>
             <div className={styles.image1}>
            <Image src="/Doctor1.svg" alt="" width={289} height={275} /></div>
            <div className={styles.cardInfo1}>
              <h1 className={styles.text21}>Dr. Natasha Smith</h1>
              <h1 className={styles.desc}>General dentist</h1>
            {/* </div> */}
            </div>
          </div>
        </div>
<div className={styles.button1}>
  <span className={styles.A}><Image src="/FORWARD1.svg" alt="" width={42} height={40}/></span>
  <span className={styles.B}><Image src="/BACK1.svg" alt="" width={42} height={40}/></span>
</div>
    
        {/* <button className={styles.arrow}>›</button> */}

      {/* </div> */}

      {/* Slider */}
      {/* <div className={styles.slider}>
        <span></span>
        <span className={styles.active}></span>
        <span></span>
      </div> */}

      <div className={styles.slider}>
        <Image src="/SLIDER.svg" alt="" width={142} height={14}/>
      </div>

    </section>
  );
}

