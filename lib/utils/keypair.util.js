import { generateKeyPairSync } from "crypto";
import fs from "fs";
import path from "path";

const generateKeyPair = () => {
  const keyPair = generateKeyPairSync("rsa", {
    modulusLength: 4096, // bits - standard for RSA keys
    publicKeyEncoding: {
      type: "pkcs1", // "Public Key Cryptography Standards 1"
      format: "pem", // Most common formatting choice
    },
    privateKeyEncoding: {
      type: "pkcs1", // "Public Key Cryptography Standards 1"
      format: "pem", // Most common formatting choice
    },
  });

  // Create the public key file
  fs.writeFileSync(
    path.join(__dirname, "..", "resources", "id_rsa_pub.pem"),
    keyPair.publicKey
  );

  // Create the private key file
  fs.writeFileSync(
    path.join(__dirname, "..", "resources", "id_rsa_priv.pem"),
    keyPair.privateKey
  );
};

generateKeyPair();
