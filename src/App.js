import React from 'react';
import './App.css';
import './assets/styles.css';

import AppRoutes from './routes/index.js';
import { Link } from 'react-router-dom';
function App() {
	return (
		<div className='App'>
			<nav className='navbar navbar-expand-lg navbar-dark bg-success text-white'>
				<div className='container'>
					<Link className='navbar-brand' to='/'>
						Navbar
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link className='nav-link' to={'/home'}>
									Trang chủ
								</Link>
							</li>

							<li className='nav-item'>
								<Link className='nav-link' to={'/contact'}>
									Liên hệ
								</Link>
							</li>

							<li className='nav-item'>
								<Link className='nav-link' to={'/todo-app'}>
									Todo
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to={'/product-list'}>
									Danh sách sản phẩm
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className='container'>
				<AppRoutes />
			</div>
		</div>
	);
}
export default App;

// b1: tạo page ProductList.js và gán vào path 'product-list' tại routers/index.js
// b2: Tạo component tên là ProductCard dùng để hiển thị data (tương tự với TodoCard)
// b3: Dùng vòng lặp để render ra mảng <ProductCard></ProductCard> trong 'ProductList.js' (tương tự logic render TodoCard)
