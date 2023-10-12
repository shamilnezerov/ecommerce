import React, { useEffect, useState } from "react";
import "../../assets/scss/Aboutus.scss";
import client from "../../api/api";

function Aboutstore() {
  const [data, setData] = useState({});
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    await client.get("aboutstore").then((res) => {
      if (res.data.length) {
        setData(res.data[0]);
      }
    });
  };

  return (
    <div className="about-container">
      <div className="card">
        <div className="lines"></div>

        <div className="content">
          <div className="details">
            <h2>Məqsədimiz</h2>

            <div>
              <p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.aboutstore,
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutstore;
