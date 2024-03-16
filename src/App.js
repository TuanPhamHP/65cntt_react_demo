import React, { useState } from 'react';
import './App.css';
import './assets/styles.css';
import buttonCss from './assets/button.module.css';
import ChildComponent from './components/ChildComponent.jsx';
import TodoCard from './components/TodoCard.jsx';
function App() {
	const [listData, setListData] = useState([
		{
			id: 1,
			name: 'Giày Trainer Dropset 2.0 Eartch',
			price: 3500000,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/b65a2dcc5e4140d09e3cbbaf9b886473_9366/gi%C3%A0y-trainer-dropset-2.0-earth.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
		{
			id: 2,
			name: 'Giày Trainer Dropset 2',
			price: 3500000,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/f574a527a4b74c20ba62ffada1df754a_9366/gi%C3%A0y-trainer-dropset-2.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
		{
			id: 3,
			name: 'Giày Alphabounce+',
			price: 2400000,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/304999ba3dd4461a8da35694b05f2be2_9366/gi%C3%A0y-alphabounce_-sustainable-bounce.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
		{
			id: 4,
			name: 'Giày Galaxy 6',
			price: 1500000,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/a5bc39ff24324facbd765c68a0a3c3e6_9366/gi%C3%A0y-galaxy-6.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
		{
			id: 5,
			name: 'Giày GAZELLE',
			price: 2500000,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d3948863a41405eb408674f0eb2b247_9366/gazelle.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
		{
			id: 6,
			name: 'Giày Ultraboost 1.0',
			price: 4500000,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/462311ac22f9422cbf0e9fa443fabfa2_9366/gi%C3%A0y-ultraboost-1.0.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
	]);

	const [todos, setTodos] = useState([
		{
			id: 1,
			content: 'Làm bài tập về nhà',
			status_id: 1,
			created_at: new Date().getTime(),
		},
		{
			id: 2,
			content: 'Tập gym',
			status_id: 2,
			created_at: new Date().setHours(2, 0, 0, 4),
		},
		{
			id: 3,
			content: 'Đi coffee',
			status_id: 3,
			created_at: new Date().setHours(2, 0, 0, 4),
		},
		{
			id: 4,
			content: 'Đi Chơi',
			status_id: 2,
			created_at: new Date().setHours(2, 0, 0, 4),
		},
	]);

	const [todoContent, setTodoContent] = useState('');

	const renderListData = status_id => {
		// lọc data có status_id thỏa mãn điều kiện
		const matchStatusTask = todos.filter(task => {
			return task.status_id === status_id;
		});
		// từ mảng đã lọc ở trên, ta map ra mảng component và in ra màn hình
		const myArray = matchStatusTask.map(task => {
			return <TodoCard key={task.id} task={task} updateStatus={updateStatus}></TodoCard>;
		});

		return myArray;
	};

	const updateStatus = (task, status_id) => {
		// chuyển task về status_id = 3;

		// xác định vị trí phần tử trong mảng dữ liệu ban đầu
		// b1 :  tìm vị trí phần tử tương ứng
		const index = todos.findIndex(todo => {
			return todo.id === task.id;
		});
		if (index === -1) {
			alert('không có phần tử thỏa mãn');
			return;
		}

		// b2: clone lại phần tử vừa tìm được và update status_id
		let obj = { ...todos[index] };
		obj.status_id = status_id;

		// b3: xóa phần tử tại vị trí tìm được ở bước 1 và thay thế bằng "obj"
		const newArray = [...todos];

		// dùng splice để replace data
		newArray.splice(index, 1, obj);

		setTodos(newArray);
	};

	// hàm xử lý sự kiện khi input thay đổi value
	const handleOnChangeContent = event => {
		const target = event.target;
		const value = target.value;
		setTodoContent(value);
	};

	const submitTodo = () => {
		if (!todoContent.trim()) {
			alert('Vui lòng nhập nội dung');
			return;
		}
		// format lại todoContent thành 1 object tương tự với model task
		const newTodo = {
			id: todos.length + 1,
			content: todoContent,
			status_id: 1,
			created_at: new Date().getTime(),
		};
		const newArray = [...todos, newTodo];
		setTodos(newArray);
		setTodoContent('');
	};

	return (
		<div className='App'>
			<div className='container'>
				<p className={buttonCss.myComponent}>Xin chào anh em nhé</p>
				<div className='row'>
					<div className='col-12 mb-3  d-flex  gap-2'>
						<div className='form-floating w-100'>
							<input
								value={todoContent}
								type='email'
								className='form-control w-100 d-block'
								id='floatingInput'
								placeholder='name@example.com'
								onChange={handleOnChangeContent}
							/>
							<label htmlFor='floatingInput'>Bạn muốn làm gì?</label>
						</div>
						<button className='btn btn-success' onClick={submitTodo}>
							Lưu
						</button>
					</div>

					<div className='col-4'>
						<h3 className='bg-primary text-center text-white rounded py-1'>Mới</h3>
						{renderListData(1)}
					</div>
					<div className='col-4'>
						<h3 className='bg-success text-center text-white rounded py-1'>Đã hoàn thành</h3>
						{renderListData(2)}
					</div>
					<div className='col-4'>
						<h3 className='bg-danger text-center text-white rounded py-1'>Đã hủy</h3>
						{renderListData(3)}
					</div>
				</div>
			</div>
			<div style={{ height: '100vh' }}></div>
		</div>
	);
}

// B1: Chuẩn bị danh sách dữ liệu ở App.jsx - done

// B2: Tạo component TodoCard.jsx tại ~/components/TodoCard.jsx - done

// B3: Trong TodoCard.jsx khởi tạo phần view với dữ liệu giả. - done

// B4: Export TodoCard và dùng vòng lặp để render trong App.jsx

export default App;
