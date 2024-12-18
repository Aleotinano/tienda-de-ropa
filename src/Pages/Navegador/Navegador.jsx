import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { CartContext } from "../../Componentes/Cart";
import { ProductsItem as ProductsInCart } from "../../Componentes/ProductosItem";
import navcustom from "./navcustom.module.css";

export const Navegador = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [isCartVisible, setCartVisible] = useState(false);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const toggleNavbar = () => setNavbarVisible(!isNavbarVisible);
  const toggleCart = () => setCartVisible(!isCartVisible);

  return (
    <nav className={navcustom.Navegador}>
      {/* Menú de navegación */}

      <MdMenu
        className={`${navcustom.icon} ${navcustom.closemenu}`}
        onClick={toggleNavbar}
      />

      <div
        className={`${navcustom.Links} ${
          isNavbarVisible ? navcustom.Navbarshow : navcustom.hideOffcanvas
        }`}
      >
        <IoCloseOutline
          className={`${navcustom.icon} ${navcustom.closemenu}`}
          onClick={toggleNavbar}
        />
        <Link to="/Home" className={navcustom.StrongLinks}>
          Home
        </Link>
        <Link to="/Productos" className={navcustom.StrongLinks}>
          Productos
        </Link>
        <Link to="/Categorias" className={navcustom.StrongLinks}>
          Categorias
        </Link>
        <Link to="/Contactos" className={navcustom.StrongLinks}>
          Contactos
        </Link>
      </div>

      {/* Íconos de usuario y carrito */}
      <div className={navcustom.UserOptions}>
        <FaShoppingCart onClick={toggleCart} className={navcustom.icon} />
        <Link to="/Login">
          <FaUser className={navcustom.icon} />
        </Link>
        <Link to="/Register" className={navcustom.registerButton}>
          Register
        </Link>
      </div>

      {/* Carrito de compras */}
      <div
        className={`${navcustom.offcanvas} ${
          isCartVisible ? navcustom.showOffcanvas : navcustom.hideOffcanvas
        }`}
      >
        <IoCloseOutline className={navcustom.botonclose} onClick={toggleCart} />
        <h3>Carro de compras</h3>
        <div className={navcustom.cartContainer}>
          {cart.length > 0 ? (
            cart.map((product) => (
              <ProductsInCart
                key={product.id}
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))
          ) : (
            <strong>No hay productos en el carrito.</strong>
          )}
        </div>
      </div>
    </nav>
  );
};
