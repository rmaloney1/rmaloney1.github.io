import Image from "next/image";
import loader from "../loader";

export default function MyImage(props) {
  return (
    <Image
      loader={loader}
      {...props}
      blurDataURL="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png"
    />
  );
}
