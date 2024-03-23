import React, { useEffect, useState } from 'react';

export default function HomePage() {
	const [counter, setCounter] = useState(1);
	const [todo, setTodo] = useState({});
	const [listData, setListData] = useState([]);

	// const startGetListData = () => {
	// 	console.log('B1: Bắt đầu lấy dữ liệu');
	// };
	// const getListData = async () => {
	// 	// lấy data từ server;
	// 	return new Promise((resolve, reject) => {
	// 		setTimeout(() => {
	// 			console.log('B2: Dữ liệu đã lấy thành công');
	// 			resolve();
	// 		}, 2000);
	// 	});
	// };

	// const testFunction = () => {
	// 	console.log('B3: Toàn bộ dữ liệu đã được tải xuống');
	// };

	// useEffect(() => {
	// 	startGetListData();
	// 	getListData().then(testFunction);
	// }, []);

	// async-await
	// const startGetListData = () => {
	// 	console.log('B1: Bắt đầu lấy dữ liệu');
	// };
	const getListData = async () => {
		// lấy data từ server;
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log('B2: Dữ liệu đã lấy thành công');
				resolve({
					isSuccess: true,
					data: [],
				});
			}, 2000);
		});
	};

	// const testFunction = () => {
	// 	console.log('B3: Toàn bộ dữ liệu đã được tải xuống');
	// };
	// const initData = async () => {
	// 	// startGetListData();
	// 	const myResponse = await getListData();
	// 	console.log(myResponse);
	// 	// testFunction();
	// };

	// useEffect(() => {
	// 	getListData().then(
	// 		success => {
	// 			console.log('thành công');
	// 			console.log(success);
	// 		},
	// 		error => {
	// 			console.log('thất bại');
	// 			console.log(error);
	// 		}
	// 	);
	// }, []);

	const getListUser = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				console.log('lấy data thành công');
				// biến đổi data về dạng json và trả ra
				return response.json();
			})
			.then(json => {
				console.log(json);
				setListData(json);
				// nhận data từ 'then' đằng trước và lưu lại vào state
				// setTodo(json);
			});
	};
	useEffect(() => {
		getListUser();
	}, [counter]);

	const renderListData = () => {
		return listData.map((item, idx) => {
			return (
				<tr key={item.id}>
					<th scope='row'>{idx + 1}</th>
					<td>{item.name}</td>
					<td>---</td>
					<td>---</td>
				</tr>
			);
		});
	};

	return (
		<div>
			<h1>HomePage</h1>
			{counter}
			<button
				className='btn btn-primary'
				onClick={() => {
					setCounter(counter + 1);
				}}
			>
				+
			</button>
			<table class='table'>
				<thead>
					<tr>
						<th scope='col'>STT</th>
						<th scope='col'>Tên</th>
						<th scope='col'>Số điện thoại</th>
						<th scope='col'>Email</th>
					</tr>
				</thead>
				<tbody>{renderListData()}</tbody>
			</table>
		</div>
	);
}
