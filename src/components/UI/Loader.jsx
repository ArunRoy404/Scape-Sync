import { Grid } from 'ldrs/react'
import 'ldrs/react/Grid.css'

const Loader = ({ size = '60', speed = 1.5, color = 'black' }) => {
    return (
        <Grid
            size={size}
            speed={speed}
            color={color}
        />
    );
};

export default Loader;