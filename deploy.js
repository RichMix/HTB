const hre = require("hardhat");

async function main() {
    // Get the Setup contract factory
    const Setup = await hre.ethers.getContractFactory("Setup");
    
    // Deploy the contract
    const setup = await Setup.deploy(); // This returns a Promise, so we must wait

    // Wait for the deployment to finish
    await setup.deployed();

    console.log("Setup contract deployed at:", setup.address);

    // Interact with the Setup contract to fetch the CryoPod address
    const cryoPodAddress = await setup.TARGET();
    console.log("CryoPod deployed at:", cryoPodAddress);

    // Test if isSolved works with an empty string
    const isSolved = await setup.isSolved("");
    console.log("isSolved with empty string:", isSolved);
}

// Run the deployment script and handle errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

