import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Contact from '../pages/Contact';
import Todo from '../pages/Todo';
import ProductList from '../pages/ProductList';

export default function AppRoutes() {
	return (
		<div>
			<Routes>
				<Route path='/home' element={<HomePage></HomePage>}></Route>
				<Route path='/contact' element={<Contact></Contact>}></Route>
				<Route path='/todo-app' element={<Todo></Todo>}></Route>
				<Route path='/product-list' element={<ProductList></ProductList>}></Route>
			</Routes>
		</div>
	);
}
