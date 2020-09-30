import * as React from 'react';
import theme from 'theme';
import { Title } from '../title';

export const RadioButtons = ({ options, selectedOption, setOption }) => {
	return (
		<ul>
			{options.map((option) => (
				<li className={selectedOption === option.value ? 'selected' : ''} onClick={() => setOption(option.value)}>
					<div className="ball" />
					<Title type="h3">{option.label}</Title>
				</li>
			))}
			<style jsx>{`
				ul {
					display: grid;
					grid-row-gap: 24px;
					width: 100%;
					justify-content: center;
					li {
						display: flex;
						align-items: center;
						cursor: pointer;
						.ball {
							width: 16px;
							height: 16px;
							border: 3px solid ${theme.colors.dark.main.accent};
							position: relative;
							border-radius: 50%;
							margin-right: 24px;
							&:before {
								content: '';
								position: absolute;
								background-color: transparent;
								border-radius: 50%;
								width: 6px;
								height: 6px;
								top: calc(50% - 3px);
								left: calc(50% - 3px);
								transition: background-color 0.25s ease-in-out;
							}
						}
					}
					.selected {
						.ball {
							&:before {
								border-radius: 50%;
								background-color: ${theme.colors.dark.main.accent};
							}
						}
					}
				}
			`}</style>
		</ul>
	);
};
