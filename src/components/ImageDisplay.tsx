interface Props {
  id: number;
  imgUrl: string;
}

const ImageDisplay = ({ id, imgUrl }: Props) => {
  return (
    <div className="img-wrapper">
      <img src={imgUrl} />
      <span>{id}</span>
    </div>
  );
};

export default ImageDisplay;
