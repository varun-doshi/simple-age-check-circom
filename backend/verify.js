import { groth16 } from "snarkjs";
import generateProof from "./proof.js";
import { readFileSync } from "fs";

const verifyProof = async () => {
  const { proof, publicSignals } = await generateProof(19, 18);
  console.log("Public signal", publicSignals);
  console.log("Proof:", proof);
  const verificationKey = JSON.parse(
    readFileSync("../circuits/ageCheck.vkey.json")
  );

  const result = await groth16.verify(verificationKey, publicSignals, proof);

  if (publicSignals[0] == "1") {
    console.log("Verified successfully");
  } else {
    console.log("SCAM");
  }
};

verifyProof()
  .then(() => {
    console.log("End of program");
    process.exit(1);
  })
  .catch((error) => {
    console.error("Verification failed:", error);
    process.exit(1);
  });
