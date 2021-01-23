import { IconBtn } from 'components/icon-btn';
import * as React from 'react';
import { Option, OptionChild } from '../option';

/**
 * @typedef {object} Spec
 * @property {string} title
 * @property {string} type
 * @property {string} url
 * @typedef {object} SpecsList
 * @property {Spec[]} specs
 * @property {(spec: Spec) => void} updateSpecs
 */

/**
 * @typedef {Object} SpecsOptionProps
 * @property {string} title
 * @property {string} type
 * @property {string} url
 * @property {(spec: Spec) => void} updateSpecs
 */

/**
 *
 * @param {SpecsOptionProps} props
 */
const SpecsOption = ({ url, title, type, updateSpecs }) => {
	const [optionUrl, setOptionUrl] = React.useState(url || '');
	const [optionType, setOptionType] = React.useState(type || '');
	const [optionTitle, setOptionTitle] = React.useState(title || '');
	const hasChanged = optionUrl !== url || optionTitle !== title || optionType !== type;

	const handlerSubmit = () => {
		if (hasChanged) {
			updateSpecs({ url: optionUrl, type: optionType, title: optionTitle });
		} else {
			console.log('delete');
		}
	};

	return (
		<li>
			<Option>
				<OptionChild
					options={['CPU', 'RAM', 'PSU']}
					onChangeHandler={setOptionType}
					value={optionType}
					name="type"
					title="Type"
				/>
				<OptionChild
					onChangeHandler={setOptionTitle}
					value={optionTitle}
					name="title"
					title="Title"
					isDisabled={!optionType}
				/>
				<OptionChild onChangeHandler={setOptionUrl} value={optionUrl} name="url" title="URL" isDisabled={!optionType} />
			</Option>
			<IconBtn
				onClick={handlerSubmit}
				styles={{
					marginLeft: '20px',
					width: '44px',
					height: '44px',
					borderRadius: '12px',
				}}
			>
				{hasChanged ? 'S' : 'D'}
			</IconBtn>
			<style jsx>{`
				li {
					list-style: none;
					display: flex;
					align-items: center;
				}
				button {
					margin-left: 20px;
				}
			`}</style>
		</li>
	);
};

/**
 *
 * @param {SpecsList} props
 */
export const SpecsList = ({ specs, updateSpecs }) => {
	return (
		<>
			<ul>
				{specs.map((spec) => (
					<SpecsOption type={spec.type} title={spec.title} url={spec.url} updateSpecs={updateSpecs} />
				))}
			</ul>
			<style jsx>{`
				ul {
					display: grid;
					grid-gap: 20px;
					width: 100%;
				}
			`}</style>
		</>
	);
};
