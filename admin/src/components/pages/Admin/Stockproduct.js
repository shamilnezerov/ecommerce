

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function StockProduct() {
  const [columns, setColumns] = useState([
    'id',
    'img',
    'name',
    'price',
    'count',
    'fullName',
    'email',
    'actions',
  ]);
  const [products, setProducts] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3030/order')
      .then(res => {
        const products = res.data.flatMap(order => order.products);
        const newProducts = products.map(product => {
          const order = res.data.find(order =>
            order.products.some(p => p.id === product.id),
          );
          const { fullName, email, id } = order.infos;
          return { ...product, fullName, email, id };
        });
        setProducts(newProducts);
      })
      .catch(err => console.log(err));
  }, []);

  function handleDelete(id) {
    const conf = window.confirm('Do you want to delete?');
    if (conf) {
      setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
      axios
        .delete(`http://localhost:3030/order/${id}`)
        .then(res => {
          alert('Product is deleted');
        })
        .catch(err => console.log(err));
    }
  }

  function handleViewOrder(id) {
    const order = products.find(product => product.id === id);
    setOrderDetails(order);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Sipariş Ettiğiniz Ürünler</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products && products.map((product, i) => (
            <tr key={i}>
              <td>{product.id}</td>
              <td>
                <img src={product.img} alt={product.name} height="50px" />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.count}</td>
              <td>{product.fullName}</td>
              <td>{product.email}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleViewOrder(product.id)}
                >Adress info</button>
                  Sipariş Detayları
               </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {orderDetails && (
        <div className="card mt-3">
          <div className="card-header">
            <h3>Sipariş Detayları</h3>
          </div>
          <div className="card-body">
            <p>
              <strong>Sipariş Numarası:</strong> {orderDetails.id}
            </p>
            <p>
              <strong>Ürün Adı:</strong> {orderDetails.name}
            </p>
            <p>
              <strong>Adet:</strong> {orderDetails.count}
            </p>
            <p>
              <strong>Fiyat:</strong> {orderDetails.price}
            </p>
            <p>
              <strong>Sipariş Veren Kişi:</strong> {orderDetails.fullName}
            </p>
            <p>
              <strong>Email:</strong> {orderDetails.email}
            </p>
            <Link to="/" className="btn btn-primary">
              Geri Dön
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default StockProduct;


