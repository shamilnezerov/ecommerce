// import React from "react";
// import { Card } from "antd";
// import "../../assets/scss/Blog.scss";
// import Image from "../../assets/image/image";
// import { useNavigate } from "react-router-dom";
// const { Meta } = Card;
// function Blog() {
//   const image = "";
//   const title = "Yayın sevimliləri: Giləmeyvələr";
//   const date = "01/01/2023";
//   const text =
//   "Yayı həyəcanla gözləməyin səbəbi sadəcə dəniz, qum, günəş və istirahət deyil, həm də giləmeyvələrdir! Canlı rənglərə sahib olan giləmeyvələr həm damaq zövqümüzə, həm də göz zövqümüzə xitab edirlər.";
//   let navigate = useNavigate();
//   return (
//     <div className="container d-flex justify-content-center mb-5 mt-5">
//       <Card
//         hoverable
//         style={{ width: "60%" }}
//         cover={<img alt={title} src={Image.Gilemeyve} />}
//       >
//         <Meta title={title} className="pb-3" />
//         <p className="blog-date">{date}</p>
//         <p>{text}</p>
//         <a
//           className="blog_btn"
//           onClick={() => {
//             navigate("/blogdetail");
//           }}
//         >
//           Daha ətraflı
//         </a>
//       </Card>
//     </div>
//   );
// }

// export default Blog;

// // import React, { useEffect, useState } from "react";
// // import { Card } from "antd";
// // import { useNavigate } from "react-router-dom";
// // import client from "../../api/api";
// // import "../../assets/scss/Blog.scss";

// // const { Meta } = Card;

// // function Blog() {
// //   const navigate = useNavigate();
// //   const [data, setData]=useState ({})

// //   useEffect(()=>{
// //     getdata()
 
// //    }, []);
// //    const getdata = async()=>{
// //      await client.get('blog').then((res)=>{
// //        if(res.data.length){
// //          setData(res.data[0])
// //        }
// //      })
// //    }

// //   return (
// //     <div className="container blog">
  
// //       <Card
// //       className="cardBlog"
// //         hoverable
// //         style={{ width: "25%" }}
// //         cover={<img alt={data.title} src={data.image} />}
// //       >
// //         <Meta title={data.title} className="pb-3" />
// //         <p className="blog-date">{data.date}</p>
// //         <p>{data.text}</p>
// //         <a
// //           className="blog_btn"
// //           onClick={() => {
// //             navigate("/blogdetail");
// //           }}
// //         >
// //           Daha ətraflı
// //         </a>
// //       </Card>

// //       <Card
// //       className="cardBlog"
// //         hoverable
// //         style={{ width: "25%" }}
// //         cover={<img alt={data.title} src={data.image} />}
// //       >
// //         <Meta title={data.title} className="pb-3" />
// //         <p className="blog-date">{data.date}</p>
// //         <p>{data.text}</p>
// //         <a
// //           className="blog_btn"
// //           onClick={() => {
// //             navigate("/blogdetail");
// //           }}
// //         >
// //           Daha ətraflı
// //         </a>
// //       </Card>
// //       <Card
// //       className="cardBlog"
// //         hoverable
// //         style={{ width: "25%" }}
// //         cover={<img alt={data.title} src={data.image} />}
// //       >
// //         <Meta title={data.title} className="pb-3" />
// //         <p className="blog-date">{data.date}</p>
// //         <p>{data.text}</p>
// //         <a
// //           className="blog_btn"
// //           onClick={() => {
// //             navigate("/blogdetail");
// //           }}
// //         >
// //           Daha ətraflı
// //         </a>
// //       </Card>
// //       <Card
// //       className="cardBlog"
// //         hoverable
// //         style={{ width: "25%" }}
// //         cover={<img alt={data.title} src={data.image} />}
// //       >
// //         <Meta title={data.title} className="pb-3" />
// //         <p className="blog-date">{data.date}</p>
// //         <p>{data.text}</p>
// //         <a
// //           className="blog_btn"
// //           onClick={() => {
// //             navigate("/blogdetail");
// //           }}
// //         >
// //           Daha ətraflı
// //         </a>
// //       </Card>
// //       <Card
// //       className="cardBlog"
// //         hoverable
// //         style={{ width: "25%" }}
// //         cover={<img alt={data.title} src={data.image} />}
// //       >
// //         <Meta title={data.title} className="pb-3" />
// //         <p className="blog-date">{data.date}</p>
// //         <p>{data.text}</p>
// //         <a
// //           className="blog_btn"
// //           onClick={() => {
// //             navigate("/blogdetail");
// //           }}
// //         >
// //           Daha ətraflı
// //         </a>
// //       </Card>
// //       <Card
// //       className="cardBlog"
// //         hoverable
// //         style={{ width: "25%" }}
// //         cover={<img alt={data.title} src={data.image} />}
// //       >
// //         <Meta title={data.title} className="pb-3" />
// //         <p className="blog-date">{data.date}</p>
// //         <p>{data.text}</p>
// //         <a
// //           className="blog_btn"
// //           onClick={() => {
// //             navigate("/blogdetail");
// //           }}
// //         >
// //           Daha ətraflı
// //         </a>
// //       </Card>
  
// //     </div>
// //   );
// // }

// // export default Blog;






import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import client from "../../api/api";
import "../../assets/scss/Blog.scss";

const { Meta } = Card;
//+++++++++++++++++++++++++++++
function Blog() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  console.log("🚀 ~ file: Blog.js:50 ~ Blog ~ data:", data);
  
  useEffect(() => {
    getdata();
  }, []);
  
  const getdata = async () => {
    await client.get('blog').then((res) => {
      console.log("🚀 ~ file: Blog.js:58 ~ awaitclient.get ~ res:", res)
      if (res.data.length) {
        // Veriyi bir diziye dönüştür
        setData(res.data);
      }
    });
  };
  

  return (
    <div className="container blog">
  
      {
        data && data?.map((blog) => (
        <Card
        key={blog.id}
          className="cardBlog"
            hoverable
            style={{ width: "25%" }}
            cover={<img alt={blog.title} src={blog.image} />}
          >
            <Meta title={blog.title} className="pb-3" />
            <p className="blog-date">{blog.date}</p>
            <p>{blog.text}</p>
            <a
              className="blog_btn"
              onClick={() => {
                navigate("/blogdetail");
              }}
            >
              Daha ətraflı
            </a>
          </Card>))
      }
  
    </div>
  );
}

export default Blog;
