import React from "react";
import PropTypes from "prop-types";
import Error from "next/error";

const CustomErrorPage = ({ statusCode }: any) => {
    return <Error statusCode={statusCode} />;
};

CustomErrorPage.getInitialProps = ({ res, err }: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

CustomErrorPage.propTypes = {
    statusCode: PropTypes.number,
};

export default CustomErrorPage;
