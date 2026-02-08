import Image from "next/image";
import classes from "./bannerSection.module.css";
import Link from "next/link";

export default function TopInfoBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.ContainerLogo}>
        <Link href="/" className={classes.ImageLogo} aria-label="Go to home">
          <Image src="/Frame.png" alt="" width={42} height={42} priority />
        </Link>
        <div className={classes.TextLogo}>
          <div className={classes.brand}>Confident</div>
          <div className={classes.sub}>Dental Care Clinic</div>
        </div>
      </div>

      <div className={classes.info}>
        <div className={classes.location}>
          <span className={classes.icon1}>
            <Image src="/location1.svg" alt="loca" width={19} height={24} />
          </span>

          <span className={classes.text1}>St. Sanguin Number 40</span>
        </div>
        <div className={classes.phone}>
          <span className={classes.icon2}>
            <Image src="/phone1.svg" alt="loca" width={24} height={24} />
          </span>
          <span className={classes.text2}>+1234 - 4567 - 890</span>
        </div>
      </div>

      <Link href="/#" className={classes.button}>
        <span className={classes.textbtn}>APPOINTMENT</span>
      </Link>
    </div>
  );
}
