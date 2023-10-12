
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import "../../assets/scss/WishList.scss";
import { CloseOutlined } from "@ant-design/icons";
import { Button} from "antd";
import swal from "sweetalert";
import Image from "../../assets/image/image";


//++++++++++++++++++++++
const WishList = () => {
  const navigate = useNavigate();
  let [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist"))
  );
  const removeProduct = (id) => {
    // Eski wishlist'i güncellenmiş haliyle filtreleyerek oluştur
    const updatedWishlist = wishlist.filter((product) => product.id !== id);
    console.log("🚀 ~ file: WishList.js:18 ~ removeProduct ~ updatedWishlist:", updatedWishlist)
    
    // State'i güncelle ve güncellenmiş wishlist'i localStorage'a kaydet
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };
  
  const clearBasket = () => {
    localStorage.removeItem("basket");
    setWishlist(null);
    Alert();
  };

  const Alert = () => {
    swal({
      title: "Təşəkkürlər!",
      text: "Səbətiniz artıq boşdur!",
      icon: "success",
    });
  };
  return (
    <div className="container wishlist pt-5 pb-5">
      <h1>Sevimli</h1>

      {wishlist !== null ? (
        <div className="cart">
          {wishlist.map((product) => (
            <div>
              <div className="table-responsive">
              <table className=" table table-bordered table-basket ">
                <thead>
                  <tr>
                  
                    <th>Şəkil</th>
                    <th>Ad</th>
                    <th>Qiymət</th>
                    <th>Say</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={product.id}>
                    
                    <td className="d-flex align-items-center">
                      <div className="bg-image pb-5">
                      {" "}
                      <img
                        src={product.img}
                        alt="bal"
                        className="basket_img"
                      />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <h5 className="y-auto pt-4">{product.name}</h5>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center pt-3">
                      <h2 className="">${product.price}</h2>
                      </div>
                    </td>
                    
                    <td className="pt-2 ">
                      <div className="x-auto text-center">
                      <CloseOutlined className="remove-item "
                        onClick={() => removeProduct(product.id)}
                      />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Button
                type="primary"
                onClick={() => {
                  clearBasket();
                  Alert();
                }}
              >
                 Məhsullari Sil!
              </Button>
              <Button className="basket_btn ms-3" onClick={() => {
  navigate("/basket");
}}>Səbətə Bax</Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
        <h3>Seçilmiş məhsullarınız yoxdur</h3>
        <p>Seçilmiş məhsul əlavə etmək üçün düyməni istifadə edin <BsHeartFill/></p>
        <button onClick={() => {
  navigate("/shop");
}}>Kataloga Keçin</button>
    </div>
      )}
    </div>
  );
};

export default WishList; 


