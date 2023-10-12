import React, { useEffect, useState } from "react";
import "../../assets/scss/Aboutus.scss";
import Image from "../../assets/image/image";
import client from "../../api/api";
import Vision from "../elements/Vision";
import Mission from "../elements/Mission";
import Aboutstore from "./Aboutstore";

function Aboutus() {
	const [data, setData] = useState({});
	useEffect(() => {
		getdata();
	}, []);
	const getdata = async () => {
		await client.get("title").then((res) => {
			if (res.data.length) {
				setData(res.data[0]);
			}
		});
	};

	return (
		<div className="container about mt-4">
			<div className="row">
				<div className="col-lg-6">
					<h2 className="about-title">Haqqımızda</h2>
					<div>
						<p>
							XXI əsrin birinci on illiyində ölkəmizdə, əsasən də
							Bakıda mövcud olan pərakəndə satış bazarında kifayət
							qədər boşluqlar hiss olunurdu.
						</p>
						<p>
							"Veysəloğlu" distribütor şirkətinin qurucuları Aydın
							Veysəloğlu, İlqar Talıbov və&nbsp;Bəxtiyar
							Allahverdi 2011-ci il mayın 7-də pərakəndə sektorda
							yaranan fürsətləri dəyərləndirərək "Araz"
							supermarketləri şəbəkəsini qurmağı qərara aldılar.
						</p>
						<p>
							Məqsədi "Siz harada, “Araz” orada sloqanı" ilə
							Azərbaycanın bütün bölgələrində “Araz”
							supermarketlər şəbəkəsinin yaradılmasına nail olmaq,
							bununla da bütün pərakəndə sektorunu əhatə etməyi
							hədəf götürən “Araz" supermarketlər şəbəkəsi ilk
							olaraq 2011-ci ildə Bakıda 4 filialla xidmətə
							başladı.
						</p>
					</div>
				</div>
				<div className="col-lg-6">
					<img
						src={Image.Araz}
						alt=""
						style={{ width: "100%", height: "100%" }}
					/>
				</div>
			</div>

			<div className="d-flex aboutcard ">
				<Vision/>
				<Mission />
				<Aboutstore />
			</div>
		</div>
	);
}

export default Aboutus;
