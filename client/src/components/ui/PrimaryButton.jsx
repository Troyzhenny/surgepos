import PropTypes from "prop-types";

export function PrimaryButton({ label, onClick }) {
  return (
    <button type="button" onClick={onClick} className="w-80 h-12 bg-dark rounded-sm text-white font-semibold flex items-center justify-center transition-all hover:bg-transparent hover:text-dark hover:border-2 border-dark">
      {label}
    </button>
  );
}

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
