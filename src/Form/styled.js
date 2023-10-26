import styled from "styled-components";

export const StyledForm = styled.form`
	display: grid;
	grid-template-columns: 1fr 120px;
	grid-gap: 20px;
	padding: 20px;

    @media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const Input = styled.input`
	padding: 10px;
	border: 1px solid #ddd;
`;

export const Button = styled.button`
	padding: 10px;
	background-color: teal;
	color: #fff;
	border: none;
	cursor: pointer;
	transition: background-color .5s, transform .5s;

    &:hover {
	background-color: rgb(0, 153, 153);
	transform: scale(1.1);

    @media (max-width: 768px) {
		transform: scale(1.04);
	}
}
`;