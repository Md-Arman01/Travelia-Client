import { MagnifyingGlass } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center mt-80">
      <MagnifyingGlass
        visible={true}
        height="150"
        width="150"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#FF4804"
      />
    </div>
  );
};

export default Loading;
