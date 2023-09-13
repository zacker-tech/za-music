import useWindowSize from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";

function useIsMobile() {
  const { width } = useWindowSize();
  const isMobileLayout = width < breakpoints.md;

  return isMobileLayout;
}

export default useIsMobile;
