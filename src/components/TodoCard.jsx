import React from 'react';

export default function TodoCard({ task, updateStatus }) {
	// status_id: 1 - Mới | 2 - Hoàn thành | 3 - Đã hủy.

	return (
		<div className='card mb-3'>
			<div className='card-body'>
				<p className='card-text'>{task.created_at}</p>
				<h5 className='card-title'>{task.content}</h5>
				<div className='d-flex gap-2'>
					{task.status_id === 1 ? (
						<button
							className='btn btn-success'
							onClick={() => {
								updateStatus(task, 2);
							}}
						>
							Hoàn thành
						</button>
					) : null}
					{task.status_id !== 3 ? (
						<button
							className='btn btn-danger'
							onClick={() => {
								updateStatus(task, 3);
							}}
						>
							Hủy
						</button>
					) : null}
					{task.status_id === 3 ? (
						<button
							className='btn btn-primary'
							onClick={() => {
								updateStatus(task, 1);
							}}
						>
							Làm mới
						</button>
					) : null}
				</div>
			</div>
		</div>
	);
}
