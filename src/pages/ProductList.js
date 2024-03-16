import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function ProductList() {
	const [sortBy, setSortBy] = useState('');
	const [listData, setListData] = useState([
		{
			id: 1,
			name: 'Giày Trainer Dropset 2.0 Eartch',
			price: 35,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/b65a2dcc5e4140d09e3cbbaf9b886473_9366/gi%C3%A0y-trainer-dropset-2.0-earth.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
		{
			id: 2,
			name: 'Giày Trainer Dropset 2',
			price: 350,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/f574a527a4b74c20ba62ffada1df754a_9366/gi%C3%A0y-trainer-dropset-2.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
		{
			id: 3,
			name: 'Giày Alphabounce+',
			price: 24,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/304999ba3dd4461a8da35694b05f2be2_9366/gi%C3%A0y-alphabounce_-sustainable-bounce.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
		{
			id: 4,
			name: 'Giày Galaxy 6',
			price: 15,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/a5bc39ff24324facbd765c68a0a3c3e6_9366/gi%C3%A0y-galaxy-6.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
		{
			id: 5,
			name: 'Giày GAZELLE',
			price: 25,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d3948863a41405eb408674f0eb2b247_9366/gazelle.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
		{
			id: 6,
			name: 'Giày Ultraboost 1.0',
			price: 45,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/462311ac22f9422cbf0e9fa443fabfa2_9366/gi%C3%A0y-ultraboost-1.0.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
	]);

	const renderListData = () => {
		const computedArray = [...listData].sort((a, b) => {
			switch (sortBy) {
				case '1':
					return a.price - b.price;

				case '2':
					return b.price - a.price;

				default:
					return 0;
			}
		});

		return computedArray.map(item => {
			return <ProductCard key={item.id} product={item} />;
		});
	};

	const handleChangeSortPrice = event => {
		const value = event.target.value;
		setSortBy(value);
	};

	return (
		<div>
			<h1>Danh sách sản phẩm</h1>
			<div className='mb-3 '>
				<select onChange={handleChangeSortPrice} class='form-select' aria-label='Default select example'>
					<option selected disabled>
						Sắp xếp theo
					</option>
					<option value='1'>Giá tăng dần</option>
					<option value='2'>Giá giảm dần</option>
					<option value='3'>Mặc định</option>
				</select>
			</div>
			<div className='row'>{renderListData()}</div>
		</div>
	);
}
