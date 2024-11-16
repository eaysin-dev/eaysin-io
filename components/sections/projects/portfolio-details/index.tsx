import { PortfolioDetail } from "@/constant/interfaces";
import { generateUId } from "@/utils/shortid";
import { ReactNode } from "react";
import Carepro from "./carepro";
import { careproDocs } from "./carepro/data";
import EcommarcePlatform from "./ecommarce-platform";
import { ecommarceDocs } from "./ecommarce-platform/data";
import FileDrive from "./file-drive";
import { fileDriveDocs } from "./file-drive/data";
import { hybridChartDocs } from "./hybrid-chart/data";
import HybridChart from "./hybrid-chart/index";
import ReactFormInteractions from "./react-form-interaction";
import { reactFormInteractionsDocs } from "./react-form-interaction/data";
import SyncWorkbench from "./sync-workbench";
import { syncWorkbenchDocs } from "./sync-workbench/data";
import TechConnect from "./tech-connect";
import { techConnectDocs } from "./tech-connect/data";
import Tuso from "./tuso";
import { tusoDocs } from "./tuso/data";

export interface PortfolioDetails {
  id: string;
  category: "reactJs" | "nextJs" | "library" | "fullStack";
  data: PortfolioDetail;
  component: ReactNode;
}

type PortfolioDetailsReturn =
  | { [key: string]: PortfolioDetails }
  | PortfolioDetails[];

export const portfolioDetails = (
  asArray: boolean = false
): PortfolioDetailsReturn => {
  const detailsObject: { [key: string]: PortfolioDetails } = {
    reactFormInteractions: {
      id: generateUId(),
      category: "library",
      data: reactFormInteractionsDocs,
      component: <ReactFormInteractions />,
    },
    syncWorkbench: {
      id: generateUId(),
      category: "fullStack",
      data: syncWorkbenchDocs,
      component: <SyncWorkbench />,
    },
    tuso: {
      id: generateUId(),
      data: tusoDocs,
      category: "reactJs",
      component: <Tuso />,
    },
    carepro: {
      id: generateUId(),
      category: "reactJs",
      data: careproDocs,
      component: <Carepro />,
    },
    hybridChart: {
      id: generateUId(),
      category: "reactJs",
      data: hybridChartDocs,
      component: <HybridChart />,
    },
    techConnect: {
      id: generateUId(),
      category: "reactJs",
      data: techConnectDocs,
      component: <TechConnect />,
    },
    fileDrive: {
      id: generateUId(),
      category: "nextJs",
      data: fileDriveDocs,
      component: <FileDrive />,
    },
    ecommarce: {
      id: generateUId(),
      category: "reactJs",
      data: ecommarceDocs,
      component: <EcommarcePlatform />,
    },
  };

  if (asArray) {
    return Object.values(detailsObject);
  }

  return detailsObject;
};
