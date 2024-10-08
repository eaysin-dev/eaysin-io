import { Portfolio } from "@/app/data/portfolio";
import Carepro from "./details/carepro/carepro";
import ReactFormInteractions from "./details/react-form-interaction";
import Tuso from "./details/tuso";

export const portfolioDetails = (portfolio: Portfolio) => {
  return {
    reactFormInteractions: <ReactFormInteractions />,
    tuso: <Tuso portfolio={portfolio} />,
    carepro: <Carepro portfolio={portfolio} />,
    hybridChart: "",
    techConnect: "",
    fileDrive: "",
    ecommarce: "",
    jsUtility: "",
  };
};
