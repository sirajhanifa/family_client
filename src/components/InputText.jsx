import React from 'react'

const InputText = ({label, name, value, onChange, placeholder}) => {
 return (
    <div className="mb-4">
      {label && <label className="block font-semibold mb-1">{label}</label>}
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border px-3 py-2 rounded"
      />
    </div>
  );
}

export default InputText