import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom';

interface IHeaderContainer {
  primary?: boolean;
}
export const HeaderContainer = styled.header<IHeaderContainer>(
  ({ primary }) => [tw`bg-red-500`, primary && tw`bg-yellow-500`]
);

interface INavContainer {}
export const NavContainer = styled.nav<INavContainer>(() => [tw`flex`]);

interface INavLink {
  active?: boolean;
}
export const NavLink = styled(Link)<INavLink>(({ active }) => [
  tw`text-green-500`,
  active && tw`text-blue-500`
]);
