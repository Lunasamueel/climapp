interface Clima {
    name: string;
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
    };
};

export default Clima;