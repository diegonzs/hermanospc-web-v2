import React, { useState } from 'react';
import { Layout } from 'components/layout';
import { MainBtn } from 'components/common/main-btn';
import RightPanelProfileSettings from './right-panel';
import { UploadImageInput } from 'components/common/form/upload-image-input';
import { Select } from 'components/common/form/select';
import { Input } from 'components/common/form/input';

const ProfileSettings = () => {
	const [counter, setCounter] = useState(0);
	const [platformArray, setPlatformArray] = useState([]);
	const [SpecsArray, setSpecsArray] = useState([]);
	const addPlatformEntry = () => {
		setPlatformArray((oldArray) => [...oldArray, counter]);
		setCounter((prevCounter) => prevCounter + 1);
	};
	const removePlatformEntry = (index) => () => {
		setPlatformArray((oldArray) => [...oldArray.filter((item) => item !== index)]);
	};
	const addSpecsArray = () => {
		setSpecsArray((oldArray) => [...oldArray, counter]);
		setCounter((prevCounter) => prevCounter + 1);
	};
	const removeSpecsArray = (index) => () => {
		setSpecsArray((oldArray) => [...oldArray.filter((item) => item !== index)]);
	};
	return (
		<Layout rightPanel={<RightPanelProfileSettings />}>
			<form>
				<div className="header-menu">
					<h1 className="title">Settings</h1>
					<div className="menu-buttons">
						<button className="cancel-button">Cancel</button>
						<MainBtn text="Save" type="default" />
					</div>
				</div>
				<div>
					<h1 className="sub-title">Profile Image</h1>
					<UploadImageInput />
				</div>
				<div>
					<h1 className="sub-title">Platforms</h1>
					<div className="inline-inputs-container">
						<div className="inline-inputs">
							<Select
								values={['Instagram', 'TikTok', 'Youtube', 'Facebook', 'Twitter', 'Twitch', 'Patreon', 'Website']}
							/>
							<Input placeholder="URL" CustomStyle={{ marginLeft: '1rem', maxWidth: '522px' }} />
						</div>
					</div>
					{platformArray.map((index) => (
						<div key={index} className="inline-inputs-container">
							<div className="inline-inputs">
								<Select
									values={['Instagram', 'TikTok', 'Youtube', 'Facebook', 'Twitter', 'Twitch', 'Patreon', 'Website']}
								/>
								<Input placeholder="URL" CustomStyle={{ marginLeft: '1rem', maxWidth: '522px' }} />
							</div>
							<button type="button" className="remove-button" onClick={removePlatformEntry(index)}>
								<span>X</span>
							</button>
						</div>
					))}
					<MainBtn onClick={addPlatformEntry} text="Add Platform" type="default" />
				</div>
				<div className="mt-3">
					<h1 className="sub-title">Specs</h1>
					<div className="inline-inputs-container">
						<div className="inline-inputs">
							<Select values={['CPU', 'GPU']} />
							<Input placeholder="Title" CustomStyle={{ marginLeft: '1rem' }} />
							<Input placeholder="URL" CustomStyle={{ marginLeft: '1rem' }} />
						</div>
					</div>
					{SpecsArray.map((index) => (
						<div key={index} className="inline-inputs-container">
							<div className="inline-inputs">
								<Select values={['CPU', 'GPU']} />
								<Input placeholder="Title" CustomStyle={{ marginLeft: '1rem' }} />
								<Input placeholder="URL" CustomStyle={{ marginLeft: '1rem' }} />
							</div>
							<button type="button" className="remove-button" onClick={removeSpecsArray(index)}>
								<span>X</span>
							</button>
						</div>
					))}
					<MainBtn onClick={addSpecsArray} text="Add Element" type="default" />
				</div>
			</form>
			<style jsx>{`
				@import 'variables.scss';
				.title {
					letter-spacing: 0px;
					color: #efefef;
					font-size: 40px;
				}
				.sub-title {
					font-size: 16px;
					letter-spacing: 0px;
					color: #efefef;
					margin-top: 2rem;
					margin-bottom: 1rem;
				}
				.menu-buttons {
					display: flex;
				}
				.cancel-button {
					letter-spacing: 0px;
					color: #efefef;
					background: transparent;
					border: 0;
					outline: none;
					font-size: 16px;
					margin-right: 3rem;
					cursor: pointer;
				}
				.inline-inputs-container {
					margin-bottom: 1.5rem;
				}
				.inline-inputs {
					width: 100%;
					align-items: center;
					background: #131318;
					border-radius: 20px;
					padding: 15px;
					margin-right: 1rem;
				}
				.remove-button {
					border: none;
					background: #20262d;
					border-radius: 12px;
					width: 44px;
					height: 44px;
					outline: none;
					font-size: 20px;
					color: #0effa3;
					cursor: pointer;
				}
				.mr-1 {
					margin-left: 1rem;
				}
				.mt-3 {
					margin-top: 3rem;
				}
				@media (min-width: 768px) {
					.header-menu {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}
					.inline-inputs {
						display: flex;
					}
					.inline-inputs-container {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}
				}
			`}</style>
		</Layout>
	);
};

export default ProfileSettings;
