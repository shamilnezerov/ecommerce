import React from "react";
import { Card } from "antd";
import "../../assets/scss/Blog.scss";
import Image from "../../assets/image/image";
import { ShareAltOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
function BlogDetail() {
  let navigate = useNavigate();
  const date = "01/01/2023";
  const title = "Üzünüzə qulluq edin";
  const image = "";
  // const content =
  //   "";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container d-flex justify-content-center mb-5 mt-5">
      <Card
        hoverable
        style={{ width: "60%" }}
        cover={<img alt={title} src={Image.Gilemeyve} />}
      >
        <Meta title={title} className="pb-3" />
        <p className="blog-date">{date}</p>
        <p className="">
          1.  Yayı həyəcanla gözləməyin səbəbi sadəcə dəniz, qum, günəş və istirahət deyil, həm də giləmeyvələrdir! Canlı rənglərə sahib olan giləmeyvələr həm damaq zövqümüzə, həm də göz zövqümüzə xitab edirlər. Bəs bu qədər sevərək yediyimiz giləmeyvələrin faydalarını bilirikmi? Bu bloqda onların faydalarından bəhs edəcəyik.
        </p>
        <p> Çiyələk <br/>
         2.  Şipşirin ləzzəti ilə bir çoxumuzun əvəzedilməz giləmeyvəsi olan çiyələyi gündə bir porsiya qəbul etdikdə sadəcə bədənimizi yox, həm də ruhumuzu qidalandıracağıq. Çünki çiyələk sakitləşdirici və stresi yox edən xüsusiyyətə sahibdir. Çiyələk yeyərkən endorfin yüksəlir və eynilə şokoladda olduğu kimi özümüzü xoşbəxt hiss edirik, beləliklə, stresimiz də azalır.
Bundan əlavə, çiyələk qanı təmizləyir, həzm sistemini yaxşılaşdırır, metabolizmi sürətləndirir,  qaraciyər üçün faydalıdır, ən əsası isə diş ətini güclənirir və ağızda pis qoxu yaranmasının qarşısını alır.
        </p>
       
        <p>Moruq <br/>
        3.  Kəmşirin dadı ilə könlümüzü fəth edən moruq sözün əsl mənasında təbii dərmandır. Keçmişdən elə bu günə qədər böyüklərin soyuqdəymə üçün çaya moruq mürəbbəsi qatmaq ənənəsi heç təsadüfi deyil. Bol vitamin və mineral tərkibli moruq həm də çox güclü antioksidantdır. Moruq təbii ağrıkəsicidir. Bədənin müxtəlif nahiyələrində olan ağrılar zamanı təbii halda qəbul etmək və ya yarpaqlarından və özündən çay dəmləmək sizə yaxşı təsir edəcəkdir. Bundan əlavə moruq xərçəngin qarşısını alır, yaddaşı gücləndirir, yüksək təzyiqi aşağı salır. Hazırda tam da moruğun ayıdır. Sizə yaxın marketimizə gələrək dadlı moruqları əldə edə bilərsiniz.</p>
        <Card className="detail_footer  p-2">
          <ArrowLeftOutlined
            className=" back_icon"
            onClick={() => {
              navigate("/blog");
            }}
          />

          <Button
            type="primary"
            className="blogdetail_btn "
            onClick={showModal}
          >
            <ShareAltOutlined className="blog_icon  y-auto" />
          </Button>
        </Card>
        <Modal
          title="Sosial media"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          className="w-25"
        >
          {/* <Card>
            <TwitterOutlined style={{ fontSize: "24px", color: "#1DA1F2" }} />
          </Card>
          <Card>
            <WhatsAppOutlined style={{ fontSize: "24px", color: "#25D366" }} />
          </Card>
          <Card>
            <InstagramOutlined style={{ fontSize: "24px", color: "#E1306C" }} />
          </Card>
          <Card>
            <FacebookOutlined style={{ fontSize: "24px", color: "#1877F2" }} />
          </Card> */}
          <Card onClick={() => window.open("https://twitter.com/BravoAZS")}>
            <TwitterOutlined style={{ fontSize: "24px", color: "#1DA1F2" }} />
          </Card>
          <Card
            onClick={() =>
              window.open(
                "https://www.youtube.com/channel/UCUDPswYmu2SCJQCr7qDdtwA"
              )
            }
          >
            <YoutubeOutlined style={{ fontSize: "24px", color: "#25D366" }} />
          </Card>

          <Card
            onClick={() =>
              window.open("https://www.instagram.com/bravosupermarketaz/")
            }
          >
            <InstagramOutlined style={{ fontSize: "24px", color: "#E1306C" }} />
          </Card>
          <Card
            onClick={() =>
              window.open(
                "https://www.facebook.com/BravoSupermarketAz/?locale=ru_RU"
              )
            }
          >
            <FacebookOutlined style={{ fontSize: "24px", color: "#1877F2" }} />
          </Card>
        </Modal>
      </Card>
    </div>
  );
}

export default BlogDetail;
// import React, { useEffect, useState } from "react";

// import { Card } from "antd";
// import "../../assets/scss/Blog.scss";
// import client from "../../api/api";
// import { ShareAltOutlined, ArrowLeftOutlined } from "@ant-design/icons";
// import {
//   FacebookOutlined,
//   InstagramOutlined,
//   TwitterOutlined,
//   YoutubeOutlined,
// } from "@ant-design/icons";
// import { Button, Modal } from "antd";
// import { useNavigate } from "react-router-dom";
// const { Meta } = Card;
// function BlogDetail() {
//   let navigate = useNavigate();
//   const [data, setData]=useState ({})
// const [isModalOpen, setIsModalOpen] = useState(false);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   useEffect(()=>{
//     getdata()
 
//    }, []);

//    const getdata = async()=>{
//     await client.get('blogdetail').then((res)=>{
//       if(res.data.length){
//         setData(res.data[0])
//       }
//     })
//   }

//   return (
//     <div className="container d-flex justify-content-center mb-5 mt-5">
//       <Card
//         hoverable
//         style={{ width: "60%" }}
//         cover={<img alt={data.title} src={data.image} />}
//       >
//         <Meta title={data.title} className="pb-3" />
//         <p className="blog-date">{data.date}</p>
//         <p className="">
//         {data.text}
//         </p>
//         <p>
//         {data.text}

//         </p>
//         <p>
//         {data.text}

//         </p>
//         <p>{data.text}
// </p>
//         <ol>
//           <li> {data.text}</li>
//           <li>{data.text}</li>
//           <li>{data.text}</li>
//           <li>{data.text}</li>
//         </ol>
//         <p> {data.text}</p>
//         <p>
//         {data.text}

//         </p>
//         <Card className="detail_footer  p-2">
//           <ArrowLeftOutlined
//             className=" back_icon"
//             onClick={() => {
//               navigate("/blog");
//             }}
//           />

//           <Button
//             type="primary"
//             className="blogdetail_btn "
//             onClick={showModal}
//           >
//             <ShareAltOutlined className="blog_icon  y-auto" />
//           </Button>
//         </Card>
//         <Modal
//           title="Sosial media"
//           open={isModalOpen}
//           onOk={handleOk}
//           onCancel={handleCancel}
//           className="w-25"
//         >
//           {/* <Card>
//             <TwitterOutlined style={{ fontSize: "24px", color: "#1DA1F2" }} />
//           </Card>
//           <Card>
//             <WhatsAppOutlined style={{ fontSize: "24px", color: "#25D366" }} />
//           </Card>
//           <Card>
//             <InstagramOutlined style={{ fontSize: "24px", color: "#E1306C" }} />
//           </Card>
//           <Card>
//             <FacebookOutlined style={{ fontSize: "24px", color: "#1877F2" }} />
//           </Card> */}
//           <Card onClick={() => window.open("https://twitter.com/BravoAZS")}>
//             <TwitterOutlined style={{ fontSize: "24px", color: "#1DA1F2" }} />
//           </Card>
//           <Card
//             onClick={() =>
//               window.open(
//                 "https://www.youtube.com/channel/UCUDPswYmu2SCJQCr7qDdtwA"
//               )
//             }
//           >
//             <YoutubeOutlined style={{ fontSize: "24px", color: "#25D366" }} />
//           </Card>

//           <Card
//             onClick={() =>
//               window.open("https://www.instagram.com/bravosupermarketaz/")
//             }
//           >
//             <InstagramOutlined style={{ fontSize: "24px", color: "#E1306C" }} />
//           </Card>
//           <Card
//             onClick={() =>
//               window.open(
//                 "https://www.facebook.com/BravoSupermarketAz/?locale=ru_RU"
//               )
//             }
//           >
//             <FacebookOutlined style={{ fontSize: "24px", color: "#1877F2" }} />
//           </Card>
//         </Modal>
//       </Card>
//     </div>
//   );
// }

// export default BlogDetail;
