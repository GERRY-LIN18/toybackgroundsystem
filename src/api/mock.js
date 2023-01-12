import Mock from "mockjs";

Mock.mock("/api/home/getData", () => {
  console.log("攔截成功");
  return 1;
});
