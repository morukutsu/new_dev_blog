export default props => {
    const date = new Date(props.date);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const month = months[date.getMonth()];
    const day = date.getUTCDate() + 1;
    const year = date.getUTCFullYear();

    return (
        <div style={styles.subtitle}>
            {month} {day}, {year}
        </div>
    );
};

const styles = {
    subtitle: {
        fontSize: 14,
        marginBottom: 4
    }
};
