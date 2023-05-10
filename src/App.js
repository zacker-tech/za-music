import { ThemeProvider } from "styled-components";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Music,
  Pause,
  Play,
  Search,
  SkipLeft,
  SkipRight,
  Users,
  Volume,
} from "components/ui/Icons";
import {
  ButtonText,
  MainTitle,
  SectionSubtitle,
  SectionTitle,
  SubText,
  Text,
} from "components/ui/Typography";
import { GlobalStyles } from "styles/Global";
import { theme } from "styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainTitle>Hello</MainTitle>
      <SectionTitle>Hello</SectionTitle>
      <SectionSubtitle>Hello</SectionSubtitle>
      <Text>Hello</Text>
      <SubText>Hello</SubText>
      <ButtonText>Hello</ButtonText>
      <br />
      <Play />
      <SkipLeft />
      <SkipRight />
      <Pause />
      <Volume />
      <Music />
      <ArrowLeft />
      <ArrowRight />
      <Heart />
      <Users />
      <Search />
    </ThemeProvider>
  );
}

export default App;
