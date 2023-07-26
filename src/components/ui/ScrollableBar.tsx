import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desk: {
    breakpoint: { max: 4000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 576 },
    items: 5,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 3,
  },
};

export default function ScrollableBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Carousel containerClass="flex w-full gap-3" responsive={responsive}>
      {children}
    </Carousel>
  );
}
