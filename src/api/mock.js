import Mock from "mockjs";
import homeData from "@/api/mockServerData/home";

Mock.mock("/api/home/getData", homeData.getStatisticalData);
