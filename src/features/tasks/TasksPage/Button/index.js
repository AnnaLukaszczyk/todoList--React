import styled from "styled-components";

export default styled.button`
	color: ${({ theme }) => theme.colors.mainButtons};
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 20px;
	transition: filter 0.3s;

	@media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
		padding: 0 0 20px 0;
	}
    
	@media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
		font-size: 14px;
	}
	&:hover {
		color: ${({ theme }) => theme.colors.mainButtonsHover};
	}

	&:disabled {
		color: ${({ theme }) => theme.colors.disabledButton};
		cursor: not-allowed;
	}
`;
