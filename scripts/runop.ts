// run a single op
// "yarn run runop [--network ...]"

import { ethers } from 'ethers'
import { AASigner, rpcUserOpSender } from '../src/AASigner'
import { TestCounter__factory, EntryPoint__factory, TikTrixEscrow__factory } from '../typechain'
import { parseEther } from 'ethers/lib/utils'
import { providers } from 'ethers'
import {
  ENTRYPOINT_0_7_0_ADDRESS,
  SIMPLE_ACCOUNT_FACTORY_ADDRESS,
  TEST_COUNTER_ADDRESS,
  TIKTRIX_ESCROW_ADDRESS
} from '../src/constants'
import 'dotenv/config';

(async () => {
  console.time('Total Execution Time');
  const startTime = Date.now();
  
  const rpcUrl = process.env.RPC_URL;
  const aaUrl = process.env.AA_URL;
  const aaIndex = parseInt(process.env.AA_INDEX ?? '0'); // an account can have multiple addresses (with different index)
  const signerPrivateKey = process.env.SIGNER_PRIVATE_KEY;

  if (rpcUrl == null || aaUrl == null || signerPrivateKey == null) {
    console.error('ERROR: must set RPC_URL, AA_URL, SIGNER_PRIVATE_KEY')
    process.exit(1)
  }

  console.time('Provider Setup');
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
  const signer = new ethers.Wallet(signerPrivateKey, provider)
  console.timeEnd('Provider Setup');

  console.time('EntryPoint Support Check');
  const aaProvider = new providers.JsonRpcProvider(aaUrl)
  const supportedEntryPoints: string[] = await aaProvider
    .send('eth_supportedEntryPoints', [])
    .then(ret => ret.map(ethers.utils.getAddress))
  console.timeEnd('EntryPoint Support Check');

  if (!supportedEntryPoints.includes(ENTRYPOINT_0_7_0_ADDRESS)) {
    console.error(`ERROR: ${aaUrl}does not support our EntryPoint`)
    process.exit(1)
  }

  console.time('AASigner Setup');
  const aaSigner = new AASigner(
    signer,
    ENTRYPOINT_0_7_0_ADDRESS,
    rpcUserOpSender(aaProvider, ENTRYPOINT_0_7_0_ADDRESS),
    SIMPLE_ACCOUNT_FACTORY_ADDRESS,
    aaIndex
  )
  console.timeEnd('AASigner Setup');

  console.time('Account Validation');
  const aaAccountAddress = await aaSigner.getAddress()
  const code = await provider.getCode(aaAccountAddress);
  console.timeEnd('Account Validation');

  if (code.length <= 2) {
    console.error(`ERROR: SimpleAccount for ${signer.address} index ${aaIndex} does not exist. Run "yarn run createAccount" first`)
    process.exit(1);
  }

  console.log(`Using account ${aaAccountAddress}`)

  console.time('Gas Balance Check');
  const entryPoint = EntryPoint__factory.connect(ENTRYPOINT_0_7_0_ADDRESS, signer)
  const aaAccountGasBalance = await entryPoint.balanceOf(aaAccountAddress)
  console.timeEnd('Gas Balance Check');

  if (aaAccountGasBalance.eq(parseEther('0'))) {
    console.error(`ERROR: ${aaAccountAddress} has no ether for gas. Run "yarn run fundAccount" first`)
    process.exit(1);
  }

  // NOTE: this can be modified to send any kind of UserOp with the correct typechain types.
  // Just replace the `testCounter.justemit()` call with your own contract call.
  // const testCounter = TestCounter__factory.connect(TEST_COUNTER_ADDRESS, aaSigner)
  // const tx = await testCounter.justemit()

  console.time('Transaction Execution');
  const tikTrixEscrow = TikTrixEscrow__factory.connect(TIKTRIX_ESCROW_ADDRESS, aaSigner)
  const tx = await tikTrixEscrow.depositFee(
    parseInt(process.env.DEPOSIT_BASE_DATE || '20240318'),
    parseInt(process.env.DEPOSIT_GAME_SEQ || '1'),
    parseInt(process.env.DEPOSIT_MEMBER_SEQ || '1112'),
    {
      value: ethers.utils.parseEther(process.env.DEPOSIT_VALUE || "0.001"),
      gasLimit: 500000
    }
  )
  console.timeEnd('Transaction Execution');

  console.time('Transaction Confirmation');
  await tx.wait()
  console.timeEnd('Transaction Confirmation');

  const endTime = Date.now();
  console.timeEnd('Total Execution Time');
  console.log(`Total execution time: ${(endTime - startTime) / 1000} seconds`);
})()
