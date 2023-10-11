import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export default function ColorCardClient({ hex, position }) {
  const copyToClipboard = async () => {
    try {
      console.log('click')
      await navigator.clipboard.writeText(hex);
      Toastify({
        text: 'copied to clipboard 🧷',
        duration: 2000,
        close: true,
        gravity: "bottom",
        position: "right",
        style: {
          background: 'linear-gradient(45deg, #883aea, #883aea 30%, #bb6dff 60%)',
        }
      }).showToast();
    } catch (err) {
      Toastify({
        text: `Failed to copy hex value ${hex}!`,
        duration: 2000,
        close: true,
        gravity: "bottom",
        position: "right",
      }).showToast();
    }
  };

  return (
    <li onClick={copyToClipboard} data-position={position} className="color-card flex flex-1 list-none items-center justify-center p-4 cursor-pointer" style={{ backgroundColor: hex, cursor: 'pointer' }}>
      <p>{hex}</p>
    </li>
  );
}