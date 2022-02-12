import tw, { styled } from 'twin.macro';

interface IMainContainer {
  primary?: boolean;
}
export const MainContainer = styled.main<IMainContainer>(({ primary }) => [
  tw`bg-green-500`,
  primary && tw`bg-yellow-500`
]);
