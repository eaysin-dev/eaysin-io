import Carepro from "./details/carepro";
import EcommarcePlatform from "./details/ecommarce-platform";
import FileDrive from "./details/file-drive";
import HybridChart from "./details/hybrid-chart/index";
import JsUtility from "./details/js-utility";
import ReactFormInteractions from "./details/react-form-interaction";
import TechConnect from "./details/tech-connect";
import Tuso from "./details/tuso";

export const portfolioDetails = () => {
  return {
    reactFormInteractions: <ReactFormInteractions />,
    tuso: <Tuso />,
    carepro: <Carepro />,
    hybridChart: <HybridChart />,
    techConnect: <TechConnect />,
    fileDrive: <FileDrive />,
    ecommarce: <EcommarcePlatform />,
    jsUtility: <JsUtility />,
  };
};
