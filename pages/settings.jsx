import * as React from 'react';
import { Layout } from 'components/layout';
import { HeadTitle } from 'components/head-title';
import { Title } from 'components/common/title';
import { MainBtn } from 'components/common/main-btn';
import { PlatformsList } from 'components/settings/platforms-list';
import { SpecsList } from 'components/settings/specs-list';
import { AvatarForm } from 'components/settings/avatar-form';
import { Information } from 'components/settings/information/information';

const OptionBox = ({ children, title }) => {
	return (
		<div className="container">
			<Title type="h3">{title}</Title>
			{children}
			<style jsx>{`
				.container {
					display: grid;
					grid-auto-flow: row;
					grid-gap: 16px;
				}
			`}</style>
		</div>
	);
};

const defaultPlatforms = [
	{
		name: 'instagram',
		value: 'https://instagram.com/diegonzs',
	},
	{
		name: 'facebook',
		value: 'https://facebook.com/diegonzs',
	},
];

const defaultSpecs = [
	{
		type: 'CPU',
		title: 'Ryzen 5 3600X',
		url: 'https://amz.com/asdi324nkq',
	},
];

const Settings = () => {
	const [platforms, setPlatforms] = React.useState(defaultPlatforms);
	const [specs, setSpecs] = React.useState(defaultSpecs);

	/**
	 * Updates the list of platforms
	 * @param {string} name
	 * @param {string} value
	 */
	const updatePlatforms = (name, value) => {
		const platformIndex = platforms.findIndex((platform) => platform.name === name);
		if (platformIndex >= 0) {
			const newPlatforms = platforms.map((platform) => {
				if (platform.name === 'name') {
					return {
						...platform,
						value,
					};
				} else {
					return { ...platform };
				}
			});
			setPlatforms(newPlatforms);
		} else {
			setPlatforms([...platforms, { name, value }]);
		}
	};

	/**
	 * Updates the list of specs
	 * @param {import('components/settings/specs-list').Spec} spec
	 */
	const updateSpecs = ({ title, url, type }) => {
		console.log({ title, url, type });
	};

	return (
		<Layout rightPanel={<Information />}>
			<HeadTitle>Settings</HeadTitle>
			<div className="container">
				<OptionBox title="Profile Image">
					<AvatarForm />
				</OptionBox>
				<OptionBox title="Platforms">
					<PlatformsList platforms={platforms} updatePlatforms={updatePlatforms} />
					<MainBtn text="Add Platform" onClick={() => null} minWidth="170" />
				</OptionBox>
				<OptionBox title="Specs">
					<SpecsList specs={specs} updateSpecs={updateSpecs} />
					<MainBtn text="Add Element" onClick={() => null} minWidth="170" />
				</OptionBox>
			</div>
			<style jsx>{`
				.container {
					display: grid;
					grid-gap: 40px;
				}
			`}</style>
		</Layout>
	);
};

export default Settings;
