import { groth16 } from "snarkjs";

const generateProof = async (userAge, ageLimit) => {
  const { proof, publicSignals } = await groth16.fullProve(
    {
      userAge,
      ageLimit,
    },
    "../circuits/ageCheck.wasm",
    "../circuits/ageCheck.zkey"
  );
  // console.log(proof);
  // console.log(publicSignals);
  return { proof, publicSignals };
};

// generateProof().then(() => {
//   console.log("Proof generated");
//   process.exit(1);
// });

export default generateProof;
