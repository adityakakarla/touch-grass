interface Props {
  imageSource: string;
}

function MyImage(props: Props) {
  //return <img src="grass.jpg" className="img-max" alt="Grass"></img>;
  return(
    <img src={props.imageSource} className="img-max" alt="Grass"></img>
  );
}

export default MyImage;
