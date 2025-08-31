import { X } from "lucide-react";

const locations = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Hyderabad"];

const LocationModal = ({ isOpen, value, onClose, onSave }) => {
  if (!isOpen) return null;

  let selected = value || "";

  const handleChange = (e) => {
    selected = e.target.value;
  };

  const handleSave = () => {
    onSave(selected || value || locations[0]);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 text-black shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Select Your Location</h3>
          <button onClick={onClose} className="p-2 rounded hover:bg-black/5">
            <X size={18} />
          </button>
        </div>

        <label className="block text-sm text-gray-700 mb-2">City</label>
        <select
          defaultValue={value || ""}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-yellow-500"
        >
          <option value="" disabled>
            Choose a city
          </option>
          {locations.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <div className="mt-6 flex gap-3">
          <button
            onClick={handleSave}
            className="flex-1 rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-black hover:bg-yellow-400 transition"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border border-black px-4 py-2 font-semibold hover:bg-black hover:text-white transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
