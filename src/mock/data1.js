import Mock from "mockjs";
Mock.setup({ timeout: "1000-4000" });

Mock.mock("data.php", {
  "data|3-15": [
    {
      "id|+1": 88,
      name: "@cname",
      "age|18-28": 0,
      "sex|1": ["男", "女"],
    },
  ],
});
