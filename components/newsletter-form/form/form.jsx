import { Input } from 'components/common/form/input';
import { MainBtn } from 'components/common/main-btn';
import * as React from 'react';
/**
 * @typedef {Object} FormProps
 * @property {() => void} [onSubmit]
 */

/**
 * @param {FormProps} props
 */
export const Form = ({ onSubmit }) => {
	return (
		<form
			className="form"
			action="POST"
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit && onSubmit();
			}}
		>
			<Input placeholder="Email Address" />
			<MainBtn text="Register" type="form" onClick={() => null} />
			<style jsx>{`
				.form {
					display: grid;
					grid-auto-rows: auto;
					grid-auto-flow: row;
					grid-row-gap: 16px;
					align-content: center;
				}
			`}</style>
		</form>
	);
};
