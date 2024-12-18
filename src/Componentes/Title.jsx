import titlecustom from "./titlecustom.module.css";
import header1 from "../assets/header1.jpg";
import header2 from "../assets/header2.jpg";
import header3 from "../assets/header3.jpg";
import header5 from "../assets/header5.jpg";

export const Title = () => {
  return (
    <div className={titlecustom.Homecontainer}>
      <div className={titlecustom.ContentContainer}>
        {/* Columna Izquierda: Título y pequeñas imágenes */}
        <div className={titlecustom.LeftContainer}>
          <div className={titlecustom.TitleContainer}>
            <h1>VESTEA</h1>
            <h2>Tienda de zapatos</h2>
          </div>
          <div className={titlecustom.img1}>
            <img src={header3} alt="" className={titlecustom.imagensheader} />
            <img src={header1} alt="" className={titlecustom.imagensheader} />
            <img src={header2} alt="" className={titlecustom.imagensheader} />
          </div>
        </div>

        {/* Columna Derecha: Imagen grande */}
        <div className={titlecustom.RightContainer}>
          <img
            src={header5}
            alt=""
            className={titlecustom.imagensheaderHeight}
          />
        </div>
      </div>
    </div>
  );
};
