import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({ activeClassName }))`
	color: ${({ theme }) => theme.colors.lightTheme};
	text-decoration: none;
	transition: color .3s;
	padding: 20px;

	&.${activeClassName} {
		font-weight: bold;
	}
	&:hover {
		color: ${({ theme }) => theme.colors.mainButtons};
}
`;

export const List = styled.ul`
	background: ${({ theme }) => theme.colors.mainButtons};
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	list-style: none;
`;

export const Item = styled.li`
	padding: 20px 0;
	font-size: 18px;
	transition: background .3s;

	&:hover {
		background: ${({ theme }) => theme.colors.lightTheme};
}
`;
