import { useId } from "react";
import filerscustom from "./filterscustom.module.css";
import { Usefilters } from "../Hooks/Usefilters";

export const Filters = () => {
  const { filters, setFilters } = Usefilters();
  const maxpricefilterid = useId();
  const categoryfilterid = useId();
  const sizefilterid = useId();
  //  const stockControlerid = useId();

  const handleChangueMinPrince = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangueCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  const handleChangueSize = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      size: event.target.value,
    }));
  };

  //  const handleStockControler = (event) => {
  //    setFilters((prevstock) => ({
  //     ...prevstock,
  //   stock: event.target.value,
  //}));
  //};

  const sizevalibles = ["all", "30", "31", "32", "33"];

  return (
    <section className={filerscustom.navcontainer}>
      <li>
        <label htmlFor={categoryfilterid}></label>

        <select id={categoryfilterid} onChange={handleChangueCategory}>
          <option value="all">Todas</option>
          <option value="remeras">Remeras</option>
          <option value="zapatillas">Zapatillas</option>
        </select>
      </li>
      <li>
        <label htmlFor={maxpricefilterid}>Desde:</label>

        <input
          type="range"
          id={maxpricefilterid}
          min={1000}
          max={10000}
          onChange={handleChangueMinPrince}
        />
        <span>{filters.minPrice} </span>
      </li>

      <li>
        <label htmlFor={sizefilterid}></label>

        <select id={sizefilterid} onChange={handleChangueSize}>
          {sizevalibles.map((size, index) => (
            <option value={size} key={index}>
              {size}
            </option>
          ))}
        </select>
      </li>
    </section>
  );
};
