const Title = ({text, rotateColor}) => {
    return (
        <h1 className={"text-2xl font-bold tracking-wide leading-loose text-center gradientText "
                        + ("rotateColor" + rotateColor)}>
            {text}
        </h1>
    );
}

export default Title;