// import { createContext, useState } from "react";
// import run from "../config/gemini";

// export const Context = createContext();

// const ContextProvider = (props)=>{

//     const [input,setInput] = useState("");
//     const [recentPrompt,setRecentPrompt] = useState("");
//     const [prevPrompts,setPrevPrompts] = useState([]);
//     const [showResult,setShowResult] = useState(false);
//     const [loading,setLoading] = useState(false);
//     const [resultData,setResultData] = useState("");
    

//     const onSent = async(prompt)=>{

//         setResultData("")
//         setLoading(true)
//         setShowResult(true)
//         const response= await run(input)
//         setResultData(response)
//         setLoading(false)
//         setInput("")

//     }

//     onSent("what is react js")

//     const ContextValue = {

//         prevPrompts,
//         setPrevPrompts,
//         onSent,
//         setRecentPrompt,
//         recentPrompt,
//         showResult,
//         loading,
//         resultData,
//         input,
//         setInput

//     }

//     return(
//         <Context.Provider value={ContextValue}>
//             {props.children}
//         </Context.Provider>
//     )
// }

// export default ContextProvider




import { createContext, useState, useEffect, useMemo } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const onSent = async (prompt) => {
        setLoading(true);
        try {
            const result = await run(prompt);
            setResultData(result);
            setShowResult(true);
        } catch (error) {
            console.error("Error running prompt:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        onSent("what is react js");
    }, []);

    const ContextValue = useMemo(() => ({
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    }), [prevPrompts, recentPrompt, showResult, loading, resultData, input]);

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
