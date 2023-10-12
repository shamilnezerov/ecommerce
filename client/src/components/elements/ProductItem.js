import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {
  HeartFilled,
  HeartOutlined,
  ShoppingCartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { FallOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "../../assets/scss/ProductItem.scss";
import Image from "../../assets/image/image";
import { Switch } from "antd";
const { Meta } = Card;


//++++++++++++++++++++++++
function ProductItem() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );

  let [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  function addWishlist(currentProduct) {
    // localStorage'dan mevcut wishliste erişim
    let existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  
    // Eklenecek ürünün mevcut wishlist içinde olup olmadığını kontrol et
    let existingProductIndex = existingWishlist.findIndex(
      (product) => product.id === currentProduct.id
    );
  
    if (existingProductIndex !== -1) {
      // Ürün zaten wishliste ekliyse, listeden çıkar
      existingWishlist.splice(existingProductIndex, 1);
    } else {
      // Ürün wishlist'e eklenmediyse, ekleyin
      existingWishlist.push({ ...currentProduct, inWishlist: true });
    }
  
    // Yeniden localStorage'a kaydedin ve state'i güncelleyin
    localStorage.setItem("wishlist", JSON.stringify(existingWishlist));
    setWishlist(existingWishlist);
  }
  

  function addToCart(currentProduct) {
    // localStorage'dan mevcut sepeti alın
    let existingBasket = JSON.parse(localStorage.getItem("basket")) || [];
  
    // Eklenecek ürünün mevcut sepette olup olmadığını kontrol edin
    let existingProductIndex = existingBasket.findIndex(
      (product) => product.id === currentProduct.id
    );
  
    if (existingProductIndex !== -1) {
      // Ürün zaten sepetteyse, miktarını artırın ve sepetteki verileri güncelleyin
      existingBasket[existingProductIndex].count++;
    } else {
      // Ürün sepette değilse, ekleyin
      existingBasket.push({ ...currentProduct, count: 1 });
    }
  
    // Yeniden localStorage'a kaydedin ve state'i güncelleyin
    localStorage.setItem("basket", JSON.stringify(existingBasket));
    setBasket(existingBasket);
  }
  
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const Alert = () => {
    swal({
      title: "Təşəkkürlər!",
      text: "Məhsulunuz səbətə əlavə olundu!",
      icon: "success",
    });
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/detail");
  };
const wishlistDB = localStorage.getItem("wishlist")
console.log("🚀 ~ file: ProductItem.js:84 ~ ProductItem ~ wishlistDB:", wishlistDB)


  return (
    <div className="productContainer p-2 pb-4 row">
      {products.map((product) => (
        <>
          <div key={product.id} className="col-lg-4 col-md-6 col-sm-12">
            <div className="card-body">
            <img className="card-img-top" src={product.img} alt="Card image" />
            
              <h4 className="card-title">{product.name}</h4>
              <h5 className="card-text">{product.price} <span>azn</span></h5>
              <div className="btnCont">
                <div onClick={() => handleLike(product)} data-id={product.id}>
                  <span onClick={() => addWishlist(product)}>
                    {wishlist.find((pr) => pr.id === product.id) ? <HeartFilled style={{color:"red"}} className="heartButton"/> : <HeartFilled style={{color:"green"}} className="heartButton"/>}
                  </span>
                </div>
                <div
                  onClick={() => {
                    Alert();
                  }}
                >
                  <ShoppingCartOutlined
                  className="basketButton"
                    onClick={() => addToCart(product)}
                    data-id={product.id}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default ProductItem;



