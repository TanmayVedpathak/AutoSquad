import Loader from "react-js-loader"

const LoaderComponent = () => {
  return (
    <div className="h-[20vh] flex justify-center items-center">
      <Loader
        type="spinner"
        bgColor="#000000"
        size={60}
      />
    </div>
  )
}

export default LoaderComponent