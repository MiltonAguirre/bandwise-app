import { Container, Image } from "@nextui-org/react";

const BandwiseLogo = ({ width, height }) => {
  return (
    <>
      <Image
        src="/img/bandwise-logo.png"
        width={width}
        height={height}
        alt="Bandwise logo"
        objectFit="contain"
      />
    </>
  );
};
BandwiseLogo.defaultProps = {
  width: 100,
  height: 100,
};
export default BandwiseLogo;
