import { ProgressSpinner } from "primereact/progressspinner";

const Spinner = () => {
  return (
    <div className="flex align-items-center justify-content-center">
      <ProgressSpinner
        style={{
          width: "30px",
          height: "30px",
        }}
      />
    </div>
  );
};

export default Spinner;
