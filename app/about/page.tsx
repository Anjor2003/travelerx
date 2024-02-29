import Overlay from "@/components/ui/Overlay"
import Image from "next/image"

const page = () => {
  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="relative h-[500px] w-full">
        <Image
          src="/assets/about.jpg"
          fill
          alt="about image"
          className="object-cover"
        />
        <Overlay />
        <h1 className="flex absolute w-full h-full justify-center items-center text-5xl sm:text-6xl font-extrabold uppercase text-white">
          About us
        </h1>
      </div>
      <div className="leading-8 text-lg bg-white -mt-[80px] relative w-[90%] m-auto rounded-lg p-5 shadow-xl text-center max-md:mt-0 max-md:w-full max-md:bg-transparent max-md:shadow-none">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          tenetur distinctio aspernatur voluptate consequuntur, culpa minus
          nihil alias incidunt ab repellendus sit accusantium saepe pariatur
          perferendis et velit? Enim et consectetur maiores voluptate, odio quas
          soluta! Eveniet molestiae suscipit, pariatur corporis quae ullam eum
          eaque eos quam doloremque distinctio rem cum, ad fuga quia nesciunt
          animi ab repellendus voluptatum accusantium quis debitis ratione at
          repellat! Perspiciatis fugiat velit consectetur sapiente eligendi nisi
          placeat earum dicta fuga excepturi consequuntur laudantium at deleniti
          quaerat, dolorem ullam culpa atque eius unde quia officia, possimus
          corporis? Aut ut non fuga soluta qui deserunt porro.
        </p>
        <div className="w-full items-center flex justify-center">
          <Image
            src="/assets/signature.png"
            width={500}
            height={500}
            alt="signature"
          />
        </div>
      </div>
    </div>
  );
}

export default page