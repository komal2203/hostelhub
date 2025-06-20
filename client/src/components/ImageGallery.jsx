import { useState } from "react";
import ImageModal from "./ImageModal";

export default function ImageGallery({ images }) {
  const [modalImage, setModalImage] = useState(null);

  console.log("Images received in gallery:", images); // Debug log

  return (
    <div className="w-full mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map(({ src, alt, createdAt }, idx) => {
          console.log("Processing image:", { src, alt, createdAt }); // Debug log
          return (
            <div
              key={idx}
              className="relative group rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg hover:shadow-pink-100 transition-all duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                  onClick={() => setModalImage({ src, alt, createdAt })}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white font-semibold bg-opacity-60 text-pink-700 px-2 py-1">
                {createdAt && (
                  <p className="text-xs opacity-75">
                    {new Date(createdAt).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          createdAt={modalImage.createdAt}
          onClose={() => setModalImage(null)}
        />
      )}
    </div>
  );
}
