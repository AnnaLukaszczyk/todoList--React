import styled from "styled-components";

export const Span = styled.span`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
	padding: 20px;

    @media (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 0 20px 0;
}
`;

export const Button = styled.button`
	padding: 10px;
	color: teal;
	background: none;
	border: none;
	cursor: pointer;
	transition: color 0.5s;

    &:hover {
	color: rgb(0, 153, 153);
}

@media (max-width: 768px) {
		padding: 0;
}

@media (max-width: 576px) {
		font-size: 14px;
}

&:disabled {
	color: #ccc;
	cursor: not-allowed;
}

&:disabled:hover {
	color: #ccc;
}
`;
