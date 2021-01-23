import { IconBtn } from 'components/icon-btn';
import * as React from 'react';
import { Option, OptionChild } from '../option';

const PlatformOption = ({ name, value, updatePlatforms }) => {
	const [optionName, setOptionName] = React.useState(name || '');
	const [optionValue, setOptionValue] = React.useState(value || '');
	const hasChanged = optionName !== name || optionValue !== value;

	const handlerSubmit = () => {
		if (hasChanged) {
			updatePlatforms(optionName, optionValue);
		} else {
			console.log('delete');
		}
	};

	return (
		<li>
			<Option>
				<OptionChild
					options={['instagram', 'facebook', 'twitter']}
					onChangeHandler={setOptionName}
					value={optionName}
					name="channel"
					title="Channel"
				/>
				<OptionChild
					onChangeHandler={setOptionValue}
					value={optionValue}
					name="url"
					title="URL"
					isDisabled={!optionName}
				/>
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
				.custom-button {
					margin-left: 20px;
					width: 44px;
					height: 44px;
					border-radius: 12px;
				}
			`}</style>
		</li>
	);
};

/**
 * @typedef {object} platform
 * @property {string} name
 * @property {string} value
 * @typedef {object} PlatformsListProps
 * @property {platform[]} platforms
 * @property {(name: string, value: string) => void} updatePlatforms
 */
/**
 *
 * @param {PlatformsListProps} props
 */
export const PlatformsList = ({ platforms, updatePlatforms }) => {
	React.useEffect(() => {
		console.log({ platforms });
	}, []);
	return (
		<>
			<ul>
				{platforms.map((platform) => (
					<PlatformOption name={platform.name} value={platform.value} updatePlatforms={updatePlatforms} />
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
