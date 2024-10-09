import Carepro from "./carepro";
import EcommarcePlatform from "./ecommarce-platform";
import FileDrive from "./file-drive";
import HybridChart from "./hybrid-chart/index";
import JsUtility from "./js-utility";
import ReactFormInteractions from "./react-form-interaction";
import TechConnect from "./tech-connect";
import Tuso from "./tuso";

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
