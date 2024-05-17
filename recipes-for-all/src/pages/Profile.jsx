function Profile() {
  const regs = [
    { solutionID: "solutionid1", registrationID: "water" },
    { solutionID: "solutionid1", registrationID: "air" },
    { solutionID: "solutionid2", registrationID: "earth" },
    { solutionID: "solutionid3", registrationID: "fire" },
  ];
  console.log(...Object.values(regs));

  return <div>Profile</div>;
}

export default Profile;
