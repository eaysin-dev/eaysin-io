import { Portfolio } from "@/app/data/portfolio";
import Carepro from "./details/carepro/carepro";
import FileDrive from "./details/file-drive";
import HybridChart from "./details/hybrid-chart";
import ReactFormInteractions from "./details/react-form-interaction";
import TechConnect from "./details/tech-connect";
import Tuso from "./details/tuso";

export const portfolioDetails = (portfolio: Portfolio) => {
  return {
    reactFormInteractions: <ReactFormInteractions />,
    tuso: <Tuso portfolio={portfolio} />,
    carepro: <Carepro portfolio={portfolio} />,
    hybridChart: <HybridChart />,
    techConnect: <TechConnect />,
    fileDrive: <FileDrive />,
    ecommarce: "",
    jsUtility: "",
  };
};
