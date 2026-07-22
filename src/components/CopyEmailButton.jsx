import { useEffect, useRef, useState } from 'react';

function CopyEmailButton({
  email,
  className = '',
  children = 'COPY EMAIL',
  copiedChildren = 'COPIED',
}) {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const copyWithFallback = (text) => {
    const textarea = document.createElement('textarea');

    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';

    document.body.appendChild(textarea);
    textarea.select();

    const copySucceeded = document.execCommand('copy');

    document.body.removeChild(textarea);

    if (!copySucceeded) {
      throw new Error('이메일 복사에 실패했습니다.');
    }
  };

  const handleCopy = async () => {
    if (!email) {
      return;
    }

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        copyWithFallback(email);
      }

      setIsCopied(true);
      window.clearTimeout(timeoutRef.current);

      timeoutRef.current = window.setTimeout(() => {
        setIsCopied(false);
      }, 1600);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <button
      className={className}
      type="button"
      onClick={handleCopy}
      aria-label={`${email} 이메일 주소 복사`}
    >
      {isCopied ? copiedChildren : children}
    </button>
  );
}

export default CopyEmailButton;