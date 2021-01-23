import { Title } from 'components/common/title';
import * as React from 'react';
import { OptionChild } from '../option';

export const Information = () => {
	const [username, setUsername] = React.useState('diegonzs');
	const [bio, setBio] = React.useState(
		`Hi I'm Andres. I'm a product designer and this is my setup, I play and work here.`
	);
	const [country, setCountry] = React.useState('Venezuela');
	return (
		<div className="container">
			<Title type="h3">Information</Title>
			<div className="form-container">
				<OptionChild value={username} name="username" title="username" onChangeHandler={setUsername} />
				<div className="textarea-container">
					<OptionChild isTextArea value={bio} name="bio" title="Bio" onChangeHandler={setBio} />
				</div>
				<div className="select-container">
					<OptionChild
						hasMaxWidth={false}
						name="country"
						options={['Venezuela', 'Colombia']}
						value={country}
						title="username"
						onChangeHandler={setCountry}
					/>
				</div>
			</div>
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					width: 100%;
				}
				.form-container {
					display: grid;
					grid-gap: 24px;
					margin-top: 40px;
				}
				.textarea-container {
					min-height: 120px;
				}
				.select-container {
					min-height: 48px;
				}
			`}</style>
		</div>
	);
};
