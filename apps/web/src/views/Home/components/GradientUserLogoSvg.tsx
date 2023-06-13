import Image, { ImageProps } from "next/image";
import Users from "../../../../public/images/Userslogo.png";

const GradientUsersLogo: React.FC<Omit<ImageProps, "src" | "alt">> = (
  props
) => {
  return (
    <Image src={Users} width={500} height={500} alt="IceCreamSwap" {...props} />
  );
};

export default GradientUsersLogo;
