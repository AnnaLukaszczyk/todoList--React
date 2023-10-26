import styled from 'styled-components';

export const StyledSection = styled.section`
	margin: 20px 0;
	background-color: #fff;
	box-shadow: 0 0 7px #ccc;
`;

export const Header = styled.header`
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;   
    }
`;

export const Title = styled.h2`
	margin: 0;
	padding: 20px;
	font-weight: 900;

    @media (max-width: 576px) {
		font-size: 20px;
}
`;

export const SectionBody = styled.div`
	min-height: 40px;
	border-top: 2px solid #ddd;
`;