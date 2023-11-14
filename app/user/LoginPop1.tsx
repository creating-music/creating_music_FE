import React, { useState } from "react";

export default function ModalUnstyled() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        type="button"
        onClick={handleOpen}
      >
        Open modal
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={handleClose}
          ></div>
          <div className="dark:bg-gray-900 max-w-sm rounded-lg bg-white p-8">
            <h3 className="mb-2 text-xl font-semibold">Text in a modal</h3>
            <p className="text-gray-800 dark:text-gray-400 text-sm">
              Aliquid amet deserunt earum!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
