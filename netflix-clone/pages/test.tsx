function MyPage() {
  const regs = [
    { solutionID: "hello" },
    { solutionID: "hello" },
    { key3: "voila" },
  ];
  const regs2 = [
    { solutionID: "banks" },
    { solutionID: "shanks" },
    { key3: "voila" },
  ];
  console.log(Object.groupBy(regs, (obj) => obj.solutionID));

  return <h1>hello new page</h1>;
}

export default MyPage;
