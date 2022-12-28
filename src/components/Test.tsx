interface props {
    someText: string;
}

const Test = (props: props) => {
    return `${props.someText}`;
};

export default Test;
