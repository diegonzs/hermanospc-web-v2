import * as React from 'react';
import theme from 'theme';

export const OptionChild = ({
	isTextArea = false,
	hasMaxWidth = true,
	options = [],
	value,
	onChangeHandler,
	name,
	title,
	isDisabled = false,
}) => {
	return (
		<div className="container">
			{!!options.length ? (
				<>
					<select
						name={name}
						id={name}
						value={value}
						onChange={(e) => onChangeHandler(e.target.value)}
						className="select"
					>
						{options.map((option) => (
							<option value={option} id={option}>
								{option}
							</option>
						))}
					</select>
				</>
			) : (
				<label htmlFor={name}>
					<span className={`label ${!!value ? 'label-fill' : ''}`}>{title}</span>
					{isTextArea ? (
						<textarea
							disabled={isDisabled}
							value={value}
							id={name}
							className="input textarea"
							onChange={(e) => onChangeHandler(e.target.value)}
						/>
					) : (
						<input
							type="text"
							disabled={isDisabled}
							value={value}
							id={name}
							className="input"
							onChange={(e) => onChangeHandler(e.target.value)}
						/>
					)}
				</label>
			)}
			<style jsx>{`
				.container {
					border-radius: 14px;
					background-color: ${theme.colors.dark.backgrounds.childCard};
					max-width: ${!!options.length && hasMaxWidth ? '253px' : '100%'};
					width: 100%;
					height: 100%;
					overflow: hidden;
					position: relative;
				}
				.label {
					position: absolute;
					font-size: ${theme.typografy.placeholder}px;
					color: ${theme.colors.dark.texts.text};
					left: 16px;
					top: 13px;
					transition: all ease-in 0.25s;
				}
				.label-fill {
					font-size: 10px;
					transform: translateY(-8px);
				}
				.input {
					background-color: ${theme.colors.dark.backgrounds.childCard};
					width: 100%;
					height: 100%;
					border: none;
					padding: ${!!value ? '20px 16px 8px' : '14px 16px'};
					font-size: ${theme.typografy.placeholder}px;
					color: ${theme.colors.dark.texts.text};
				}
				.label-select {
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: ${theme.typografy.placeholder}px;
					color: ${theme.colors.dark.texts.text};
				}
				.textarea {
					height: 100%;
				}
				.select {
					display: block;
					font-size: ${theme.typografy.placeholder}px;
					color: ${theme.colors.dark.texts.text};
					width: 100%;
					max-width: 100%;
					margin: 0;
					border: none;
					height: 100%;
					cursor: pointer;
					display: flex;
					padding-left: 16px;
					align-items: center;
					-moz-appearance: none;
					-webkit-appearance: none;
					appearance: none;
					background-color: ${theme.colors.dark.backgrounds.childCard};
				}
			`}</style>
		</div>
	);
};

export const Option = ({ children }) => {
	return (
		<div className="container">
			{children}
			<style jsx>{`
				.container {
					width: 100%;
					display: grid;
					grid-auto-flow: column;
					grid-gap: 16px;
					background-color: ${theme.colors.dark.backgrounds.card};
					border-radius: 20px;
					padding: 16px;
				}
			`}</style>
		</div>
	);
};
