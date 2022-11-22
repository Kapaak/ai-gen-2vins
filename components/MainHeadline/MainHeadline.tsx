import Image from "next/image";
import NerualNetwork from "../../public/images/nerual-network.jpg";

export const MainHeadline = () => {
  return (
    <div className="mt-4">
      <h1 className="text-center text-4xl">Generování výstupu pomocí AI</h1>
      <div className="relative m-10 h-60">
        <Image
          src={NerualNetwork}
          fill
          alt="neural network imagination"
          className="rounded-lg object-cover shadow-lg"
        />
      </div>
    </div>
  );
};
