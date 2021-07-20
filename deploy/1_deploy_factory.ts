import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
 

//WBNB 0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  await deploy("UniswapV2Factory", {
    from: deployer,
    args: ["0xCD5b38549139E4cf0D9322c4f1C802f89901227b"],
    log: true,
    skipIfAlreadyDeployed: true,
  })
}
export default func
func.tags = ["UniswapV2Factory"]
