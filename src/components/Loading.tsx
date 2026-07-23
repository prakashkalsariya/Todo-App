 const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />

        {/* Loading Text */}
        <h3 className="text-lg font-semibold text-gray-800">
          Processing Request...
        </h3>

        <p className="text-sm text-gray-500 text-center max-w-xs">
          Please wait while we fetch your data. This may take a few seconds.
        </p>
      </div>
    </div>
  );
};

export default Loading
