import { PortfolioDetail } from "@/constant/interfaces";
import { uuid } from "@/utils/shortid";
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
import TechConnect from "./tech-connect";
import { techConnectDocs } from "./tech-connect/data";
import Tuso from "./tuso";
import { tusoDocs } from "./tuso/data";

export interface PortfolioDetails {
  id: string;
  category: "reactJs" | "nextJs" | "library";
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
      id: uuid(),
      category: "library",
      data: reactFormInteractionsDocs,
      component: <ReactFormInteractions />,
    },
    tuso: {
      id: uuid(),
      data: tusoDocs,
      category: "reactJs",
      component: <Tuso />,
    },
    carepro: {
      id: uuid(),
      category: "reactJs",
      data: careproDocs,
      component: <Carepro />,
    },
    hybridChart: {
      id: uuid(),
      category: "reactJs",
      data: hybridChartDocs,
      component: <HybridChart />,
    },
    techConnect: {
      id: uuid(),
      category: "reactJs",
      data: techConnectDocs,
      component: <TechConnect />,
    },
    fileDrive: {
      id: uuid(),
      category: "nextJs",
      data: fileDriveDocs,
      component: <FileDrive />,
    },
    ecommarce: {
      id: uuid(),
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
