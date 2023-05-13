import { ContentWrapper } from "components/Layout";
import IconButton from "components/ui/IconButton";
import { Logo, Search } from "components/ui/Icons";
import { SectionSubtitle } from "components/ui/Typography";
import { Link } from "react-router-dom";
import { LogoWrapper, Wrapper } from "./styled";

function Header() {
  return (
    <Wrapper>
      <ContentWrapper display="flex" items="center" content="space-between">
        <Link to="/">
          <LogoWrapper>
            <Logo />
            <SectionSubtitle>ZaMusic</SectionSubtitle>
          </LogoWrapper>
        </Link>
        <Link to="/search">
          <IconButton withBackground height={58} width={58}>
            <Search />
          </IconButton>
        </Link>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Header;
