import { useMediaQuery } from "../useMediaQuery";

export const useIsSmall = () => useMediaQuery("(min-width: 920px)");
export const useIsXL = () => useMediaQuery("(min-width: 1280px)");
