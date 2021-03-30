import React, { useState } from 'react';

export const UploadImageInput = ({ previous_img }) => {
	const [img_preview, set_img_preview] = useState(null);
	const handleChange = (e) => {
		set_img_preview(URL.createObjectURL(e.target.files[0]));
	};
	return (
		<div className="upload-container">
			{img_preview || previous_img ? <div className="image-preview" /> : null}
			<label>
				{img_preview ? 'Change' : <img width="60" src="/images/icons/plus.svg" alt="add image" />}
				<input className="custom-file-input" type="file" onChange={(e) => handleChange(e)} />
			</label>
			<style jsx>{`
				.upload-container {
					display: flex;
				}
				.image-preview {
					max-width: 163px;
					width: 100%;
					height: 101px;
					background: url('${img_preview ? img_preview : previous_img}') center center;
					background-repeat: no-repeat;
					background-size: cover;
					border-radius: 16px;
					margin-right: 1.5rem;
				}
				label {
					border-radius: 16px;
					max-width: 163px;
					width: 100%;
					height: 101px;
					background: #20262d;
					color: #bfbfbf;
					letter-spacing: 0px;
					font-size: 32px;
					font-weight: 600;
					text-align: center;
					padding-top: 1.4rem;
				}
				.custom-file-input {
					visibility: hidden;
				}
			`}</style>
		</div>
	);
};
