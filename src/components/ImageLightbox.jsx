import { useEffect } from 'react';
import './ImageLightbox.css';

function ImageLightbox({
  images,
  activeIndex,
  onClose,
  onChange,
}) {
  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowLeft') {
        onChange(
          activeIndex === 0
            ? images.length - 1
            : activeIndex - 1,
        );
      }

      if (event.key === 'ArrowRight') {
        onChange(
          activeIndex === images.length - 1
            ? 0
            : activeIndex + 1,
        );
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    activeIndex,
    images.length,
    onChange,
    onClose,
  ]);

  if (activeIndex === null || !images[activeIndex]) {
    return null;
  }

  const activeImage = images[activeIndex];

  const showPreviousImage = () => {
    onChange(
      activeIndex === 0
        ? images.length - 1
        : activeIndex - 1,
    );
  };

  const showNextImage = () => {
    onChange(
      activeIndex === images.length - 1
        ? 0
        : activeIndex + 1,
    );
  };

  return (
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="프로젝트 이미지 확대 보기"
      onClick={onClose}
    >
      <button
        className="lightbox-close"
        type="button"
        onClick={onClose}
        aria-label="확대 이미지 닫기"
      >
        ×
      </button>

      {images.length > 1 && (
        <button
          className="lightbox-navigation lightbox-previous"
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            showPreviousImage();
          }}
          aria-label="이전 이미지"
        >
          ←
        </button>
      )}

      <figure
        className="lightbox-content"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={activeImage.src}
          alt={activeImage.alt}
        />

        <figcaption>
          {String(activeIndex + 1).padStart(2, '0')}
          {' / '}
          {String(images.length).padStart(2, '0')}
        </figcaption>
      </figure>

      {images.length > 1 && (
        <button
          className="lightbox-navigation lightbox-next"
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            showNextImage();
          }}
          aria-label="다음 이미지"
        >
          →
        </button>
      )}
    </div>
  );
}

export default ImageLightbox;