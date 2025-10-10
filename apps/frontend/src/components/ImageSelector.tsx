import ImageOptions from "../utils/imageOptions"


const ImageSelector = () => {
    return (
        <>
            <div className="flex row gap-6 flex-wrap">
                {ImageOptions.map((options) =>
                    <img
                        src={options.image}
                        width="150"
                        height="150"
                        sizes="auto, (max-width: 30em) 100vw, (max-width: 50em) 50vw, calc(33vw - 100px)"
                        alt={options.label}
                    />
                )}
            </div>
        </>
    )
}

export default ImageSelector