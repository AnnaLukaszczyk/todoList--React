import styled from "styled-components";

export const Paragraph = styled.p`
	margin: 0;
	padding: 10px 20px;
	text-align: justify;
	line-height: 1.5;
	text-indent: 30px;

	@media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
		font-size: 14px;
		padding: 6px 8px;
	}
`;
