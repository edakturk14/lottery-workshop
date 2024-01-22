import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useDeployedContractInfo, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { parseEther } from "viem";
import { useScaffoldContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {


  return (
    <>
      <div className="items-center flex-col flex pt-10">
        <div className="px-5">
          <div className="card w-150 bg-base-100 shadow-xl">
              <div className="card-body p-10">
              <h2 className="card-title">Welcome to the Lottery App!</h2>
                <div className="card-actions justify-center p-3">
                  <button className="btn btn-primary center w-full">Enter</button>
                </div>
              </div>
            </div>


        </div>
      </div>
    </>
  );
};

export default Home;