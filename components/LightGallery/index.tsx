import { useEffect, useRef } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";

type GalleryProps = {
  images: Array<{ url: string; alt: string }>;
  openIndex: number | null;
  onClose?: () => void;
};

export default function LGViewer({ images, openIndex, onClose }: GalleryProps) {
  const lgRef = useRef<any>(null);

  useEffect(() => {
    if (openIndex != null && lgRef.current) {
      lgRef.current.instance.openGallery(openIndex);
    }
  }, [openIndex]);

  return (
    <LightGallery
      onInit={(detail) => {
        lgRef.current = detail;
      }}
      onAfterClose={() => onClose?.()}
      dynamic
      closable
      speed={500}
      download={false}
      plugins={[lgThumbnail]}
      dynamicEl={images.map((img) => ({
        src: img.url,
        thumb: img.url,
        subHtml: `<p>${img.alt}</p>`,
      }))}
    />
  );
}
