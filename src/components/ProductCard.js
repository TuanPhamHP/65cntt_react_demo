import React from 'react';

export default function ProductCard({ product }) {
	return (
		<div className='col-3'>
			<div class='card'>
				<img src={product.image} class='card-img-top' alt='...' />
				<div class='card-body'>
					<h5 class='card-title'>{product.name}</h5>
					<h5 class='card-text'>{product.price}</h5>
					<p class='card-text'>{product.description}</p>
					<a href='#' class='btn btn-primary'>
						Buy now
					</a>
				</div>
			</div>
		</div>
	);
}
