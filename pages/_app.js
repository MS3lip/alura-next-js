import GlobalStyle from "../src/theme/GlobalStyle";

function MyApp({ Component, pagePros}) {
    return (
        <>
        <GlobalStyle/>
        <Component {...pagePros} />
        </>
    );
} 

export default MyApp;