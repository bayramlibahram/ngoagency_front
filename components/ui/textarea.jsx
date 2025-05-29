export const Textarea = ({ label, className = "", ...props }) => {
  return (
    <div className="space-y-1.5">
      {label && <label className="text-[15px] text-gray-600 font-medium">{label}</label>}
      <textarea
        className={`w-full min-h-[120px] border border-gray-100 rounded-xl py-3 px-4 text-[15px] placeholder:text-gray-300 focus:border-amber-200 focus:ring-1 focus:ring-amber-100 focus:outline-none resize-none ${className}`}
        {...props}
      />
    </div>
  );
};
